import axios from 'axios';
import Image from 'next/future/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ACTION_ROUTES } from '../constants/constant';
import { toast } from 'react-toastify';
import { parseCookies } from 'nookies';

const FollowUserCard = ({ index,image,id,username,name,is_follow,handleUpdate,ismainprofile }) => {

    const [loading, setLoding] = useState(false);
    const cookies = parseCookies();
    const token = cookies.token;
    const Currentid = cookies.currentuser;
    
    const removeUserCard = (event, userId) => {
        const card = document.getElementById(`follower-card-${userId}`);
        if (card) {
            card.remove();
        }
    };

    const handleToggleFollow = (event, id) => {
        if (is_follow) {
            setLoding(true);
            if (ismainprofile) {
                // const wallerList = event.target.closest('.waller-list');
                // if (wallerList) {
                //     wallerList.remove();
                // }
                unfollowUser(id);
            } else {
                unfollowUser(id);
            }
        } else {
            setLoding(true);
            followUser(id);
        }
    };

    const followUser = async (userId) => {
        try {

            const response = await axios.post(ACTION_ROUTES.FollowUserAPI + '/' + userId, '' ,{
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });

            if (response.status === 200) {
                setLoding(false);
                handleUpdate();

            } else {
                toast.error('Please try again later.');
            }
            setLoding(false);
        } catch (error) {
            console.log(`Error In follow User : ${error}`);
        }
    };

    const unfollowUser = async (userId) => {
        try {
            const response = await axios.delete(ACTION_ROUTES.UnFollowUserAPI + '/' + userId, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });
    
            if (response.status === 200) {
                setLoding(false);
                handleUpdate();
            } else {
                toast.error('Please try again later.');
            }
        } catch (error) {
            console.log(`Error In Unfollow User: ${error}`);
        }
    };

    return (
        <>
                <div className='waller-list' id={`follower-card-${id}`} key={'follower' + index}>
                    <div className='d-flex flex-wrap'>
                        <Link href={`${Number(id) === Number(Currentid) ?  `/profile` : `/profile/${username}`}`}><Image src={image || '/img/user.jpg'} className='rounded-circle cursorPointer' layout='raw' width={50} height={50} alt='user' /></Link>
                        <div className='d-flex flex-column ms-3'>
                            <Link href={`${Number(id) === Number(Currentid) ?  `/profile` : `/profile/${username}`}`}><span id={`wallet-id-${index}`} className='wallet-id cursorPointer'>{name}</span></Link>
                            <Link href={`${Number(id) === Number(Currentid) ?  `/profile` : `/profile/${username}`}`}><span className='label cursorPointer'>{username}</span></Link>
                        </div>
                    </div>
                    {Number(id) !== Number(Currentid) ? (
                        <button className='gradient-text-btn rounded-full button-small' onClick={(event) => { handleToggleFollow(event, id);handleUpdate();}}>{is_follow ? 'Unfollow' : 'Follow'}</button>
                    ) : ''}
                </div>
        </>
    );
};

export default FollowUserCard;

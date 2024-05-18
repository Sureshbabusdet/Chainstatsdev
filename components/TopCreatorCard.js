import Image from 'next/future/image';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import EthereumAddress from './EthereumAddress';

const TopCreatorCard = ({index,id,image,name,balance,type,username,twitterVarified,wallet}) => {
    const cookies = parseCookies();
    const Currentid = cookies.currentuser;

    return (
        <Link href={`${Number(id) === Number(Currentid) ?  `/profile` : `/profile/${username}`}`} passHref>
            <div id={`${id === Currentid ?  `/profile` : `/profile/${username}`}`} className="collection__list d-flex align-items-center mb-20 transition-3 cursorPointer" >
                <div className="collection__list-thumb collection__list-rank mr-20">
                    <Link href={`${Number(id) === Number(Currentid) ?  `/profile` : `/profile/${username}`}`} >
                        <Image width={60} height={60} src={image || '/img/favicon.png'} alt="" />
                    </Link>
                    {twitterVarified ? <Image width={15} height={15} className="istwittervarified" src={'/img/bluetick-img.png'} alt="verified" /> : ""}
                </div>
                <div className="collection__list-content">
                    <h3 className="collection__list-title">
                        <Link href={`${Number(id) === Number(Currentid) ?  `/profile` : `/profile/${username}`}`}  passHref><>{name === null ? EthereumAddress({ address: wallet }) : '@' + name}</></Link>
                    </h3>
                    <div className="collection__list-revenue d-flex align-items-center">
                        <div className="collection__list-revenue-icon mr-5">
                            <span>
                                <i className="fa-brands fa-ethereum"></i>
                            </span>
                        </div>
                        <div className="collection__list-revenue-text">
                            <p><span>{balance}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TopCreatorCard;

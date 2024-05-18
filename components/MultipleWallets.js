import axios from 'axios';
import Image from 'next/future/image';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import { ACTION_ROUTES } from '../constants/constant';
import { toast } from 'react-toastify';
import { setCookie } from 'nookies';
import { useSwitchNetwork, useWeb3 } from '@3rdweb/hooks';

const MultipleWallets = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [loading, setLoading] = useState(false); // Added loading state
    const [walletData, setWalletData] = useState(); // Added loading state
    const { address, chainId, connectWallet, disconnectWallet, getNetworkMetadata } = useWeb3();
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const cookies = parseCookies();
    const token = cookies.token;

    const addWallet = async (address) => {
        try {
            const formData = new FormData();
            formData.append('wallet_id', address);

            const response = await axios.post(ACTION_ROUTES.AddwalletAPI, formData, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });

            

            toast.success('Wallet Added!');
            getWalletData();
            router.push('/profile');
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    console.error('Validation errors:', data.errors);
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                        if (error.code === 'wallet_id') {
                            setErrors({ wallet_id: error.message });
                        }
                    });
                } else {
                    console.error('Something Went Wrong:', error);
                }
            } else {
                console.error('Something Went Wrong:', error);
            }
        }
    };
    
    useEffect(() => {
        if (address && isLoginClicked) {
            addWallet(address);
        }
    }, [address,isLoginClicked]);
    
    const getWalletData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(ACTION_ROUTES.UserWalletAPI, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });
            setWalletData(response.data.wallets)
            setLoading(false);
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    // Handle forbidden error
                    console.error('Validation errors:', data.errors);
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                        // You can set individual error messages for each field here
                        if (error.code === 'email') {
                            setErrors({ email: error.message });
                        }
                        // Handle other error codes if needed
                    });
                } else {
                    // Handle other errors
                    console.error('Something Went Wrong:', error);
                    toast.error('Please try again later.');
                }
            } else {
                console.error('Something Went Wrong:', error);
                toast.error('Please try again later.');
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        getWalletData();
    }, []);

    const copyToClipboard = (index) => {
        const walletId = document.querySelector(`#wallet-id-${index}`);
        const range = document.createRange();
        range.selectNode(walletId);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        setCopiedIndex(index);
        setTimeout(() => {
            setCopiedIndex(null);
        }, 1000);
    };
    // console.log('walletData',walletData)
    return (
        <div className='wallet-area'>
            <div className="contact__content text-center mb-4">
                <h3 className="get_in">Wallets</h3>
                <p>Add one or wallets to showcase all your NFTs in one place</p>
            </div>
            <div className='wallet-box'>
                {walletData ? (
                    <>
                        {walletData.map((item, index) => (
                            <div className='waller-list' key={'wallet' + index}>
                                <div className='d-flex flex-wrap flex-column flex-md-row align-items-center'>
                                    <Image src={'/img/icons/Usdicon.png'} layout='raw' width={50} height={50} alt='usdt' />
                                    <div className='d-flex flex-column ms-0 mt-3 mt-md-0 ms-md-3'>
                                        <span id={`wallet-id-${index}`} className='wallet-id'>{item.wallet_id} <i className={`fas fa-copy`} onClick={() => copyToClipboard(index)}><span className="copied">{copiedIndex === index ? 'Copied' : ''}</span></i></span>
                                        <span className='label'>{item.created_at}</span>
                                    </div>
                                </div>
                                {/* <button className='gradient-text-btn rounded-full button-small'>Disconnect</button> */}
                            </div>
                        ))}
                    </>
                ) : (
                   <p className='pt-4 text-center'>No Wallet Found</p> 
                )}
                {!walletData?.length && (
                    <div className='waller-list justify-content-center' onClick={() => { connectWallet("injected"); setIsLoginClicked(true); }}>
                        <button className='gradient-text-btn rounded-full '>Connect Metamask</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultipleWallets;
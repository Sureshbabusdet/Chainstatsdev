import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Link from 'next/link';
import Image from 'next/future/image';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import Seo from '../../components/Seo';
import { useRouter } from 'next/router';
import Select from 'react-select'
import Guardiansform from '../../components/Guardiansform.js';

ChainGuardians.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function ChainGuardians() {
    const [key, setKey] = useState('single');
    const router = useRouter();

    const metaData = {
        title: 'Chainguardians - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Chainguardians - ChainStats - Unleash the data',
        url: router.asPath,
    };

    const options = [
        { value: 'Collection 1', label: 'Collection 1' },
        { value: 'Collection 1', label: 'Collection 2' },
        { value: 'Collection 1', label: 'Collection 3' }
    ]

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: '#0f0f0f',
            borderColor: state.isFocused ? '#7b7b7b' : '#0f0f0f',
            borderRadius: '40px',
            padding: '8px 20px',
            '&:hover': {
                borderColor: '#7b7b7b',
            },
        }),
        input: (provided, state) => ({
            ...provided,
            color: 'white',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#0f0f0f' : '#0f0f0f',
            color: state.isSelected ? 'white' : 'inherit',
            '&:hover': {
                backgroundColor: '#2e2e2e',
            },
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: 'white',
        }),
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: '0f0f0f', // Change menu background color
            color: 'white',
        }),
    };

    return (
        <>
            <Seo {...metaData} />
            <section className="creator__area mt-80">
                <div className="creator__banner include-bg"></div>
                <div className="creator__border"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="create__preview mr-70">
                                <div className="nft__box theme-bg-dark mb-30 transition-3">
                                    <h3 className="nft__box-thumb create__preview-title"></h3>

                                    <div className="nft__box-thumb w-img mb-20">
                                        <Link href="/">
                                            <Image className='favicon_logo' width={200} height={200} layout="raw" src="/img/logo-bg2.png" alt="" quality={100} />
                                        </Link>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="sec_heading mb-3 text-start"><h4>Chain Guardian NFTs</h4></div>

                            <p className='slider__title_p'>The Chain Guardian NFTs solely serve as required digital verifiable credentials for granting access towards validation of data to ensure only complete and accurate data is displayed on the ChainStats application.
                                <br /><br />
                                As the utilities of Chain Guardians are specifically for ensuring that only registered data validators are permissioned to assist in the consensus. These NFTs should ONLY be seen as an access key or subscription towards accessing the Node Portal and must NOT be seen as a form of investment.
                            </p>
                            <div className="sec_heading mb-3 text-start"><p>Please fill out this Form</p></div>

                            <div className="create__form pt-15 pb-10">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="create__nav mb-10">
                                            <Guardiansform />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
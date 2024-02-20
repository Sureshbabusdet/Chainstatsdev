import MainLayout from '@/layouts/main/nav/MainLayout.js';
import './index.css'
import Link from 'next/link';
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import NiceSelect from '@/components/NiceSelect/NiceSelect';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

ChainGuardians.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default function ChainGuardians() {
    const [key, setKey] = useState('single');
    const router = useRouter();

    const metaData = {
        title: 'Chainguardians - ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'Chainguardians - ChainStats - Unleash the data',
        url: router.asPath,
    };

    return (
        <>
            <Seo {...metaData} />
            <section className="creator__area">
                <div className="creator__banner include-bg"></div>
                <div className="creator__border"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="create__preview mr-70">
                                <div className="nft__box theme-bg-dark mb-30 transition-3">
                                    <h3 className="nft__box-thumb create__preview-title"></h3>

                                    <div className="nft__box-thumb w-img mb-20">
                                        <a href="product-details.html">
                                            <Image width={250} height={200} src="/img/whitelogo.png" alt="" />

                                        </a>
                                        <p className="mt-10">Our on-chain ecosystem leverages the decentralization of community and immutability of blockchain technology to create an aggregated platform that brings the utility of this innovative technology in its purest form of raw blockchain data to be analyzed however one finds fitting. With our solution, long gone are the days of fragmented, siloed &amp; non user centric data.</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <h3 className="slider__title-2 mt-10 ">

                                <span className='text_white'>Chain</span><span>Guardian </span>,<span className="has-shape"> NFTs	</span>
                            </h3>

                            <p className='slider__title_p'>The Chain Guardian NFTs solely serve as required digital verifiable credentials for granting access towards validation of data to ensure only complete and accurate data is displayed on the ChainStats application.
                                <br /><br />
                                As the utilities of Chain Guardians are specifically for ensuring that only registered data validators are permissioned to assist in the consensus. These NFTs should ONLY be seen as an access key or subscription towards accessing the Node Portal and must NOT be seen as a form of investment.

                            </p>




                            <h3 className="section__title-3" >Please fill out<span className="section_span"> this Form </span></h3>
                            <div className="create__form pt-55 pb-120">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="create__nav mb-10">


                                                <Tabs
                                                    id="controlled-tab-example"
                                                    activeKey={key}
                                                    onSelect={(k) => setKey(k)}
                                                    className="justify-content-sm-end"
                                                >
                                                    <Tab eventKey="single" title="Single">
                                                        <div className="row align-items-center">
                                                            <div className="col-xxl-12">
                                                                <div className="create__input-box">
                                                                    <h4>Upload File<span>*</span></h4>
                                                                    <p>Add your unique image</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="create__upload text-center">
                                                                    <p>JPG, PNG and GIF Max 30mb.</p>
                                                                    <label for="input-file">Select a file</label>
                                                                    <input id="input-file" type="file" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="create__input-box">
                                                                    <h4>Name <span>*</span></h4>
                                                                    <p>Choose a unique name for your NFT</p>
                                                                    <div className="create__input">
                                                                        <input type="text" placeholder="Enter the NFT's name" className='input_design' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="create__input-box">
                                                                    <h4>Description</h4>
                                                                    <p>{"Describe your NFT, help other users understand what's unique about it"}</p>
                                                                    <div className="create__input">
                                                                        <textarea placeholder="Enter the NFT's Description" className='input_design'></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="create__input-box">
                                                                    <h4>Discord Handle <span>*</span></h4>
                                                                    <p>{"Describe your Discord Handle, help other users understand what's unique about it"}</p>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="create__input">
                                                                                <input type="text" placeholder="Discord Handle" className='input_design' />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="create__input">
                                                                                <input type="text" placeholder="email" className='input_design' />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="create__input-box">
                                                                    <h4>Collection</h4>
                                                                    <p>The collection where your NFT will appear.</p>
                                                                    <div className="create__input">
                                                                        <NiceSelect id="s-select" placeholder="Select a Collection" className="sampleClass">
                                                                        <option value="Select a Collection" className='option selected focus'>Select a Collection</option>
                                                                            <option value="Collection 1" className='option'>Collection 1</option>
                                                                            <option value="Collection 2" className='option'>Collection 2</option>
                                                                            <option value="Collection 3" className='option'>Collection 3</option>
                                                                            <option value="Collection 4" className='option'>Collection 4</option>
                                                                        </NiceSelect>
                                                                        <button type="button" className="refresh-btn"><i className="fa-regular fa-arrows-rotate"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xxl-12">
                                                                <div className="collection__box-user d-inline-block">
                                                                    <div className="collection__box-user-inner d-flex align-items-center">
                                                                        <div className="collection__box-user-thumb mr-10">
                                                                            <a href="collection.html">
                                                                                <Image width={32} height={32} src="/img/favicon.png" alt="" />

                                                                            </a>
                                                                        </div>
                                                                        <div className="collection__box-user-content">
                                                                            <h5>
                                                                                <a href="#">Create ChainStats Guardians </a>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey="multiple" title="multiple">
                                                        <div className="row align-items-center">
                                                            <div className="col-xxl-12">
                                                                <div className="create__input-box">
                                                                    <h4>Upload File<span>*</span></h4>
                                                                    <p>Add your unique image file</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="create__upload text-center">
                                                                    <p>JPG, PNG &amp; GIF. Max 30mb.</p>
                                                                    <label for="input-file-2">Select a file</label>
                                                                    <input id="input-file-2" type="file" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="create__input-box">
                                                                    <h4>Name <span>*</span></h4>
                                                                    <p>Choose a unique name for your NFT</p>
                                                                    <div className="create__input">
                                                                        <input type="text" placeholder="Enter the NFT's name" className='input_design' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="create__input-box">
                                                                    <h4>Description</h4>
                                                                    <p>{"Describe your NFT, help other users understand what's unique about it"}</p>
                                                                    <div className="create__input">
                                                                        <textarea placeholder="Enter the NFT's Description" className='input_design'></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="create__input-box">

                                                                    <h4>Discord Handle <span>*</span></h4>
                                                                    <p>{"Describe your Discord Handle, help other users understand what's unique about it"}</p>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="create__input">
                                                                                <input type="text" placeholder="Discord Handle " className='input_design' />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="create__input">
                                                                                <input type="text" placeholder="Email" className='input_design' />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-12">
                                                                <div className="create__input-box">
                                                                    <h4>Collection</h4>
                                                                    <p>The collection where your NFT will appear.</p>
                                                                    <div className="create__input">
                                                                    <NiceSelect id="m-select" placeholder="Select a Collection" className="sampleClass">
                                                                        <option value="Select a Collection" className='option selected focus'>Select a Collection</option>
                                                                            <option value="Collection 1" className='option'>Collection 1</option>
                                                                            <option value="Collection 2" className='option'>Collection 2</option>
                                                                            <option value="Collection 3" className='option'>Collection 3</option>
                                                                            <option value="Collection 4" className='option'>Collection 4</option>
                                                                        </NiceSelect>
                                                                        
                                                                         <button type="button" className="refresh-btn"><i className="fa-regular fa-arrows-rotate"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-xxl-12">

                                                                <div className="collection__box-user d-inline-block">
                                                                    <div className="collection__box-user-inner d-flex align-items-center">
                                                                        <div className="collection__box-user-thumb mr-10">
                                                                            <a href="collection.html">
                                                                                <Image width={32} height={32} src="/img/favicon.png" alt="" />

                                                                            </a>
                                                                        </div>
                                                                        <div className="collection__box-user-content">
                                                                            <h5>
                                                                                <a href="#">Create ChainStats Multiple Guardians </a>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </Tab>

                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
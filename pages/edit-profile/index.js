import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/main/nav/MainLayout.js';
import Image from 'next/image';
import { Tabs, Tab, TabContainer, TabPane } from 'react-bootstrap';
import Select from 'react-select'

EditProfile.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function EditProfile() {
   const [activeTab, setActiveTab] = useState('nav-information');
   const handleTabClick = (tabId) => {
      setActiveTab(tabId);
   };

   const [likeNotifications, setLikeNotifications] = useState(true);
   const [postNotifications, setPostNotifications] = useState(true);
   const [newNotifications, setNewNotifications] = useState(true);
   const [saleNotifications, setSaleNotifications] = useState(true);
   const [paymentNotifications, setPaymentNotifications] = useState(true);

   const handleSwitchChange = (notificationType) => {
      switch (notificationType) {
         case 'like':
            setLikeNotifications(!likeNotifications);
            break;
         case 'post':
            setPostNotifications(!postNotifications);
            break;
         case 'new':
            setNewNotifications(!newNotifications);
            break;
         case 'sale':
            setSaleNotifications(!saleNotifications);
            break;
         case 'payment':
            setPaymentNotifications(!paymentNotifications);
            break;
         default:
            break;
      }
   };

   const options = [
    { value: 'Service 1', label: 'Service 1' },
    { value: 'Service 1', label: 'Service 2' },
    { value: 'Service 1', label: 'Service 3' }
]

const country = [
    { value: 'Country 1', label: 'Country 1' },
    { value: 'Country 1', label: 'Country 2' },
    { value: 'Country 1', label: 'Country 3' }
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
         <section className="edit__profile pb-120 pt-80">
            <div className="edit__profile ">
               <div className="container-fluid fix p-0">
                  <div className="row">
                     <div className="col-xxl-12">
                        <div className="profile__cover-wrapper p-relative">
                           <div className="profile__cover w-img tp-img-cover">
                              <Image width={1600} layout='responsive' height={160} src="/img/creator-bg-2.jpg" alt="" />
                           </div>
                           <div className="profile__cover-edit">
                              <input id="profile-cover-input" className="cover-img-popup" type="file" />
                              <label for="profile-cover-input"><i className="fa-regular fa-pen-to-square"></i></label>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xxl-12">
                        <div className="profile__thumb-wrapper  text-center">
                           <div className="profile__thumb text-center tp-img-profile d-inline-block p-relative">
                              <Image width={120} height={120} src="/img/josh.png" alt="" />
                              <div className="profile__thumb-edit">
                                 <input id="profile-thumb-input" className="profile-img-popup" type="file" />
                                 <label for="profile-thumb-input"><i className="fa-regular fa-camera"></i></label>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-4 col-lg-4">
                     <div className="profile__tab mr-40">
                        <nav>
                           <div className="nav nav-tabs flex-column" id="profile-tab" role="tablist">
                              <button className={`nav-link ${activeTab === 'nav-information' ? 'active' : ''}`}
                                 id="nav-information-tab" onClick={() => handleTabClick('nav-information')} data-bs-target="#nav-information" type="button" role="tab" aria-controls="nav-information" aria-selected="false"><i className="fa-regular fa-user-pen"></i>Profile Information</button>
                              <button className={`nav-link ${activeTab === 'nav-password' ? 'active' : ''}`}
                                 id="nav-password-tab" onClick={() => handleTabClick('nav-password')} data-bs-target="#nav-password" type="button" role="tab" aria-controls="nav-password" aria-selected="false"><i className="fa-regular fa-lock"></i>Change Password</button>
                              <button className={`nav-link ${activeTab === 'nav-ticket' ? 'active' : ''}`}
                                 id="nav-ticket-tab" onClick={() => handleTabClick('nav-ticket')} data-bs-target="#nav-ticket" type="button" role="tab" aria-controls="nav-ticket" aria-selected="false"><i className="fa-regular fa-ticket"></i>Transactions</button>
                              <button className={`nav-link ${activeTab === 'nav-notification' ? 'active' : ''}`}
                                 id="nav-notification-tab" onClick={() => handleTabClick('nav-notification')} data-bs-target="#nav-notification" type="button" role="tab" aria-controls="nav-notification" aria-selected="false"><i className="fa-regular fa-bell"></i>Notification</button>
                           </div>
                        </nav>
                     </div>
                  </div>
                  <div className="col-xxl-8 col-lg-8">
                     <div className="profile__tab-content">
                        <div className="tab-content" id="profile-tabContent">
                           <div className={`tab-pane fade  ${activeTab === 'nav-information' ? 'show active' : ''}`} id="nav-information" role="tabpanel" aria-labelledby="nav-information-tab">
                              <div className="profile__info">
                                 <h3 className="profile__info-title">Welcome Joshua!</h3>
                                 <div className="profile__info-content">
                                    <form action="#">
                                       <div className="row">
                                          <div className="col-xxl-6 col-md-6">
                                             <div className="profile__input-box">
                                                <h4>First Name</h4>
                                                <div className="profile__input">
                                                   <input type="text" placeholder="Enter first name" value="Joshua" />
                                                   <i className="fa-light fa-user"></i>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-6 col-md-6">
                                             <div className="profile__input-box">
                                                <h4>Last Name</h4>
                                                <div className="profile__input">
                                                   <input type="text" placeholder="Enter last name" value="Milbers" />
                                                   <i className="fa-light fa-user"></i>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-12">
                                             <div className="profile__input-box">
                                                <h4>Email</h4>
                                                <div className="profile__input">
                                                   <input type="email" placeholder="Enter your email" value="info@chainstats.pro" />
                                                   <i className="fa-light fa-envelope"></i>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-6 col-md-6">
                                             <div className="profile__input-box">
                                                <h4>Facebook</h4>
                                                <div className="profile__input">
                                                   <input type="text" placeholder="Enter username" value="JoshuaMilbers" />
                                                   <i className="fa-brands fa-facebook-f"></i>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-6 col-md-6">
                                             <div className="profile__input-box">
                                                <h4>Twitter</h4>
                                                <div className="profile__input">
                                                   <input type="text" placeholder="Enter username" value="JoshuaMilbers" />
                                                   <i className="fa-brands fa-twitter"></i>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-6 col-md-6">
                                             <div className="profile__input-box">
                                                <h4>Phone</h4>
                                                <div className="profile__input">
                                                   <input type="text" placeholder="Enter your number" value="000 000 0000" />
                                                   <i className="fa-light fa-phone"></i>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-6 col-md-6">
                                             <div className="profile__input-box">
                                                <h4>Gender</h4>
                                                <div className="profile__input react-input">
                                                    <Select
                                                        options={country}
                                                        styles={customStyles}
                                                        placeholder={'Select Gender'}
                                                    />
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-12">
                                             <div className="profile__input-box">
                                                <h4>Address</h4>
                                                <div className="profile__input">
                                                   <input type="text" placeholder="Enter your address" value="3304 Munich" />
                                                   <i className="fa-solid fa-location-dot"></i>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-6 col-md-6">
                                             <div className="profile__input-box">
                                                <h4>City</h4>
                                                <div className="profile__input">
                                                   <input type="text" placeholder="Enter your city" value="Munich" />
                                                   <i className="fa-light fa-city"></i>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-6 col-md-6">
                                             <div className="profile__input-box">
                                                <h4>Country</h4>
                                                <div className="profile__input react-input">
                                                   <Select
                                                        options={country}
                                                        styles={customStyles}
                                                        placeholder={'Select Countries'}
                                                    />
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-12">
                                             <div className="profile__input-box">
                                                <h4>Your Bio</h4>
                                                <div className="profile__input">
                                                   <textarea placeholder="Enter your bio">Hi there, this is my bio...</textarea>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="col-xxl-12 text-center">
                                             <button className='gradient-text-btn rounded-full'>Update</button>
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           <div className={`tab-pane fade  ${activeTab === 'nav-password' ? 'show active' : ''}`} id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                              <div className="profile__password">
                                 <form action="#">
                                    <div className="row">
                                       <div className="col-xxl-12">
                                          <div className="profile__input-box">
                                             <h4>Old Password</h4>
                                             <div className="profile__input">
                                                <input type="text" placeholder="Enter old password" />
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-xxl-6 col-md-6">
                                          <div className="profile__input-box">
                                             <h4>New Password</h4>
                                             <div className="profile__input">
                                                <input type="text" placeholder="Enter new password" />
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-xxl-6 col-md-6">
                                          <div className="profile__input-box">
                                             <h4>Confirm Password</h4>
                                             <div className="profile__input">
                                                <input type="text" placeholder="Enter confirm password" />
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-md-12 text-center">
                                        <button className='gradient-text-btn rounded-full'>Update Password</button>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                           <div className={`tab-pane fade  ${activeTab === 'nav-ticket' ? 'show active' : ''}`} id="nav-ticket" role="tabpanel" aria-labelledby="nav-ticket-tab">
                              <div className="profile__ticket table-responsive">
                                 <table className="table">
                                    <thead>
                                       <tr>
                                          <th scope="col">Transaction ID</th>
                                          <th scope="col">Payment </th>
                                          <th scope="col">Status</th>
                                          <th scope="col">View</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <th scope="row"> #2245</th>
                                          <td>1000 Euros</td>
                                          <td>Pending</td>
                                          <td><a href="#" className="link-btn">View <i className="fa-light fa-arrow-right-long"></i> </a></td>
                                       </tr>

                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           <div className={`tab-pane fade  ${activeTab === 'nav-notification' ? 'show active' : ''}`} id="nav-notification" role="tabpanel" aria-labelledby="nav-notification-tab">
                              <div className="profile__notification">
                                 <div className="profile__notification-top mb-30">
                                    <h3 className="profile__notification-title">My activity settings</h3>
                                    <p>Stay up to date with notification on activity that involves you including mentions, messages, replies to your bids, new items, sale and administrative updates </p>
                                 </div>
                                 <div className="profile__notification-wrapper">
                                    <div className="profile__notification-item mb-20">
                                       <div className="form-check form-switch d-flex align-items-center">
                                          <input className="form-check-input" type="checkbox" role="switch" id="like" checked={likeNotifications}
                                             onChange={() => handleSwitchChange('like')} />
                                          <label className="form-check-label" for="like">Like &amp; Follows Notifications</label>
                                       </div>
                                    </div>
                                    <div className="profile__notification-item mb-20">
                                       <div className="form-check form-switch d-flex align-items-center">
                                          <input className="form-check-input" type="checkbox" role="switch" id="post" checked={postNotifications}
                                             onChange={() => handleSwitchChange('post')} />
                                          <label className="form-check-label" for="post">Comments Notifications</label>
                                       </div>
                                    </div>
                                    <div className="profile__notification-item mb-20">
                                       <div className="form-check form-switch d-flex align-items-center">
                                          <input className="form-check-input" type="checkbox" role="switch" id="new" checked={newNotifications}
                                             onChange={() => handleSwitchChange('new')} />
                                          <label className="form-check-label" for="new">Charts Notifications</label>
                                       </div>
                                    </div>
                                    <div className="profile__notification-item mb-20">
                                       <div className="form-check form-switch d-flex align-items-center">
                                          <input className="form-check-input" type="checkbox" role="switch" id="sale" checked={saleNotifications}
                                             onChange={() => handleSwitchChange('sale')} />
                                          <label className="form-check-label" for="sale">Profile Update Notifications</label>
                                       </div>
                                    </div>
                                    <div className="profile__notification-item mb-20">
                                       <div className="form-check form-switch d-flex align-items-center">
                                          <input className="form-check-input" type="checkbox" role="switch" id="payment" checked={paymentNotifications}
                                             onChange={() => handleSwitchChange('payment')} />
                                          <label className="form-check-label" for="payment">Payment Notifications</label>
                                       </div>
                                    </div>
                                 </div>
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
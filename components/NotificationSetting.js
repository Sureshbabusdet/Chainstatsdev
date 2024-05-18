import { useEffect, useState } from 'react';
import { ACTION_ROUTES } from '../constants/constant';
import axios from 'axios';
import { toast } from 'react-toastify';

function NotificationSetting({ likefollow, payment, update, comments, chart }) {
    const [likeFollowStatus, setLikeFollowStatus] = useState(likefollow);
    const [commentsStatus, setCommentsStatus] = useState(comments);
    const [chartStatus, setChartStatus] = useState(chart);
    const [updateStatus, setUpdateStatus] = useState(update);
    const [paymentStatus, setPaymentStatus] = useState(payment);

    useEffect(() => {
        setLikeFollowStatus(likefollow);
        setCommentsStatus(comments);
        setChartStatus(chart);
        setUpdateStatus(update);
        setPaymentStatus(payment);
    }, [likefollow, payment, update, comments, chart]);

    const handleSwitchChange = async (type, status) => {
        var form_data = new FormData();
        form_data.append('type', type);
        form_data.append('status', status);

        // console.log('updated status',type, status);

        const token = localStorage.getItem('token');

        const response = await axios.post(ACTION_ROUTES.NotificationUpdateAPI, form_data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            toast.success(response.data.message);
        } else {
            toast.error('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className="profile__notification">
            <div className="profile__notification-top text-start mb-30">
                <h3 className="profile__notification-title">My activity settings</h3>
                <p>Stay up to date with notification on activity that involves you including mentions, messages, replies to your bids, new items, sale and administrative updates </p>
            </div>
            <div className="profile__notification-wrapper">
                <div className="profile__notification-item mb-20">
                    <div className="form-check form-switch d-flex align-items-center">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="like_follow_notification"
                            checked={likeFollowStatus}
                            onChange={() => {
                                setLikeFollowStatus(likeFollowStatus ? 0 : 1);
                                handleSwitchChange('like_follow_notification', likeFollowStatus ? 0 : 1);
                            }}
                        />
                        <label className="form-check-label" htmlFor="like_follow_notification">
                            Follows Notifications
                        </label>
                    </div>
                </div>
          
                <div className="profile__notification-item mb-20">
                    <div className="form-check form-switch d-flex align-items-center">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="charts_notification"
                            checked={chartStatus}
                            onChange={() => {
                                setChartStatus(chartStatus ? 0 : 1);
                                handleSwitchChange('charts_notification', chartStatus ? 0 : 1);
                            }}
                        />
                        <label className="form-check-label" htmlFor="new">Charts Notifications</label>
                    </div>
                </div>
           
                <div className="profile__notification-item">
                    <div className="form-check form-switch d-flex align-items-center">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="payment_notification"
                            checked={paymentStatus}
                            onChange={() => {
                                setPaymentStatus(paymentStatus ? 0 : 1);
                                handleSwitchChange('payment_notification', paymentStatus ? 0 : 1);
                            }}
                        />
                        <label className="form-check-label" htmlFor="payment">Payment Notifications</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationSetting;

// components/PayPalButton.js

import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";
import { ACTION_ROUTES } from "../constants/constant";
import { toast } from "react-toastify";

const PaypalCheckoutButton = (props) => {
    const [paidFor,setPaidFor] = useState(false)
    const [error,setError] = useState()
    const router = useRouter();
    const { product, handleModel } = props; // Receive form validation flag as prop

    console.log('paymentplan id',product)
    const handleApprove = async (orderID) => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage

        try {
            var form_data = new FormData();

            form_data.append('ref_id', orderID);
            form_data.append('amount', product.price);
            form_data.append('plan_id', product.planid);
            
            const response = await axios.post(ACTION_ROUTES.PaymentOrderAPI, form_data, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });

            toast.success(response.data.message);
            handleModel()
            setPaidFor(true);
        } catch (error) {
            // Handle error from API or show error message
            console.error('ORDER API Error:', error);
        }
    }

    if(paidFor){
        Swal.fire({
            title: 'Payment  Successful!',
            text: 'Thankyou for the subscribing.',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Go to Charts',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                router.push('/charts');
            }
        });
    }

    if(error){
        Swal.fire({
            title: 'Payment  Failed!',
            text: 'There might be some issue with your payment.',
            icon: 'error',
            showCancelButton: false,
            cancelButtonText: 'Close',
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(error)
                router.push('/profile');
            }
        });
    }





    return (
        <PayPalButtons
            style={{
                color: "silver",
                layout: 'horizontal',
                height: 48,
                tagline: 'false',
                shape: "pill"
            }}

            onClick={(data, actions) => {
                // Validate on button click, client or server side
                const hasAlreadyBoughtCourse = false;
                if(hasAlreadyBoughtCourse){
                    setError("You Already bought this course. Go to Your Account");
                    return actions.reject()
                } else {
                    return actions.resolve()
                }
            }}
            // createOrder={(data, actions) => {
            //     return actions.order.create({
            //         purchase_units: [
            //             {
            //                 description: product.description,
            //                 amount : {
            //                     value: product.price
            //                 }
            //             }
            //         ]
            //     })
            // }}
            createSubscription={(data, actions) => {
                return actions.subscription.create({
                    plan_id: product.plan_id
                })
            }}
            onApprove={async(data, actions) => {
                // console.log('data',data);
                // const order = await actions.subscription.capture();
                // console.log('order',order)
                handleApprove(data?.subscriptionID)
            }}
            onCancel={() => {
                Swal.fire({
                    title: 'Payment Canceled!',
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'Okay',
                }).then((result) => {
                    if (result.isConfirmed) {
                        router.push('/');
                    }
                });
            }}
            onError={(err) => {
                setError(err);
                console.error(err);
            }}
        />
    );
};

export default PaypalCheckoutButton; // Ensure to export the component

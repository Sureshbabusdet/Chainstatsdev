import { useEffect, useState } from 'react';
import { ACTION_ROUTES } from '../constants/constant';
import { toast } from 'react-toastify';
import axios from 'axios';
import { parseCookies } from 'nookies';
import { Badge } from 'react-bootstrap';

const TransectionTable = () => {
    const [loading, setLoading] = useState(false);
    const [transectionData, setTransectionData] = useState();
    const currency = typeof window !== 'undefined' ? localStorage.getItem('currency') || 'USD' : 'USD'; // Default currency if localStorage is not available or in a non-browser environment


    const getTransectionData = async () => {

        const cookies = parseCookies();
        const token = cookies.token;

        setLoading(true);
        try {
            const response = await axios.get(ACTION_ROUTES.TransectionAPI, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in authorization header
                }
            });
            setTransectionData(response.data.transactions)
            // console.log('transection',response.data.transactions);
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
        getTransectionData();
    }, []);

    // console.log('transectionData', transectionData);

    return (
        <div className='table-responsive transec-table'>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Transaction ID</th>
                        <th scope="col">Plan </th>
                        <th scope="col">Payment </th>
                        <th scope="col">Start Date <br /> End Date</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transectionData &&
                        transectionData.map((item, index) => (
                            <tr key={'transec' + item.id}>
                                <th scope="row"> #{item.reference}</th>
                                <td>{item.plan.name}</td>
                                <td>{currency}{item.debit} {item.debit ? <Badge>DR</Badge> : <Badge bg='danger'>CR</Badge>}</td>
                                <td>{item.start_date}<br />{item.end_date}</td>
                                <td className='text-capitalize'>{item.type}</td>
                                <td className='text-capitalize'>{item.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {!transectionData || transectionData.length === 0 ? (
                <p className='nodata-text py-3'>No transactions are available</p>
            ) : null}        </div>
    );
};

export default TransectionTable;
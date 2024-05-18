import { useRouter } from "next/router";
import DashChart from "../../components/DashChart";
import MainLayout from "../../layouts/main/nav/MainLayout";
import Seo from "../../components/Seo";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert
import { ACTION_ROUTES } from "../../constants/constant";
import { toast } from "react-toastify";

ActiveAccount.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function ActiveAccount() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const activeCode = router.query.activeCode; // Assuming the parameter name is 'activeCode'
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null); // State for validation errors

    const getAccountVarification = async (activeCode) => {
        try {
            const response = await axios.get(ACTION_ROUTES.activeAccountAPI + '/' + activeCode);
            setData(response.data);
            setIsLoading(false);
            
            if (response.data.errors && Array.isArray(response.data.errors)) {
                const errorsObject = {};
                response.data.errors.forEach((error) => {
                    // errorsObject[error.code] = error.message;
                    // toast.error(`${error.code} : ${error.message}`)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error.message, // Assuming your API response has a 'message' field
                        confirmButtonText: 'Okay',
                        allowOutsideClick: false,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            router.push('/login'); // Redirect to dashboard page
                        }
                    });
                });
                
                return; // Exit the function to prevent further execution
            }

            Swal.fire({
                icon: 'success',
                title: 'Email Verified!',
                text: response.data.message, // Assuming your API response has a 'message' field
                confirmButtonText: 'Login Now',
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/login'); // Redirect to dashboard page
                }
            });

        } catch (error) {
            setIsLoading(false); // Hide loader if there's an error
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    // Handle forbidden error
                    console.error('Validation errors:', data.errors);
                    setErrors(data.errors.map(error => error.message).join('\n'));
                } else {
                    // Handle other errors
                    console.error('Something Went Wrong:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Please try again later.',
                        allowOutsideClick: false,
                    });
                }
            } else {
                console.error('Something Went Wrong:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.',
                    allowOutsideClick: false,
                });
            }
        }
    };

    useEffect(() => {
        if (activeCode) {
            getAccountVarification(activeCode);
        }
    }, [activeCode]);

    const metaData = {
        title: 'ChainStats - Unleash the data',
        keywords: 'crypto, Veternary',
        description: 'ChainStats - Unleash the data',
        url: router.asPath,
    };

    return (
        <>
            {isLoading && ( 
                <div className="active-account-layout">
                    <h4 className="d-block">Please Wait...</h4>
                    <Spinner as="span" animation="grow" size="lg" role="status" aria-hidden="true" />
                </div>
            )}
            <Seo {...metaData} />
            <DashChart />
        </>
    );
};

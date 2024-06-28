import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const Success = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const session_id = queryParams.get('session_id');
    const visa_id = queryParams.get('visa_id');
    const user_id = queryParams.get('user_id');
    const price = queryParams.get('price'); 

    const [visa, setVisa] = useState([]);
    const [loading, setLoading] = useState(true);

    const username = 'admin';
    const password = '1234';
    const encodedCredentials = 'Basic ' + btoa(username + ':' + password);
    const headers = {
      'Authorization': encodedCredentials,
      'X-API-KEY': 'CODEX@123',
    };
    
    useEffect(() => {
        const fetchVisaPrices = async () => {
            try {
                const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/visa/${visa_id}`, { headers });
                setVisa(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchVisaPrices();
    }, [visa_id]);


    useEffect(() => {
        const fetchTransactions = async () => {
            const trans_data = {
                session_id:session_id,
                visa_id:visa_id,
                user_id:user_id,
                price:price,
            }
            try {
                const response = await axios.post(`https://thesoftwareexperts.com/cdksolar/admin/api/transactions`, trans_data ,{ headers });
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchTransactions();
    }, [session_id]);


    return (
        <div className="container">
            <div className="payment-section">
            <h2>Payment Successful</h2>
            <p>Your payment has been successfully processed for your visa application.</p>
            <div className="mb-3">
                <span for="referenceNo" className="form-label"> <b>Reference No.</b> </span>
                <span>#{visa.id} {visa.duration} {visa.visa_type}</span>
            </div>
            <div className="mb-3">
                <span for="amount" className="form-label"> <b>Amount</b> </span>
                <span>${visa.price}</span>
            </div>
                <Link className="btn btn-primary" to="/application">Continue</Link>
            </div>
        </div>
    );
}

export default Success;

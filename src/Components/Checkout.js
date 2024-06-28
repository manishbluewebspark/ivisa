import React from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';



const stripePromise = loadStripe('pk_test_jLPtcL9qAyE3kJEMG6BoI9c5');

const CheckoutForm = () => {
    const location = useLocation();
    const visaData = location.state || {};
    const handleClick = async (event) => {
        event.preventDefault();

        const username = 'admin';
        const password = '1234';
        //const encodedCredentials =  btoa(`${username}:${password}`);
        const encodedCredentials = 'Basic ' + btoa(username + ':' + password);
        const headers = {
          'Authorization': encodedCredentials,
          'X-API-KEY': 'CODEX@123',
        };

        try {
            const response = await axios.post('http://thesoftwareexperts.com/cdksolar/admin/api/create_checkout_session', visaData, { headers });

            const session = response.data;
            if (!session || !session.id) {
                throw new Error('Invalid session returned from server');
            }
            const stripe = await stripePromise;
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                alert(result.error.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to create checkout session');
        }
    }

    return (
        <>  
            <section className='body-section'>
                <div className="container mt-5">
                    <div className="row">
                        <div className='col-6'>
                            <img src="https://w7.pngwing.com/pngs/167/298/png-transparent-card-credit-logo-visa-logos-and-brands-icon-thumbnail.png" alt=""  class="img-fluid img-thumbnail" />
                        </div>
                        <div className='col-md-6'>
                            <button type="button" class="btn btn-primary btn-lg btn-block" role="link" onClick={handleClick}>PROCEED TO PAYMENT</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const Checkout = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default Checkout;

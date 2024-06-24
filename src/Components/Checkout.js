// src/components/CheckoutForm.js
import React from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_jLPtcL9qAyE3kJEMG6BoI9c5');

const CheckoutForm = () => {
    const handleClick = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://thesoftwareexperts.com/cdksolar/admin/StripeController/createCheckoutSession', {
                // Add any payload data needed for creating the checkout session
            });

            const session = response.data;

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
    };

    return (
        <button role="link" onClick={handleClick}>
            Checkout
        </button>
    );
};

const Checkout = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default Checkout;

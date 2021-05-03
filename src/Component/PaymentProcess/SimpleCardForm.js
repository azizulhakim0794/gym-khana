import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const SimpleCardForm = ({handlePaymentOfOrder}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMassage, setErrorMassage] = useState();
    const [paymentSuccess, setPaymentSuccess] = useState();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErrorMassage(error.message);
            setPaymentSuccess('')
        } else {
            setPaymentSuccess(paymentMethod.id)
            handlePaymentOfOrder(paymentMethod.id)
            setErrorMassage('')

        }
    };

    return (
        <div className="round" >
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br />
                <button type="submit" disabled={!stripe} className="buy-btn btn-warning">
                    Pay
                </button>
            </form>
            <br /><br />
            {
                errorMassage && <p className="text-danger text-center">{errorMassage}</p>
            }
            {
                paymentSuccess && <p className="text-center text-success">Your payment successfully Done.</p>
            }
        </div>
    );
};

export default SimpleCardForm;
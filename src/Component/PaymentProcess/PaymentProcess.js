import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51IiFbLIQFxvnZ35y7eTLeRzag9eGJ4qtO7eaxQJARldO2fuuYoDadBNWHmLG3nflwXssUSuCC0a3STeZlW2TYjlQ00qhbOwsz2');
const PaymentProcess = ({handlePaymentOfOrder}) => {
    return (
        <div className="container">
            {/* <nav className="navbar navbar-light bg-light">

                    <p className="h4">POWER <span className="text-warning">X</span></p>

            </nav> */}
            <div className="col-md-8 p-5 margin-auto alert-secondary  top-margin">
                <Elements stripe={stripePromise}>
                    <SimpleCardForm handlePaymentOfOrder={handlePaymentOfOrder}/>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentProcess;
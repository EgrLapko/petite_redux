import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default function StripeButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_8zr509r079enJTKCy6J7UwMV00LS2HRgBe';

    const onToken = token => {
        axios({ 
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
         }).then(response => {
             alert('Payment successful')
         }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'Something went wrong with your payment. Make sure you used provided credit card.'
            );
         });
    };

    return (
        <div>
            <StripeCheckout
                label='Pay Now'
                name = 'Petite Mamsell Ltd.'
                billingAddress
                shippingAddress
                image='https://sendeyo.com/up/d/f3eb2117da'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    );
};
 
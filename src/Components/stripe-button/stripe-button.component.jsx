import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H485FIgOXdD7LmpDjlcby6sqPePtwwSl8Uj8K3lD60vzZRBh7TW49yvdc5bFtgEIVbhXn7n4AfxbwUKkC799xuU00KYqMPiLJ'


    const onToken = token => {
        console.log(token);
        alert('Paymnet Successful');
    }

    return (
        <StripeCheckout label='Pay Now' name='CRWN Clothing Ltd.' billingAddress 
        shippingAddress image='https://svgshare.com/i/CUz.svg'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
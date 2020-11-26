import React from 'react';
import { Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Cart from './components/pages/cart/Cart';
import CheckoutPage from './components/pages/cart/checkout/CheckOutPage';
import Products from './components/Products';

const Section = () => {
  const stripePromise = loadStripe(
    'pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG'
  );

  return (
    <section>
      <Route path="/" component={Products} exact />
      <Route path="/cart" component={Cart} exact />
      <Elements stripe={stripePromise}>
        <Route path="/payment" component={CheckoutPage} exact />
      </Elements>
    </section>
  );
};

export default Section;

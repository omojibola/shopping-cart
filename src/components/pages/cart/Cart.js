import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../Context';
import './Cart.css';

const Cart = () => {
  const {
    cart,
    sumTotal,
    reduceQuantity,
    increaseQuantity,
    removeProduct,
    total,
    clearCart,
  } = useContext(DataContext);
  useEffect(() => {
    sumTotal();
  }, []);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Nothing in your cart</h2>;
  }

  return (
    <div className="container">
      {cart.length === 0 ? (
        <h2 style={{ textAlign: 'center' }}>Nothing in your cart</h2>
      ) : (
        cart.map((item) => (
          <div className="details cart" key={item.id}>
            <img src={item.image} alt="" style={{ height: 200 }} />
            <div>
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price * item.quantity}</span>
              </div>
              <p>{item.description}</p>
              <p>{item.content}</p>
              <div className="amount">
                <button
                  className="count"
                  onClick={() => reduceQuantity(item.id)}
                >
                  {' '}
                  -{' '}
                </button>
                <span>{item.quantity}</span>
                <button
                  className="count"
                  onClick={() => increaseQuantity(item.id)}
                >
                  {' '}
                  +{' '}
                </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item.id)}>
              X
            </div>
          </div>
        ))
      )}
      <div className="total">
        <Link to="/payment">CheckOut</Link>

        <span>
          {' '}
          <button onClick={() => clearCart()}>Clear</button>
        </span>

        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;

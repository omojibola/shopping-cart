import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const ContextDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const getProducts = async () => {
    const BASE_URL = 'https://fakestoreapi.com/products';
    setLoading(true);
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
    const dataCart = JSON.parse(window.localStorage.getItem('dataCart'));
    if (dataCart !== null) {
      setCart(dataCart);
    }
    const dataTotal = JSON.parse(window.localStorage.getItem('dataTotal'));
    if (dataTotal !== null) {
      setTotal(dataTotal);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const addToCart = (id) => {
    const check = cart.every((item) => item.id !== id);
    if (check) {
      const data = products.filter((product) => {
        product.quantity = 1;
        return product.id === id;
      });

      setCart([...cart, ...data]);
      localStorage.setItem('dataCart', JSON.stringify(cart));
      localStorage.setItem('dataTotal', JSON.stringify(total));
      console.log(cart);
    } else {
      alert('Product is already in cart');
    }
  };

  //reduce quantity
  const reduceQuantity = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
      }
    });
    setCart(cart);
    sumTotal();
  };

  //increase quantity
  const increaseQuantity = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity++;
      }
    });
    setCart(cart);
    sumTotal();
  };

  //remove item from cart
  const removeProduct = (id) => {
    if (window.confirm('Do you want to delete this item?')) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      setCart(cart);
      sumTotal();
    }
  };

  //get total price
  const sumTotal = () => {
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0);
    setTotal(res);
  };

  const clearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      setCart([]);
      localStorage.clear();
    }
  };
  return (
    <DataContext.Provider
      value={{
        products,
        cart,
        addToCart,
        total,
        sumTotal,
        reduceQuantity,
        increaseQuantity,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextDataProvider;

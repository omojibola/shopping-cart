import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context';
import styles from './Products.module.scss';

const Products = () => {
  const { products, addToCart } = useContext(DataContext);
  return (
    <div id="product" className="container">
      <div className="row">
        <div className={styles.p__grid}>
          {products.map((product) => (
            <div className="card card-body" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt=""
                  style={{
                    display: 'block',
                    margin: '0 auto 10px',
                    maxHeight: '200px',
                  }}
                  className="img-fluid"
                />
              </Link>
              <div>
                <h5 className={styles.content}>
                  <Link to={`/product/${product.id}`} className="text-dark">
                    {product.title}
                  </Link>
                </h5>
                <p>${product.price}</p>
                <button
                  className={styles.button}
                  onClick={() => addToCart(product.id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

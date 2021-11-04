import { productInterface } from "../../interfaces";

import { useDispatch } from "react-redux";

import * as actionTypes from "../../redux/actions/cartActions";

const Card = ({
  imageLink,
  productTitle,
  productPrice,
  id,
}: productInterface) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      actionTypes.addItem({
        id,
        productPrice,
        productTitle,
        imageLink,
        quantity: 1,
      })
    );
  };

  return (
    <div className="card-wrapper">
      <div className="image_wrap">
        <img src={imageLink} alt="" />
        <button className="add-to-cart" onClick={addToCart}>
          Add To Cart
        </button>
      </div>

      <h3 className="product-title"> {productTitle}</h3>
      <h4 className="product-price">${productPrice}</h4>
    </div>
  );
};

export default Card;

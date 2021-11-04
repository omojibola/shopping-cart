import { productData } from "../productData";
import Card from "../components/Card/Card";

const Shop = () => {
  return (
    <div className="shop-wrapper">
      {productData.map((el) => (
        <div key={el.id}>
          <Card
            quantity={1}
            id={el.id}
            productPrice={el.amount}
            productTitle={el.title}
            imageLink={el.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Shop;

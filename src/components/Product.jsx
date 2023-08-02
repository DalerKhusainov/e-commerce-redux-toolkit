// COMPONENTS
import ProductCart from "./ProductCart";

// DATA
import { products } from "../assets/data/data";

const Product = () => {
  return (
    <>
      <section className="product">
        <div className="container grid3">
          {products?.map((product) => {
            return <ProductCart product={product} key={product.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Product;

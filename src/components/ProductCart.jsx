// REDUX HOOKS
import { useDispatch } from "react-redux";

// REACT ROUTER HOOKS
import { Link } from "react-router-dom";

// ICONS
import { AiOutlinePlusCircle } from "react-icons/ai";

// FROM CARTSLICE API
import { cartActions } from "../store/cartSlice";

const ProductCart = ({ product }) => {
  // DESCTRUCTURING DATA
  const { id, name, price, cover } = product;

  //
  const dispatch = useDispatch();

  // ADD PRODUCT TO CART HANDLER
  const handleAddToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
  };

  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img">
          <Link>
            <img src={cover} alt={name} />
          </Link>
        </div>
        <div className="details">
          <h3>$ {price}</h3>
          <p>{name}</p>
          <button onClick={handleAddToCart}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCart;

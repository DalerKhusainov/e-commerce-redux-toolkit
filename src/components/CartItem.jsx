// REDUX HOOKS
import { useDispatch } from "react-redux";

// ICONS
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// FROM CARTSLICE API
import { cartActions } from "../store/cartSlice";

const CartItem = ({ product }) => {
  // DESCTRUCTURING DATA
  const { id, name, price, quantity, cover } = product;

  // INITIALIZING ACTIONS FROM CART SLICE API
  const dispatch = useDispatch();

  // ADD PRODUCT TO CART HANDLER
  const handleIncCartItems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };

  // ADD PRODUCT TO CART HANDLER
  const handleDecCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <>
      <div className="cardList">
        <div className="cartContent">
          {/* CART IMAGE */}
          <div className="img">
            <img src={cover} alt={name} />
            <button className="remove flexCenter">
              <AiOutlineClose />
            </button>
          </div>
          {/* CART NAME & PRICE */}
          <div className="details">
            {/* CART PRODUCT NAME */}
            <p>{name}</p>
            {/* CART PRODUCT PRICE */}
            <label htmlFor="">Unit price: ${price}</label>
            {/* ADD & REMOVE BTNS */}
            <div className="price">
              <div className="qty flexCenter">
                {/* ADD BTN */}
                <button onClick={handleDecCartItems} className="plus">
                  <AiOutlineMinus />
                </button>
                {/* TOTAL QTY */}
                <button className="num">{quantity}</button>
                {/* REMOVE BTN */}
                <button onClick={handleIncCartItems} className="plus">
                  <AiOutlinePlus />
                </button>
              </div>
              {/*  */}
              <div className="priceTitle">$100</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

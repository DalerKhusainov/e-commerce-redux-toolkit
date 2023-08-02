// REDUX HOOKS
import { useSelector } from "react-redux";

// REACT HOOKS
import { useState } from "react";

// ICONS
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

// COMPONENTS
import CartItem from "./CartItem";

const Cart = () => {
  // CART OPEN & CLOSE STATE
  const [cartOpen, setCartOpen] = useState(false);

  // GETTING STATE VALUE FROM CART SLICE API
  const cartItems = useSelector((state) => state.cart.itemsList);
  const quantity = useSelector((state) => state.cart.totalQuantity);

  // CART TOTAL
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <>
      <div onClick={() => setCartOpen(!cartOpen)} className="cart">
        <BiShoppingBag className="cartIcon" />
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className={cartOpen ? "overlay" : "nonoverlay"}></div>
      <div className={cartOpen ? "cartItem" : "cartHide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={() => setCartOpen(!cartOpen)}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {cartItems?.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        <div className="checkOut">
          <button>
            <span>Checkout</span>
            <label htmlFor="">$ {parseFloat(total).toFixed(2)}</label>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

import Modal from "../UI/Modal";
import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import CartContext from "../../Store/cart-context";
import classes from "./Cart.module.css";
import Checkout from "./Checkout.js";

function Cart(props) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [ischeckout, setCheckout] = useState(false);
  const [didSubmit, setDIdSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const orderHandler = () => {
    setCheckout(true);
  };

  const submitOrderhandler = async (userData) => {
    setIsSubmit(true);
    await fetch("https://food-dc6fe-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItem: cartCtx.items,
      }),
    });
    setIsSubmit(false);
    setDIdSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {ischeckout && (
        <Checkout onConfirm={submitOrderhandler} onCancel={props.onClose} />
      )}
      {!ischeckout && modalActions}
    </React.Fragment>
  );
  const isSubmitingModalCOntent = <p>Sending orderData .....</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
        
      </div>
    </React.Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmit && !didSubmit && cartModalContent}
      {isSubmit && isSubmitingModalCOntent}
      {!isSubmit && didSubmit && didSubmitModalContent}
    </Modal>
  );
}
export default Cart;

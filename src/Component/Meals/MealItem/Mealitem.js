import MealItemFOrm from "./MealItemFOrm";
import calsses from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
const Mealitem = (props) => {
  const cartCtx =  useContext(CartContext);
  const price = `${props.price}`;
  const addToCartHandler =(amount) =>
  {
  cartCtx.addItem({
    id: props.id,
    name:props.name,
    amount :amount,
    price:props.price
    
  });
  };
  return (
    <li className={calsses.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={calsses.description}>{props.description}</div>
        <div className={calsses.price}>{price}</div>
      </div>
      <div>
        <MealItemFOrm  onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default Mealitem;

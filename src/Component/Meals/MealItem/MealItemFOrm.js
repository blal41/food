import classes from "./MealItem.module.css";
import Input from "../../UI/Input";
import { useState, useRef } from "react";
function MealItemFOrm(props) {
  const amountInputRef = useRef();
  const [amountIsValid, SetAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber >= 5
    ) {
      SetAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>please enter the valid amount (1-5).</p>}
    </form>
  );
}
export default MealItemFOrm;

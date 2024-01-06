import classes from "./checkout.module.css";
import { useRef ,useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;
function Checkout(props) {
    const[formInputValidity ,setFormInputValidity] = useState({
        name :true,
        street :true,
        city  :true,
        postalCode : true
    });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const codeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmhandler = (event) => {
    event.preventDefault();

    const enterdName = nameInputRef.current.value;
    const enterdstreet = streetInputRef.current.value;
    const enterdcode = codeInputRef.current.value;
    const enterdcity = cityInputRef.current.value;
    const enterdNameisValid = !isEmpty(enterdName);
    const enterdstreetisValid = !isEmpty(enterdstreet);
    const enterdcityisValid = !isEmpty(enterdcity);
    const enterdcodeisValid = isFiveChar(enterdcode);
     

    setFormInputValidity({
        name : enterdNameisValid,
        street : enterdstreetisValid,
        city : enterdcityisValid,
        postalCode : enterdcodeisValid,
    });
    const formIsValid =
      enterdNameisValid &&
      enterdcityisValid &&
      enterdcodeisValid &&
      enterdstreetisValid;
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name :enterdName,
      city : enterdcity,
      street : enterdstreet,
      postalCode :enterdcode,

    });
  };

  return (
    <form className={classes.form} onSubmit={confirmhandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name : </label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enterd a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street : </label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enterd a valid street</p>}

      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal code : </label>
        <input type="text" id="postal" ref={codeInputRef} />
        {!formInputValidity.postalCode && <p>Please enterd a valid postal code</p>}

      </div>
      <div className={classes.control}>
        <label htmlFor="city">City : </label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enterd a valid city</p>}
        
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={props.onCancel}
          className={classes["button--alt"]}
        >
          Cancel
        </button>
        <button onClick={confirmhandler} className={classes.button}>
          Confirm
        </button>
      </div>
    </form>
  );
}
export default Checkout;

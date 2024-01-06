import Carticon from "../Cart/Carticon"
import { useContext,useEffect,useState } from "react";
import CartContext from "../../Store/cart-context";
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
    const [btnIsHighLighted,setbtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberofCartItems = items.reduce((curNumber ,item) => {
        return curNumber+item.amount ;
    },0)
    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump :''}`;
    useEffect(()=>{
     if(items.length === 0){
        return;
     }
     setbtnIsHighLighted(true);
     const timer = setTimeout(()=>{
        setbtnIsHighLighted(false);
     },300);

     return()=> {
        clearTimeout(timer)
     }
    },[items]);
 return (
    <button className={btnClasses} onClick = {props.onClick}>
        <span className={classes.icon}><Carticon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofCartItems}</span>
    </button>
 )
}
export default HeaderCartButton;    
import classes from "./HeaderCartButton.module.css";
import CartIcon from '../../Cart/CartIcon'

const HeaderCartButton = (props) => {

  return (
    <>
      <button className={classes.button} onClick={props.openCart}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Seu Carrinho</span>
        <span className={classes.badge}>3</span>        
      </button>
    </>
  );
};

export default HeaderCartButton;

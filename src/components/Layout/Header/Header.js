import classes from "./Header.module.css";
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactRefeições</h1>
        <HeaderCartButton openCart={props.openCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table with a lot of food" />
      </div>
    </>
  );
};

export default Header;

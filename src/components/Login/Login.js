import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "INPUT_EMAIL") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "VALIDATE_EMAIL") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) =>{

  if (action.type === 'INPUT_PASSWORD')
  {
    return {value:action.val, isValid:action.val.trim().length > 6}
  }

  if (action.type === 'VALIDATE_PASSWORD')
  {
    return {value:state.value, isValid:state.value.trim().length > 6}
  }

  return {value:'', isValid:false}

}
const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid:false})

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailState.value.includes("@") && passwordState.value.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState.value, passwordState.value]);


  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_EMAIL", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'INPUT_PASSWORD', val:event.target.value})   
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "VALIDATE_EMAIL",
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'VALIDATE_PASSWORD'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

import React, { useContext, useEffect, useReducer, useRef, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "INPUT_EMAIL") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "VALIDATE_EMAIL") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "INPUT_PASSWORD") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "VALIDATE_PASSWORD") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };
};
const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const ctx = useContext(AuthContext);

  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_EMAIL", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "INPUT_PASSWORD", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "VALIDATE_EMAIL",
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "VALIDATE_PASSWORD" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid)
    {
      ctx.onLogin(emailState.value, passwordState.value);
    }
    else if (!emailState.isValid)
    {
      inputEmailRef.current.focus()
    }
    else if (!passwordState.isValid)
    {
      inputPasswordRef.current.focus()
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={inputEmailRef}
          type="email"
          id="email"
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          labelTitle="E-mail"
        />

        <Input
          ref={inputPasswordRef}
          type="password"
          id="password"
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          labelTitle="Password"
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const onChangeName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeAge = (event) => {
    setUserAge(event.target.value);
  };

  const onSubmit = (event) => {      
    event.preventDefault();
    
    if (userName.trim().length <= 0 || userAge.trim().length <= 0) {
      return;
    }
    if (+userAge < 1) {
      return;
    }

    const newUser = {name:userName, age:userAge}

    props.addUserHandler(newUser)

    setUserName("");
    setUserAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={onChangeName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          min="1"
          max="150"
          onChange={onChangeAge}
          value={userAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

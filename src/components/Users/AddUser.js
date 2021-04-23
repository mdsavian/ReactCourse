import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const onChangeName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeAge = (event) => {
    setUserAge(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (userName.trim().length <= 0) {
      setError({
        title: "Username Invalid!",
        content: "Username must be filled!",
      });
      return;
    }

    if (userAge.trim().length <= 0) {
      setError({ title: "Age Invalid!", content: "Age must be filled!" });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Age Invalid!",
        content: "Age must be higher than 0!",
      });
      return;
    }

    const newUser = { name: userName, age: userAge };

    props.addUserHandler(newUser);

    setUserName("");
    setUserAge("");
  };

  const closeModalError =()=>{
    setError(null)
  }
  return (
    <>
      {error && <ErrorModal title={error.title} content={error.content} closeModal={closeModalError}/>}
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
            
            onChange={onChangeAge}
            value={userAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

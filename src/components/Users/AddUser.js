import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length > 0 && +enteredAge > 1) {
      props.onAddUser(enteredUsername, enteredAge);
      setUsername("");
      setAge("");
    } else {
      setError({
        title: "Invalid input",
        message: 'Please enter a valid input'
      })
    }
  };

  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const changeUsernameHandler = (event) => {
    let name = event.target.value;
    setUsername(name);
  };

  const changeAgeHandler = (event) => {
    const age = event.target.value;
    setAge(age);
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={changeUsernameHandler}
            value={enteredUsername}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={changeAgeHandler}
            value={enteredAge}
          />

          <Button type="submit">Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

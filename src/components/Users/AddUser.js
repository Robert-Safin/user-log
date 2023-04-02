import React, {useState} from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length > 0 && +enteredAge > 1) {
      console.log(enteredUsername);
      console.log(enteredAge);
      setUsername('')
      setAge('')
    }
  };

  const [enteredUsername, setUsername] = useState('')
  const [enteredAge, setAge] = useState('')

  const changeUsernameHandler = (event) => {
    let name = event.target.value
    setUsername(name)
  }

  const changeAgeHandler = (event) => {
    const age = event.target.value;
    setAge(age)
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={changeUsernameHandler} value={enteredUsername}/>

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={changeAgeHandler} value={enteredAge}/>

        <Button type='submit'>Add User </Button>
      </form>
    </Card>
  );
};

export default AddUser;

import React, { useState ,useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const nameInputRef=useRef();
  const ageInputRef=useRef();
  const collegeInputRef =useRef();
  
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge=ageInputRef.current.value;
    const enteredCollegeName=collegeInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0||enteredCollegeName.trim().length===0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty value)",
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(greater than 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge,enteredCollegeName);
    nameInputRef.current.value=' ';
    ageInputRef.current.value=' ';
    collegeInputRef.current.value=' ';
  };
 
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
           
            ref={nameInputRef}
          ></input>
          <label htmlFor="userage">Age (years)</label>
          <input
            id="userage"
            type="number"
           
            ref={ageInputRef}
          ></input>
          <label htmlFor="usercollege">College Name (years)</label>
          <input
            id="usercollege"
            type="text"
           
            ref={collegeInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
import React, { useState } from "react";
import AddUser from "./components/USERS/AddUser";
import UsersList from "./components/USERS/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}></UsersList>
    </div>
  );
}
export default App;

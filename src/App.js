import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user)=>{
      setUsers((oldState)=>{
        return [...oldState, user]
      })
  }

  return (
    <div>
      <AddUser addUserHandler={addUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;

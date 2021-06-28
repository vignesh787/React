import React, { userState, useState } from 'react';

import './App.css';
import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (userName,userAge) => {
    setUsersList((prevUserList) => {
      return[...prevUserList,{name:userName, age: userAge,id:Math.random().toString()}];
    });
  };

  return (
    <div className="App">
     <AddUser onUserAddition={addUserHandler}></AddUser>
     <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;

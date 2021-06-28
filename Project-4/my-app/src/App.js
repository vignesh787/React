import './App.css';
import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  return (
    <div className="App">
     <AddUser></AddUser>
     <UserList users={[]}></UserList>
    </div>
  );
}

export default App;

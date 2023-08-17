import React, { useState } from 'react';
import UserGrid from './UserGrid';
import Navbar from './Navbar';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetUsersClick = async () => {
    try {
      setLoading(true);
      let allUsers = [];
      for (let page = 1; page <= 4; page++) {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        allUsers = [...allUsers, ...response.data.data];
        console.log(allUsers);
      }
      setUsers(allUsers);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar onGetUsersClick={handleGetUsersClick} />
      <UserGrid users={users} loading={loading} />
    </div>
  );
}

export default App;

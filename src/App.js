import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

const App = () => {
  const usersData = [
    { id: 1, name: 'Kyle', username: 'DM' },
    { id: 2, name: 'Kayla', username: 'Ozys' },
    { id: 3, name: 'Andrew', username: 'Kelzeiros' },
    { id: 4, name: 'Carissa', username: 'Les Bina' },
    { id: 5, name: 'Tim', username: 'Hurgus' },
    { id: 6, name: 'Mallory', username: 'Nayeve' }
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;

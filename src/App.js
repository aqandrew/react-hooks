import React, { useState } from 'react';
import UserTable from './tables/UserTable';

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

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
};

export default App;

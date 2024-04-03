// script.js

import React, { useState } from 'react';
import './App.css';

const Scriptjs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const users = [
    { name: 'Gustavo Workman', position: 'CEO', imgSrc: 'https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg' },
    // Add more user data here...
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <div className="user-list">
        {filteredUsers.map(user => (
          <div className="card" key={user.name}>
            <img className="card-img" src={user.imgSrc} alt={user.name} />
            <p className="text-blk name">{user.name}</p>
            <p className="text-blk position">{user.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scriptjs;

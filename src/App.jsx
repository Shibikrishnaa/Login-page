import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    if (username === '' && password === '') {
      Swal.fire('Fill UserName and Password!');
    } else if (username === '') {
      Swal.fire('Fill your UserName!');
    } else if (password === '') {
      Swal.fire('Fill your Password!');
    } else {
      Swal.fire('Login Successfull!');
    }
  };

  return (
    <div className="overall">
      <div className="content">
        <h1 id="title">Login</h1>
        <form autocomplete="off">
          <label htmlFor="User">UserName</label>
          <input
            type="text"
            id="User"
            value={username}
            minLength={5}
            maxLength={20}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="Pass">Password</label>
          <input
            type="password"
            id="Pass"
            value={password}
            minLength={5}
            maxLength={10}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="login" onClick={handleClick}>
            Login
          </button>
        </form>
      </div>
      <div className="imager">
        <img src="../use.svg" id="imager" />
      </div>
    </div>
  );
}

export default App;

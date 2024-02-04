import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../nav-bar';
import './login.css';
import userdata from '../../data/userdata';
import {useName} from '../usecontext/context';
import { Link } from 'react-router-dom';
const Login = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nameInputRef = useRef(null);

const {namee,setnamee}=useName();


  useEffect(() => {
    setData(userdata);
    nameInputRef.current.focus();
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);

  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
   setnamee(username);


  };

const handlestoreg = () => {

  if (  localStorage.getItem(username+'pass')
===password) {
    return true;
  }

  return false;
};
return (
  <>
    <NavBar />
    <div className='mainn'>
      <div className='box'>
        <div className='title'>LOGIN</div>
        <div className='name'>
          Name: <input
            type='text'
            ref={nameInputRef}
            className='name-input'
            onChange={handleUsernameChange}
          />
        </div>
        <div className='name'>
          Pass: <input
            type='password'
            className='password-input'
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          {handlestoreg() ? (
            <Link to='/more'>
              <button onClick={handleLogin}>Log in</button>
            </Link>
          ) : <button onClick={handleLogin}>log in</button>}
        </div>
      </div>
    </div>
  </>
);
          };
export default Login;


import React, { useEffect, useState } from 'react';
import NavBar from '../nav-bar';
import '../pages/more.css';
import {useName} from '../usecontext/context'

const More = () => {
const {namee}=useName();

  const [data, setData] = useState([]);
  const [todooo, setTodoo] = useState('');

useEffect(() => {
  const storedData = localStorage.getItem(namee);

  if (storedData) {
    setData(storedData.split(','));
  }

}, []);

useEffect(() => {
    if (data.length > 0) {
    localStorage.setItem(namee, data.join(','));
  }
}, [data]);


  const handleChange = (e) => {
    setTodoo(e.target.value);
  };

  const handleClick = () => {
    if (todooo.trim() !== '') {
      setData([...data, todooo]);
      setTodoo(''); 
   localStorage.setItem(namee,data)
    }
  };

  return (
    <div>
      <NavBar />
                    <marquee behavior=""direction="right"> welcom back  {namee} </marquee>

      <div className='main-todo'>

        <div className="box-todo">
          <div className="title">{namee}</div>
          <div className='input'>
            what you want to do???{' '}
            <input type="text" value={todooo} onChange={handleChange} />
            <button onClick={handleClick}>submit</button>
          </div>
          {data.length > 0 ? (
            data.map((todo, index) => (
              <div key={index} className='things'>
                {todo}
              </div>
            ))
          ) : (
            <div className='things'>No elements in the data array</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default More;

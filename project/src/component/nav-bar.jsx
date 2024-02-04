import React, { useEffect, useState } from 'react';
import './nav-bar.css';
import { Link } from 'react-router-dom';
import DATA from '../data/data';

const NavBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, []);

  return (
    <>
      <div className='main'>
        <div className='logo'>Ali Hammoud</div>

        <div className='elements'>
          {data.map((el, index) => (
            <div className="element" key={index}>
              <Link to={el.path}>{el.name}</Link>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default NavBar;

import React from 'react'

const singup = () => {
  return (<>
  <NavBar />
    <div className='mainn'>
      <div className='box'>
        <div className='title'>SINGUP</div>
        <div className='name'>
          Name: <input
            type='text'
       
            className='name-input'
          />
        </div>
        <div className='name'>
          Pass: <input
            type='password'
            className='password-input'
          />
        </div>
        <div>
     
        </div>
      </div>
    </div>
  </>
);
  
}

export default singup

import React from 'react';
import {Link} from 'react-router-dom';

const Home = () =>(
    <div className='container'>
      <div className='jumbotron mt-5'>
        <h1 className='display-4'>Welcome</h1>
        <p className='lead'></p>
        <hr className='my-4'/>
        <p>Click the Log In button</p>
      
        <Link className='btn btn-dark btn-lg' to='/login' role='button'>Login</Link>
      
      </div>
    </div>
);

export default Home;
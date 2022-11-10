import { logDOM } from '@testing-library/react';
import React from 'react';
import App from './App.css';
import logo from './images/logo.png';


const Login = () =>{ 
	return (
		<div className='form'>
      <img src={logo}></img>
			<form action=""> 
      <div  className='head'>
        <header>
          <h3><a>Admin Log in</a></h3>
        </header>
      </div>
				<div className='mail'> 
					<label className="mobile" htmlFor="email"><a>Email Id or Mobile Number</a></label>
					<input type="text" name="email" id="email" placeholder="Your mail Id or Mobile number" /> 
          
				</div> 
				<div className='number'> 
					<label className="word" htmlFor="password"><a>Password</a></label>
					<input type="text" name="password" id="password" placeholder="Your Password" /> 
				</div>  
        <div className='checkbox'>
          <input type="checkbox"></input>
          <label className="remember" htmlFor="text"><a>Remember Me</a></label>
        </div>
				<button type="submit"><a>LOG IN</a></button>
			</form>
		</div>
	);
};

export default Login; 
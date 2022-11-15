import React from 'react';
import App from './App.css';
import logo from './images/logo.png';


const Login = () =>{ 
	return (
		<div className='form'>
      <img src={logo}></img>
			<form action="">
				<div className='total'>
      <div  className='head'>
	
        <header>
			
          <h3>Admin Log in</h3>
        </header>
		</div>
				<div className='mail'> 
					<label className="mobile" htmlFor="email">Email Id or Mobile Number</label>
					<input type="text" name="email" id="email" placeholder="Your mail Id or Mobile number" /> 
          
				</div> 
				<div className='number'> 
					<label className="word" htmlFor="password">Password</label>
					<input type="text" name="password" id="password" placeholder="Your Password" /> 
				</div>  
        <div className='checkbox'>
          <input className='input' type="checkbox"></input>
          <label className="remember" htmlFor="text">Remember Me</label>
        </div>
				<button type="submit">LOG IN</button>
				</div>
				
			</form>
			
			</div> 		
			
	);
};

export default Login; 
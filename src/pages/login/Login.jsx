import "./login.css"
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form  className="loginform">
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter Email" />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter password" />
            <button className="loginbutton">Submit</button>
        </form>
        <button className="loginRegisterbutton">
        <Link className="link" to="./register">
        Register

        </Link>
        </button>
        
        
    </div>
  )
}

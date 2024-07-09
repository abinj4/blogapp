import "./register.css"
import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form  className="registerform">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter Username" />
            <label>Email</label>
            <input className="registerInput" type="text" placeholder="Enter Email" />
            <label>Password</label>
            <input className="registerInput" type="password" placeholder="Enter password" />
            <button className="registerbutton">Submit</button>
        </form>
        <button className="registerLoginbutton">
        <Link className="link" to="./login">
        Login

        </Link>
        </button>
        
        
    </div>
  )
}

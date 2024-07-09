import React from 'react';
import { Link } from 'react-router-dom';
 import "./topbar.css"

export default function topbar() {
  const user =true;
 


  
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-instagram"></i>

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
           <Link className='link' to="/">HOME

           </Link>

          </li>
          <li className="topListItem"> 
              <Link className='link' to="/post/:postId">ABOUT </Link></li>
          <li className="topListItem">
          <Link className='link' to="/">CONTACT</Link>

          </li>
          <li className="topListItem">
          <Link className='link' to="/write">WRITE</Link>

          </li>
          <li className="topListItem">
            <Link className='link' to="/login">
          {user  && " LOGOUT"}</Link>
          </li>
        </ul>

      </div>
      <div className="topRight">
        {
          user ?(
            <img className="topImg" src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=4000" alt=""/>
            

          ):(
            <ul className='topList'>
              <li className='topListItem'>
            <Link className='link' to="/login">LOGIN </Link>
            </li>
            <li className='topListItem'>
             <Link className='link' to="/register">REGISTER</Link>
             </li>
          </ul>

          )
        }
        
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>


      </div>
    </div>
  )
}

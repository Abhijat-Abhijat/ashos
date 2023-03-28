import React from 'react'
import logo from '../assets/ashos.png'
import '../styles/Header.scss'
import '../styles/App.scss'
function Header() {
  return (
    <nav>
      <div className="left">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="right no-underline flex">
        <a href="/download">GET ASH OS</a>
        <a href="/docs">DOCUMENTATION</a>
        <a href="/communityy">COMMUNITY</a>
        <a href="/about">ABOUT</a>
      </div>
    </nav>
  );
}

export default Header
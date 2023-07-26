import React from 'react'
import '../styles/css/menu-bar.css'

function BurgerMenu() {
    
  return (
    <div className='burger-menu'>
        <div className="burger-wrapper">
        <div className="menu-topics">
            <div className="menu-topics-wrapper">
                <ul className="headers-topic">
                    <li className="header-topic"><a href='#'>Physics /<span>152</span></a></li>
                    <li className="header-topic"><a href='#'>Mathematics /<span>78</span></a></li>
                    <li className="header-topic"><a href='#'>Biology /<span>177</span></a></li>
                    <li className="header-topic"><a href='#'>Computer Science /<span>99</span></a></li>
                </ul>
                <ul className="menu-themes">
                    <li className="menu-theme"><a href='#'>Topics</a></li>
                    <li className="menu-theme"><a href='#'>Archive</a></li>
                    <li className="menu-theme"><a href='#'>Videos</a></li>
                    <li className="menu-theme"><a href='#'>Podcasts</a></li>
                    <li className="menu-theme"><a href='#'>About</a></li>
                    <li className="menu-theme"><a href='#'>Blog</a></li>
                    <li className="menu-theme"><a href='#'>Contact</a></li>
                    <li className="menu-theme"><a href='#'>Puzzles</a></li>
                </ul>
                
            </div>
            <img src="static/images/tiger.png" alt="tiger" />
        </div>
        <div className="menu-footer">
            <div className="menu-footer-header">Get highlights of the most important news  <br/>delivered to your email inbox</div>
            <div className="menu-subscribe-wrapper">
                <div className="menu-input-wrapper">
                    <input type="text" placeholder='Email address'/>
                </div>
                <div className="menu-button-wrapper">
                    <button >SUBSCRIBE</button>
                </div>
            </div>
            <div className="menu-footer-links">
                <a href='/' className="menu-footer-link"><img src="static/icons/facebook-white.svg" alt="" /></a>
                <a href='/' className="menu-footer-link"><img src="static/icons/twitter-white.svg" alt="" /></a>
                <a href='/' className="menu-footer-link"><img src="static/icons/chain-white.svg" alt="" /></a>
                <a href='/' className="menu-footer-link"><img src="static/icons/letter-white.svg" alt="" /></a>
                <a href='/' className="menu-footer-link"><img src="static/icons/mark-white.svg" alt="" /></a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BurgerMenu
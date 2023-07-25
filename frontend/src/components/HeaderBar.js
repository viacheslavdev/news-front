import React from 'react'
import '../styles/css/header.css'

function HeaderBar({burgerMenu, burgerToggle, toggle}) {


  return (
    <div className={`header-wrapper ${burgerMenu ? 'new-color' : 'original-color'}`}>
        <div className="header-content">
            <div className="header-elements">
                <div className='qm-img'>
                    <a href='#'>
                        <img src="/static/icons/Qm.svg" alt="qm" />
                    </a>
                </div>
                <div className="menu">
                    <div className='menu-wrapper'>
                        <div className="menu-element"><a href='#'>Physics</a></div>
                        <div className="menu-element"><a href='#'>Mathematics</a></div>
                        <div className="menu-element"><a href='#'>Biology</a></div>
                        <div className="menu-element"><a href='#'>Computer Science</a></div>
                        <div className="menu-element"><a href='#'>Videos</a></div>
                        <div className="menu-element"><a href='#'>Podcast</a></div>
                    </div>
                </div>
                <div className='menu-bar'>
                    <img src="/static/icons/Search.svg" alt="bar-icon" className="bar-icon" />
                    <img src="/static/icons/Marker.svg" alt="bar-icon" className="bar-icon" />
                    <img src="/static/icons/Login.svg" alt="bar-icon" className="bar-icon" />
                    <div className={`bar-icon toggle-button ${toggle}`} onClick={() => burgerToggle()}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderBar
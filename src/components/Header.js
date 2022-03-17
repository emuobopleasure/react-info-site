import React from 'react'
import { FaMoon, FaSun } from "react-icons/fa"

const Header = ({handleToggle, theme}) => {
  return (
    <div>
        <nav className={theme ? 'navLight' : 'navDark'}>
           <div className='nav-left'>
                <img src='favicon.ico' className='nav-img'/>
                <h4>ReactFacts</h4>
           </div>
           <div className='nav-right'>
               <button onClick={handleToggle}
                className=''>
                 <FaMoon 
                  className={theme ? 'darkMode' : 'lightMode'}
                 />
                 <FaSun 
                  className={theme ? 'lightMode' : 'darkMode'}
                />
               </button>
           </div>
        </nav>
    </div>
  )
}

export default Header
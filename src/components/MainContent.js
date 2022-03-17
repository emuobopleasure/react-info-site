import React from 'react'

const MainContent = ({theme}) => {
  return (
    <main>
        <h1>Fun facts about React</h1>
        <ul>
            <div className='list-item'>
            <span className='dot'></span>
            <li> Was first released in 2013</li>
            </div>
            <div className='list-item'>
            <span className='dot'></span>
            <li>Was originally created by Jordan Walke</li>
            </div>
            <div className='list-item'>
            <span className='dot'></span>
            <li>Has well over 100K stars on GitHub</li>
            </div>
            <div className='list-item'>
            <span className='dot'></span>
            <li>Is maintained by Facebook</li>
            </div>
            <div className='list-item'>
            <span className='dot'></span>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
            </div>
        </ul>
        {/* <img src='images/Group.png' className='main-background'/> */}
    </main>
  )
}

export default MainContent
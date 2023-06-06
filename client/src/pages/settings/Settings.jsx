import React from 'react'
import './settings.css'
import SIdebar from '../../components/sidebar/SIdebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingWrapper">
            <div className="settingsTitle">
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form action="" className="settingsForm">
              <label >Profile Picture</label>
              <div className="settingsPP">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <label htmlFor="fileInput">
                  <i class="settingsPPIcon fa-regular fa-user"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}}/>
              </div>
              <label>Username</label>
              <input type="text" placeholder='Debjyoti'/>
              <label>Email</label>
              <input type="email" placeholder='Debjyoti@gmail.com'/>
              <label>Password</label>
              <input type="password"/>
              <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <SIdebar/>
    </div>
  )
}

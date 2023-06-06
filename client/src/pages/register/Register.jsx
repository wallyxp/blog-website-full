import React, { useState } from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const res = await axios.post("/auth/register/",{
      username,
      email,
      password,
    })
    console.log(res);
  }
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" placeholder='Enter username' className='registerInput' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <label>Email</label>
            <input type="text" placeholder='Enter your email' className='registerInput'value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
            <label>Password</label>
            <input type="password" placeholder='Create new password' className='registerInput' value={password} onChange={(e)=>{
              setPassword(e.target.password)
            }}/>
            <button className='registerButton' type="submit">Register</button>
        </form>
        <button className='registerRegisterButton' onClick={()=> {
          navigate("/login")
        }}>Login</button>
    </div>
  )
}

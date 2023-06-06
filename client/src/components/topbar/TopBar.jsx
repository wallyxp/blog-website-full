import "./topbar.css"
import React from 'react'
import { Link } from "react-router-dom"

export default function TopBar() {
    const usr = false;

  return (
    <div className="top">
        <div className="topLeft">
            <i className="fa-brands fa-facebook topIcon"></i>
            <i className="fa-brands fa-square-instagram topIcon"></i>
            <i className="fa-brands fa-twitter topIcon"></i>
            <i className="fa-brands fa-pinterest topIcon"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className='link' to='/'>HOME</Link>
                </li>
                <li className="topListItem">
                    ABOUT
                </li>
                <li className="topListItem">
                    CONTACT
                </li>
                <li className="topListItem">
                    <Link className="link" to='/write'>WRITE</Link>
                </li>
                { usr && <li className="topListItem">LOGOUT</li>}
            </ul>
        </div>
        <div className="topRight">
            {usr ? (<Link className="link" to="/settings">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topImage"/>
            </Link>):( <ul className="topList">

                <li className="topListItem">
                        <Link className="link" to='/login'>LOGIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to='/register'>REGISTER</Link>
                    </li>
            </ul> )
                    }
            <i className="fa-solid fa-magnifying-glass topSearchIcon"></i>

        </div>
    </div>
  )
}

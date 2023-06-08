import "./topbar.css"
import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"
    // console.log(user);

    const handleLogout = () =>{
        dispatch({type: "LOGOUT"})
    }
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
                { user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
            </ul>
        </div>
        <div className="topRight">
            {user ? (<Link className="link" to="/settings">
                {user.profilePic? <img src={PF + user.profilePic} alt="" className="topImage"/>:<img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="" className="topImage"/>}
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

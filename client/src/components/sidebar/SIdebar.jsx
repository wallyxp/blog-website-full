import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios';
import {Link} from 'react-router-dom'


export default function SIdebar() {
    const [cat, setCat] = useState([]);

    useEffect(()=>{
        const getCat = async ()=>{
            const res = await axios.get("/categories/")
            setCat(res.data)
        }
        getCat()
    },[])
    return (
    <div className='sideBar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed gravida purus. Vestibulum euismod mauris a neque semper.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                CATEGORIES
            </span>
            <ul className="sidebarList">
                {
                    cat.map((c)=>(
                        <Link to={`/?cat=${c.name}`} className='link'>                      
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))
                }
                {/* <li className="sidebarListItem">Tumio BEshsha</li>
                <li className="sidebarListItem">Tumio BEshsha</li> */}
            </ul>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
                <i className="fa-brands fa-facebook sidebarIcon"></i>
                <i className="fa-brands fa-square-instagram sidebarIcon"></i>
                <i className="fa-brands fa-twitter sidebarIcon"></i>
                <i className="fa-brands fa-pinterest sidebarIcon"></i>
            </div>
        </div>
    </div>
  )
}

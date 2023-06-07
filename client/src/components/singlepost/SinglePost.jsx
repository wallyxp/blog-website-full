import React, { useEffect, useState } from 'react'
import './singlepost.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function SinglePost(){
    const PF = "http://localhost:5000/images/"
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/"+path)
            setPost(res.data)
        }
        getPost()
    }, [path])
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo ? <img src={PF + post.photo} alt="" className="singlePostImg"/>:<img src="https://img.freepik.com/premium-vector/forest-scenery-background-natural-mountains-lakes_621174-1509.jpg" alt="" className="singlePostImg"/>}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <Link to={`/?user=${post.username}`} className='link'>
                    <span className='singlePostAuthor'>Author: <b>{post.username}</b></span>
                    </Link>
                    <span className='singlePostDate'>Created at : {new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='singlePostDesc'>
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
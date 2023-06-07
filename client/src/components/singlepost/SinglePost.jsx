import React, { useContext, useEffect, useState } from 'react'
import './singlepost.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

export default function SinglePost(){
    const {user} = useContext(Context)
    const PF = "http://localhost:5000/images/"
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const [title, setTitle] = useState(post.title)
    const [desc, setDesc] = useState(post.desc)
    const [editMode, setEditMode] = useState(false)
    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/"+path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [path])

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`,{
            username: post.username,
            title,
            desc,
        })
        setEditMode(false)
        } catch (error) {
            
        }
        // console.log('gandu');
    }

    const handleDelete = async() => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: {username: user.username}
            })
            window.location.replace("/")
        } catch (error) {}
        // console.log("hello");
    }
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo ? <img src={PF + post.photo} alt="" className="singlePostImg"/>:<img src="https://img.freepik.com/premium-vector/forest-scenery-background-natural-mountains-lakes_621174-1509.jpg" alt="" className="singlePostImg"/>}
                {
                    editMode ? <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="singlePostTitleInput"/>:
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && 
                            <div className="singlePostEdit">
                                <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={()=> setEditMode(true)}></i>
                                <i className="singlePostIcon fa-sharp fa-solid fa-trash" onClick={handleDelete}></i>
                            </div>
                        }
                    </h1>
                    
                }
                
                <div className="singlePostInfo">
                    <Link to={`/?user=${post.username}`} className='link'>
                    <span className='singlePostAuthor'>Author: <b>{post.username}</b></span>
                    </Link>
                    <span className='singlePostDate'>Created at : {new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    editMode ? <textarea value={desc} className='singlePostDescInput' onChange={(e)=> setDesc(e.target.value)}/> : 
                    <p className='singlePostDesc'>
                        {desc}
                    </p>
                }
            {
                editMode && <button onClick={handleUpdate} className='singlePostButton'> Update </button>
            }
            </div>
        </div>
    )
}
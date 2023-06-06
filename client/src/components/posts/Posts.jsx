import React from 'react'
import './posts.css'
import Post from '../post/Post'
import { useNavigate } from 'react-router-dom'

export default function Posts({posts}) {
  let navigate = useNavigate()
  return (
    <div className="posts" >
        {
          posts.map(p=>(
            <Post post={p}/>
          ))
        }
    </div>
  )
}

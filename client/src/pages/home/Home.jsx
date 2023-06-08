import React, { useEffect, useState } from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SIdebar from '../../components/sidebar/SIdebar'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/" + search)
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
    <Header/>
    <div className="home">
        <Posts posts={posts}/>
        {/* <SIdebar/> */}
    </div>
    </>
  )
}

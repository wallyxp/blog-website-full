import React from 'react'
import './single.css'
import SIdebar from "../../components/sidebar/SIdebar";
import SinglePost from "../../components/singlepost/SinglePost";

export default function Single() {
    return (
        <div className='single'>
            <SinglePost/>
            <SIdebar/>
        </div>
    )
}
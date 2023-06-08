import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          {/* <span className='headerTitleSm'>{`( ͡° ͜ʖ ͡°)`}</span> */}
          <span className='headerTitleLg'>The Enigma Express</span>
        </div>
        <img src="https://wallpapers.com/images/hd/hd-black-aesthetic-trees-pvrs39atu3arkeln.jpg" alt="" className='headerImg'/>
    </div>
  )
}

import React from 'react'
import '../styles/Header.css'

export default function Header() {
  return (
    <header className='head-root'>
        <div className='head-content'>
            <span className='title'>Pit & Watch</span>
            <button className='screening-btn' name='login'>Login</button>
        </div>
    </header>
  )
}

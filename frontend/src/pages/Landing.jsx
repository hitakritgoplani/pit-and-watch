import React from 'react'
import cross from '../assets/images/bg.png'
import circuits from '../assets/CircuitData'
import '../styles/Landing.css'
import Header from '../components/Header'
import ImageGrid from '../components/ImageGrid'
import Footer from '../components/Footer'

export default function Landing() {
    return (
        <div className='landing-root'>
            <Header />
            <div className='top'>
                <div className='for-border'>
                    <div className='app-desc'>
                        <span className='icon'>🏎</span>
                        <h1>Discover F1 <br />Screenings near you</h1>
                        <span className='icon'>🏆</span>
                    </div>
                    <div className="location-container">
                        <input className='location-input' type='text' placeholder='Enter your city'></input>
                        <button className="find-screening-btn">Search</button>
                    </div>
                    <div className='img-container'>
                        <img className='img' src={cross} />
                    </div>
                </div>
            </div>
            <h2>Schedule</h2>
            <div className='mid'>
                {circuits.map((circuit, i) => (
                    <ImageGrid key={i} circuit={circuit.circuit} name={circuit.name} date={circuit.date} month={circuit.month} flag={circuit.flag} />
                ))}
            </div>
            <div className="container-bottom">
                <div className="race-curb"></div>
            </div>
            <Footer />
        </div>
    )
}

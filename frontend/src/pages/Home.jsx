import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

export default function Home() {
    var events = [
        {
            "title":"Singapore",
            "date":"22/09/2024",
            "time":"6.30PM",
            "location":"BKC SOCIALS",
            "price":"199"
        },
        {
            "title":"Singapore",
            "date":"22/09/2024",
            "time":"6.30PM",
            "location":"Thane SOCIALS",
            "price":"199"
        }
    ]
    return (
        <div>
            <div className='home-root'>
                <div className='left'>
                    {events.map((event, i) => (<Card title={event.title} date={event.date} time={event.time} location={event.location} price={event.price} key={i} /> ))}
                </div>
                <div className='right'>
                    <div className='filters' id='location'>

                    </div>
                    <div className='filters' id='sport'>

                    </div>
                    <div className='filters' id='price'>

                    </div>
                </div>
            </div>
        </div>
    )
}
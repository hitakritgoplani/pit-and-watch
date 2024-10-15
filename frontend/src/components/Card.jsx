import React from 'react'

export default function Card(props) {
    return (
        <div className='card-root'>
            <div className='details'>
                <h4 className='tittle'>{props.title}</h4>
                <div className='dateandtime'>
                    <h4 className='date'>{props.date}</h4>
                    <span className='pipe'>|</span>
                    <h4 className='time'>{props.time}</h4>
                </div>
                <h4 className='location'>{props.location}</h4>
                <h4 className='price'>₹ {props.price}</h4>
            </div>
        </div>
  )
}

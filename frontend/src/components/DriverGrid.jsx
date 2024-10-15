import React from 'react';
import '../styles/Driver.css';

export default function DriverGrid(props) {
    return (
        <div className="driver-outer-div">
            <img className='helmet-image' src={props.helmet} />
        </div>
    );
}
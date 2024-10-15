import React from 'react';
import '../styles/ImageGrid.css';
import Flag from 'react-world-flags';

export default function ImageGrid(props) {
    return (
        <div className="outer-div">
            <div className='inner-div'>
                <div className='dates'>
                    <span>{props.date}</span>
                    <span>{props.month}</span>
                </div>
                <img className='circuit-image' src={props.circuit} />
                <span>{props.name}</span>
                <span className='flag-container'><Flag className='flag-class' code={props.flag} /></span>
            </div>
        </div>
    );
}
import React from 'react'
import './style.css'
import  '../Buttons/Button'


export default function Person() {
    return (
        <div className="person">
            <div className="person-1">
                <ul className="person-container-1">
                    <li><label><b>Find Your Professor </b></label></li>
                    <li>
                        <div className="ui action input">
                            <input type="text" placeholder="Search Proffesor Name" name="prf" required />
                            <button className="ui button">Search</button>
                        </div>
                    </li>
                    <li><label><b>Find A School </b></label></li>
                    <li>
                        <div className="ui action input">
                            <input type="text" placeholder="Search School Name" name="scl" required />
                            <button className="ui button">Search</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="person-2">
                <ul className="person-container-2">
                    <li>
                        <label><b>Introduction </b></label>
                    </li>
                    <li>
                        <p>This is a website created for studies purposes...</p>
                    </li>
                </ul>      
            </div>
        </div>
    )
}


import React from "react"
import './style.css'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default function Team () {
    return(
        <div className="members">
            <div className="member">
                <ul className="member-container">
                    <li><label><b>Nguyen Ngoc Huy Hoang</b></label></li>
                    <li><label>Backend Developer</label></li>
                    <li className="img">
                        <Image src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-1/p160x160/16142799_1186093134842582_6255869692964298780_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_oc=AQmmdvzVk2OxL8Qjm2XvbdjX9n9o0PeRAEonqAPmHNXcqxkWSUQFM4YG8C7F4pKddf8&_nc_ht=scontent.fsgn2-1.fna&_nc_tp=6&oh=2b70a939628b0c545f47cf2aae1823e6&oe=5F261876"/>
                    </li>
                    <li>
                        <p>Stupid</p>
                    </li>
                </ul>         
            </div>
            <div className="member"> 
                <ul className="member-container">
                    <li><label><b>Tran Hoang Nam</b></label></li>
                    <li><label>Frontend Developer</label></li>
                    <li className="img">
                        <Image src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/82038055_872467229860801_5883156364229869568_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_oc=AQlphoZ79G8B59vzjRviCq3BJZWgGxQ8hyLxmvkI_84pw-yxuxSAnzxEyiy8w9x_pcs&_nc_ht=scontent.fsgn2-5.fna&oh=03ae4c877f5c3a3251bbc0c245829ce8&oe=5F290828"/>
                    </li>
                    <li>
                        <p>Introduction....</p>
                    </li>
                </ul>         
            </div>        
        </div>
    )
    
}
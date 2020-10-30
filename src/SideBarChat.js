import React from 'react'
import './Sidebarchat.css'
import {Avatar} from '@material-ui/core';

export default function SideBarChat() {
    return (
        <div className ="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is last Message</p>
            </div>
        </div>
    )
}

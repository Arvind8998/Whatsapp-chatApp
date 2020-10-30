import { Avatar } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {IconButton} from "@material-ui/core";

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at ..</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </ IconButton>
                    <IconButton>
                        <ChatIcon />
                    </ IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </ IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Arvind</span> 
                        <span>{new Date().toUTCString()}</span>
                    </p>
                    <p className="chat__message chat__receiver">
                    <span className="chat__name">Arvind</span> 
                        <span>{new Date().toUTCString()}</span>
                    </p>
                    <p className="chat__message">
                    <span className="chat__name">Arvind</span> 
                        <span>{new Date().toUTCString()}</span>
                    </p>
                    <p className="chat__message">
                    <span className="chat__name">Arvind</span> 
                        <span>{new Date().toUTCString()}</span>
                    </p>
                    <p className="chat__message">
                    <span className="chat__name">Arvind</span> 
                        <span>{new Date().toUTCString()}</span>
                    </p>
                    <p className="chat__message">
                    <span className="chat__name">Arvind</span> 
                        <span>{new Date().toUTCString()}</span>
                    </p>
                    
            </div>
        </div>
    )
}

export default Chat

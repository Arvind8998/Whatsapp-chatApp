import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar, IconButton} from "@material-ui/core";
import SideBarChat from'./SideBarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg"/>
                <div className="sidebar__headerRight">
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
            <div className="sidebar___search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined />
                        <input placeholder="Search or start new Chat" type="text"/>
                    </div>
            </div>
            <div className="sidebar__chats">
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />

            </div>
        </div>
    )
}

export default Sidebar

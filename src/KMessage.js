import React from 'react';
import Chat from './Chat';
import'./KMessage.css';
import Sidebar from './Sidebar';

const KMessage = () => {
    return (
        <div className="kmessage">
            <Sidebar></Sidebar>
            <Chat></Chat>
            
        </div>
    );
};

export default KMessage;
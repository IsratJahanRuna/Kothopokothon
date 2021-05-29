import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'

import './login.css'
function login() {

    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error) => alert(error.massage));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img style={{width:"240px"}} src="https://st4.depositphotos.com/22203696/24072/v/450/depositphotos_240728592-stock-illustration-chat-icon-long-shadow-flat.jpg"/>
                <h1 className='ms-3'>Kothopokothon</h1>

           </div>
           <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default login
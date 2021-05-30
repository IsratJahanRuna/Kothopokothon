import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import {logo} from './images/love.png'
import './login.css'
function login() {

    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error) => alert(error.massage));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img style={{width:"240px"}} src={logo}/>

                
                <h1 className='ms-3'>কথোপকথন</h1>

           </div>
           <Button  onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default login
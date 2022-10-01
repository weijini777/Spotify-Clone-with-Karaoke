import React from 'react'
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className="login">
        {/*Spotify Logo*/}
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Spotify_App_Logo.svg"
        alt=""
        />
        {/*Login with spotify button*/}
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login;
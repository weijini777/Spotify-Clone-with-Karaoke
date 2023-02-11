import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Player";
import { useStateValue} from './StateProvider';
import WebPlayback from "./WebPlayback";

//super spotify object
const spotify = new SpotifyWebApi();
let tokenstr = ""
function App() {
  const [ token, dispatch] = useStateValue();
  
  //Run code based on a given condition
  useEffect(()=>{
    const hash = getTokenFromResponse();
    //for security reasons so the token doesnt just sit there
    window.location.hash ="";
    let _token = hash.access_token;
    
    if (_token) {
      tokenstr = _token
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });


      //giving accesstoken to the spotify api
      spotify.setAccessToken(_token);

      //get the user
      spotify.getMe().then((user) => {
        console.log("User: ", user)
        dispatch({
          type: 'SET_USER', 
          user,
        });
      });

      //get user playlists
      spotify.getUserPlaylists().then((playlists) => {
        //console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        })
      })

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getPlaylist('37i9dQZEVXcUxe99QoyJ3i').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })
    }
    
  }, [token, dispatch]);
  
  console.log("Token:", tokenstr)
  return (

    <div className="app">
      {!token && <Login />}
      {tokenstr!="" && <Player spotify={spotify} token={tokenstr}/>}
      {/* {token && <Player spotify={spotify}/>} */}
    
    </div>
  );
}

export default App;

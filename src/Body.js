import React from "react";
import "./Body.css";
import Header from "./Header";
import Webcam from "react-webcam";
import { useStateValue } from "./StateProvider";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  // const [{discover_weekly}, dispatch] = useStateValue();

  // //how is playPlaylist the exact same as playSong except for the id
  // const playPlaylist = (id) => {
  //   console.log("SONG id: ", id);
  //   //call the play function from the api
  //   spotify
  //     .play({
  //       context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
  //     })
  //     .then(() => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //       });
  //     });
  // };

  // const playSong = (id) => {
  //   console.log("SONG id: ", id);
  //   spotify
  //     .play({
  //       uris: [`spotify:track:${id}`],
  //     })
  //     .then((res) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //       });
  //     });
  // };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="video"> 
        <Webcam width={window.innerWidth / 2.8} />
        <Webcam width={window.innerWidth / 2.8} />
      </div>

      {/* <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div> */}
    </div>
  );
}

export default Body;

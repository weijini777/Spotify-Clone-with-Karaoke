import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const  [{playlists}, dispatch]  = useStateValue();
    console.log("Ur mom: ", playlists);
  return (
    <div className='sidebar'>
        <img 
        className='logo'
        src="https://images.squarespace-cdn.com/content/v1/5f270622387daa4d8e76800a/1596481072029-1P8RYURX364V0RMWXP8R/Spotify+Black+White.jpg" 
        alt="" />

        <SidebarOption title="Home" Icon ={HomeIcon}/>
        <SidebarOption title="Search" Icon ={SearchIcon}/>
        <SidebarOption title="Library" Icon={LibraryBooksIcon}/>

        <br/>
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map((playlist) => (
        <SidebarOption title = {playlist.name} /> 
      ))}


    </div>
  )
}

export default Sidebar
import React, {useRef, useEffect} from 'react'

function Video() {
    const videoRef = useRef(null)
    
    const getVideo = () =>{
        navigator.mediaDevices
            .getUserMedia({ 
                video: {
            width: 800, height:800
        }})
        .then(stream => {
            let video = videoRef.current
            video.scrObject = stream;
            video.play()
        })
        .catch(err =>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getVideo();
    },[videoRef])
    console.log("we made it here")
  return (
    <div  className='video'>
        <video ref={videoRef}></video>
    </div>
  )
}

export default Video
import React, { useRef, useEffect } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {

    const playerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (playState) {
            videoRef.current.play();
        }
    }, [playState]);

    const closePlayer = (e) => {
        if (e.target === playerRef.current) {
            setPlayState(false);
        }
    }

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={playerRef} onClick={closePlayer}>
            <video ref={videoRef} src={video} muted controls onClick={(e) => e.stopPropagation()}></video>
        </div>
    )
}

export default VideoPlayer
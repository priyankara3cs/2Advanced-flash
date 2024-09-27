import React, { useState, useRef, useEffect } from "react";
import "./TvPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faVolumeMute,
  faVolumeUp,
  faStepBackward,
  faStepForward,
  faRedo,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const TvPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // For play/stop button
  const [isTvOn, setIsTvOn] = useState(true);
  const videoRef = useRef(null);

  // State for active button
  const [activeIndex, setActiveIndex] = useState(currentVideo);

  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4", // Example video 1
    "https://www.w3schools.com/html/movie.mp4", // Example video 2
    "https://www.w3schools.com/html/mov_bbb.mp4", // Example video 3
  ];

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setIsPlaying(false); // Set playing to false when video ends
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [videoRef]);

  const handleVideoChange = (index) => {
    if (index >= 0 && index < videos.length) {
      setCurrentVideo(index);
      setActiveIndex(index); // Update active button index
      setIsPlaying(false); // Reset playing state when video changes
    }
  };

  const toggleMute = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleTvPower = () => {
    setIsTvOn(!isTvOn);
    if (videoRef.current) {
      videoRef.current.pause(); // Pause video when TV is turned off
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  const rewindVideo = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.currentTime = 0; // Rewind to the beginning
    }
  };

  const handleNextVideo = () => {
    handleVideoChange((currentVideo + 1) % videos.length); // Loop back to the first video
  };

  const handlePreviousVideo = () => {
    handleVideoChange((currentVideo - 1 + videos.length) % videos.length); // Loop back to the last video
  };

  return (
    <div className="fooo">
      <div className="scrollable-container">
        <div className="tv-container">
          <div className="tv-frame">
            {isTvOn ? (
              <video
                key={currentVideo}
                ref={videoRef}
                className="video-player"
                muted={isMuted}
                // autoPlay
              >
                <source src={videos[currentVideo]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="tv-off">TV OFF</div>
            )}
            <div className="tv-overlay" />
          </div>

          <div className="tv-remote">
            <h4>Remote Control</h4>
            <br />

            <div className="button-grid">
              <button className="remote-button" onClick={toggleTvPower}>
                <FontAwesomeIcon icon={faPowerOff} />
              </button>

              <button className="remote-button" onClick={togglePlay}>
                <FontAwesomeIcon icon={isPlaying ? faStop : faPlay} />
              </button>

              <button className="remote-button" onClick={toggleMute}>
                <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
              </button>

              <button className="remote-button" onClick={handlePreviousVideo}>
                <FontAwesomeIcon icon={faStepBackward} />
              </button>

              <button className="remote-button" onClick={handleNextVideo}>
                <FontAwesomeIcon icon={faStepForward} />
              </button>

              <button className="remote-button" onClick={rewindVideo}>
                <FontAwesomeIcon icon={faRedo} />
              </button>

              {videos.map((_, index) => (
                <button
                  key={index}
                  className={`remote-button ${
                    activeIndex === index ? "active" : ""
                  }`} // Add active class
                  onClick={() => handleVideoChange(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvPlayer;

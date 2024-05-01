import { useEffect, useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";
export const MusicPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;

      const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current!.currentTime);
      };

      const handleLoadedMetadata = () => {
        setDuration(videoRef.current!.duration);
      };

      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
      videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        videoRef.current!.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current!.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      };
    }
  }, []);

  const progress = (currentTime / duration) * 100 - 1;

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={styles.musicPlayerContainer}>
      <div className={styles.albumCover}>
        <video ref={videoRef} src="/music/complicated/complicated.mp4"></video>
        <div className="text-block">
          <h3>Mac Miller - Complicated</h3>
          <p>Original Soundtrack</p>
        </div>
        <div className={styles.musicPlayerProgressbar}>
          <div className={styles.musicPlayerBar}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            ></div>
            <div className={styles.progressTimer}>
              {formatTime(currentTime)} / 03:53
            </div>
          </div>
        </div>
        <br />
        <div className={styles.musicPlayerButtons}>
          <button>Previous</button>
          <button onClick={() => handlePlay()}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

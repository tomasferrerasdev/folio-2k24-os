import { useEffect, useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";

export const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs = [
    {
      title: "Masayoshi Takanaka - Tokyo Reggie",
      audioPath: "/music/tokyo_reggie/music.mp3",
      coverPath: "/music/tokyo_reggie/cover.jpg",
    },
    {
      title: "Megadeth - Mechanix",
      audioPath: "/music/mechanix/music.mp3",
      coverPath: "/music/mechanix/cover.jpg",
    },
    {
      title: "Mac Miller - Complicated",
      audioPath: "/music/complicated/music.mp3",
      coverPath: "/music/complicated/cover.jpg",
    },
  ];

  const handlePlay = () => {
    const audio: any = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleNext = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
  };

  useEffect(() => {
    const audio: any = audioRef.current;
    audio.volume = 0.1;
    const setAudioData = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };
    audio.addEventListener("timeupdate", setAudioData);

    return () => {
      audio.removeEventListener("timeupdate", setAudioData);
    };
  }, []);

  useEffect(() => {
    const audio: any = audioRef.current;
    audio.src = songs[currentSongIndex].audioPath;
    audio.load();
    if (isPlaying) {
      audio.play();
    }
  }, [currentSongIndex]);

  return (
    <div className={styles.musicPlayerContainer}>
      <div className={styles.albumCover}>
        <img src={songs[currentSongIndex].coverPath} alt="" />
        <audio ref={audioRef}>
          <source src={songs[currentSongIndex].audioPath} type="audio/mpeg" />
        </audio>
        <div className="text-block">
          <h3>{songs[currentSongIndex].title}</h3>
          <p>Original Soundtrack</p>
        </div>
        <div className={styles.musicPlayerProgressbar}>
          <div className={styles.musicPlayerBar}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            ></div>
            <div className={styles.progressTimer}>
              {(audioRef.current as unknown as HTMLAudioElement)?.currentTime &&
                formatTime(
                  (audioRef.current as unknown as HTMLAudioElement).currentTime
                )}{" "}
              /{" "}
              {formatTime(
                (audioRef.current as unknown as HTMLAudioElement)?.duration || 0
              )}
            </div>
          </div>
        </div>
        <br />
        <div className={styles.musicPlayerButtons}>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={() => handlePlay()}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

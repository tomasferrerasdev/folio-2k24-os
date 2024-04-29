import styles from "./MusicPlayer.module.css";

export const MusicPlayer = () => {
  return (
    <div className={styles.musicPlayerContainer}>
      <div className={styles.albumCover}>
        <img src="/images/masayoshi.jpg" alt="" />
        <div className="text-block">
          <h3>高中正義 Masayoshi Takanaka - All of me</h3>
          <p>Original Soundtrack</p>
        </div>
        <div className={styles.musicPlayerProgressbar}>
          <div className={styles.musicPlayerBar}>
            <div className={styles.progress}></div>
            <div className={styles.progressTimer}>00:04 / 01:33</div>
          </div>
        </div>
        <br />
        <div className={styles.musicPlayerButtons}>
          <button>Previous</button>
          <button>Pause</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

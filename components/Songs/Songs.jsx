import Link from "next/link";
import styles from "./songs.module.css";

const Song = ({ song }) => {
  return (
    <Link href={`/song/${song.id}`}>
      <div className={styles.song}>
        <div className={styles.title}>{song.title}</div>
        <img src={song.album_image_url} />
      </div>
    </Link>
  );
};

const Songs = ({ songs }) => {
  return (
    <div className={styles.wrapper}>
      {songs.map((song) => (
        <div key={song.id}>
          <Song song={song} />
        </div>
      ))}
    </div>
  );
};

export default Songs;

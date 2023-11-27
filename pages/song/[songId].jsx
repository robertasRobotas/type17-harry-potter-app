import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Song = () => {
  const [song, setSong] = useState(null);

  const router = useRouter();

  const fetchSong = async (songId) => {
    const song = await axios.get(
      `https://6554f24b63cafc694fe73e68.mockapi.io/songs/${songId}`
    );

    setSong(song.data);
  };

  useEffect(() => {
    router.query.songId && fetchSong(router.query.songId);
  }, [router.query]);

  return (
    <div>
      {song && (
        <>
          <div>{song.title}</div>
          <div>{song.artist}</div>
          <div>{song.release_date}</div>
        </>
      )}
    </div>
  );
};

export default Song;

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Songs from "/components/Songs/Songs";

const Main = () => {
  const [songs, setSongs] = useState(null);

  const getSongsData = async () => {
    const fetchedSongs = await axios.get(
      "https://6554f24b63cafc694fe73e68.mockapi.io/songs"
    );

    setSongs(fetchedSongs.data);
  };

  useEffect(() => {
    getSongsData();
  }, []);

  return (
    <div>
      <Header />
      {songs && <Songs songs={songs} />}
      <Footer />
    </div>
  );
};

export default Main;

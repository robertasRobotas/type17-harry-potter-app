import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Songs from "/components/Songs/Songs";

const Main = async () => {
  const getSongsData = async () => {
    const fetchedSongs = await axios.get(
      "https://6554f24b63cafc694fe73e68.mockapi.io/songs"
    );

    setSongs(fetchedSongs.data);
  };

  const songs = await fetchedSongs();

  return (
    <div>
      <Header />
      <Suspense fallback={<Footer />}>
        <Songs songs={songs} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Main;

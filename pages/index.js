import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import Characters from "../components/Characters/Characters";
import Header from "../components/Header/Header";
import Spinner from "@/components/Spinner/Spinner";

const Main = () => {
  const [characters, setCharacters] = useState(null);

  const getCharactersData = async () => {
    const character = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );

    setCharacters(character.data);
  };

  useEffect(() => {
    getCharactersData();
  }, []);

  return (
    <div>
      <Header />
      {characters ? (
        <Characters characters={characters} setCharacters={setCharacters} />
      ) : (
        <Spinner />
      )}
      <Footer />
    </div>
  );
};

export default Main;

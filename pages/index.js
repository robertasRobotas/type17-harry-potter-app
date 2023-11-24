import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import Characters from "../components/Characters/Characters";
import Header from "../components/Header/Header";
import Spinner from "@/components/Spinner/Spinner";
import Button from "@/components/Button/Button";
import Tasks from "@/components/Tasks/Tasks";

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
      <Tasks />
      <Footer />
    </div>
  );
};

export default Main;

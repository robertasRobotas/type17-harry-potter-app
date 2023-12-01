import { Suspense, useEffect, useState } from "react";
import Link from "next/link";

import axios from "axios";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Songs from "@/components/Songs/Songs";
import Character from "@/components/Character/Character";
import Input from "@/components/Input/Input";

const Main = () => {
  const [isShowCharacter, setIsShowCharacter] = useState(true);

  useEffect(() => {
    console.log(process.env.SERVER_URL);
  }, []);

  return (
    <>
      <Header />

      <button
        onClick={() => {
          setIsShowCharacter(false);
        }}
      >
        destroy card
      </button>

      <Input />

      <Suspense fallback={<Footer />}>
        <Character
          id="1"
          name="James Bond"
          imgUrl="https://images.immediate.co.uk/production/volatile/sites/3/2021/09/daniel-craig-007.jpg-303a730.png?resize=768,574"
        />
      </Suspense>

      <Footer />
    </>
  );
};

export default Main;

import Image from "next/image";
import styles from "./character.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Character = ({ id, name, imgUrl, removeCard }) => {
  const [nickname, setNickname] = useState(7);
  const ref = useRef(null);

  const fetchData = () => {
    // Simulating a fetch call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data loaded!");
      }, 3000); // Delay of 3 seconds
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("rerender");

  return (
    <div ref={ref} className={styles.wrapper}>
      <div>{name}</div>
      <div>{nickname}</div>

      {imgUrl ? (
        <>
          <img className={styles.image} alt="character photo" src={imgUrl} />
        </>
      ) : (
        <div
          style={{
            backgroundColor: "#85998a",
            width: "300px",
            height: "300px",
          }}
        >
          no image
        </div>
      )}

      <button
        onClick={() => {
          // setNickname(nickname + 1);
          ref.current.value = "newValue";
        }}
      >
        change state
      </button>
    </div>
  );
};

export default Character;

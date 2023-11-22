import Image from "next/image";
import styles from "./character.module.css";

const Character = ({ id, name, imgUrl, removeCard }) => {
  const onCardClicked = () => {
    removeCard(id);
  };

  return (
    <div onClick={onCardClicked} className={styles.wrapper}>
      <div>{name}</div>

      {imgUrl ? (
        <>
          <Image
            className={styles.image}
            alt="character photo"
            src={imgUrl}
            width={200}
            height={200}
          />
        </>
      ) : (
        <div className={styles.imagePlaceholder}>no image</div>
      )}
    </div>
  );
};

export default Character;

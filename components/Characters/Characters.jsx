import Character from "../Character/Character";
import styles from "./characters.module.css";

const Characters = ({ characters, setCharacters }) => {
  console.log(characters);

  const removeCard = (id) => {
    const filteredCharacters = characters.filter((character) => {
      return character.id !== id;
    });

    setCharacters(filteredCharacters);
  };

  return (
    <div className={styles.wrapper}>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Character
              id={character.id}
              name={character.name}
              imgUrl={character.image}
              removeCard={removeCard}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Characters;

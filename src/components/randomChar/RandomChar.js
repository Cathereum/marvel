import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";

import { getUniqCharacter } from "../../api/MarvelApi";
import { useEffect, useState } from "react";

const character = {};

const RandomChar = () => {
  const [updateChar, setUpdateChar] = useState(character);

  const randomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

  useEffect(() => {
    showUniqCharacter(randomId);
  }, []);

  const showUniqCharacter = async (characterId) => {
    const uniqCharacter = await getUniqCharacter(characterId);

    return setUpdateChar(uniqCharacter);
  };

  return (
    <div className="randomchar">
      <div className="randomchar__block">
        <img
          src={updateChar.thumbnail}
          alt="Random character"
          className="randomchar__img"
        />
        <div className="randomchar__info">
          <p className="randomchar__name">{updateChar.name}</p>
          <p className="randomchar__descr">{updateChar.description}</p>
          <div className="randomchar__btns">
            <a href={updateChar.homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={updateChar.wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button className="button button__main">
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

export default RandomChar;

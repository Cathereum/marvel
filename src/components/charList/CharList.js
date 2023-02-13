import "./charList.scss";
import Spinner from "../spinner/Spinner";

import { getAllCharacters } from "../../api/MarvelApi";
import { useEffect, useState } from "react";

const CharList = () => {
  let loading = true;

  const [renderChar, setRenderChar] = useState();

  useEffect(() => {
    showAllChar();
  }, []);

  const showAllChar = async () => {
    const allChar = await getAllCharacters();
    loading = false;
    return setRenderChar(
      allChar.map((item) => (
        <li key={item.id} className="char__item char__item_selected">
          <img src={item.thumbnail} alt={item.name} />
          <div className="char__name">{item.name}</div>
        </li>
      ))
    );
  };

  return (
    <div className="char__list">
      <ul className="char__grid"> {renderChar}</ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;

import axios from "axios";

const _apiKey = "28f7af77830c4b5a79cdf17fef748cf1";

//получаем всех персонажей с лимитом
export const getAllCharacters = async () => {
  const srcData = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=${_apiKey}`
  );
  return srcData.data.data.results.map(_getCharacterObject);
};

//получаем 1 персонажа
export const getUniqCharacter = async (characterId) => {
  const srcData = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=${_apiKey}`
  );
  return _getCharacterObject(srcData.data.data.results[0]);
};

//создаем объект 1 персонажа
const _getCharacterObject = (character) => {
  const noDescr = "There is no description for this character";
  const yesDescr = `${character.description.slice(0, 150)}...`;

  return {
    id: character.id,
    name: character.name,
    description: !character.description ? noDescr : yesDescr,
    thumbnail: character.thumbnail.path + "." + character.thumbnail.extension,
    homepage: character.urls[0].url,
    wiki: character.urls[1].url,
  };
};

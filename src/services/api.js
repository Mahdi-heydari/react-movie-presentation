import axios from "axios";

export const getCharacterInfo = async (id) => {
  const result = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return result.data;
};

export const fetchData = async () => {
  const result = await axios.get("https://rickandmortyapi.com/api/character");
  return result.data.results;
};

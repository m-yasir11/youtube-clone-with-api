import axios from "axios";

const REACT_APP_RAPID_API_KEY =
  "3479189635msh45ebc896425c6eep155d2ejsn8e3ec375e289";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    part: "snippet,id",
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

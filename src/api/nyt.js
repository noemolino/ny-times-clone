import axios from "axios";

const API_KEY = import.meta.env.VITE_NYT_API_KEY;

const api = axios.create({
  baseURL: "https://api.nytimes.com/svc",
});

export const getTopStories = async () => {
  const res = await api.get(`/topstories/v2/home.json?api-key=${API_KEY}`);
  return res.data.results;
};

export const searchArticles = async (query) => {
  const res = await api.get(`/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`);
  return res.data.response.docs;
};

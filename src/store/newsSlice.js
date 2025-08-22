import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopStories, searchArticles } from "../api/nyt";

export const fetchNews = createAsyncThunk("news/fetch", async (query) => {
  if (query === "home") {
    return await getTopStories();
  } else {
    return await searchArticles(query);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState: { articles: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = "Errore nel caricamento";
      });
  },
});

export default newsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ICharacterState, ToggleWatchlistAction, setParamsAction, setPageAction } from "../types";

const WATCHLIST_STORAGE_KEY = '@RickAndMorty:watchlist';

const initialState: ICharacterState = {
  watchlist: JSON.parse(localStorage.getItem(WATCHLIST_STORAGE_KEY) || '[]'),
  page: 1,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setParams: (state, action: setParamsAction) => {
      state.params = action.payload;
    },
    setPage: (state, action: setPageAction) => {
      state.page = action.payload;
    },
    toggleWatchlist: (state, action: ToggleWatchlistAction) => {
      const { watchlist } = state;
      const character = action.payload;
      const isOnWatchlist = watchlist.find((item) => item.id === character.id);

      if (isOnWatchlist) {
        state.watchlist = watchlist.filter((item) => item.id !== character.id);
      } else {
        state.watchlist = [...watchlist, character];
      }
      localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(state.watchlist));
    }
  },
});

export default characterSlice;


import { RootState } from '../..';
import characterSlice from './characterSlice';

export const selectWatchlist = (state: RootState) => state.character.watchlist;
export const selectParams = (state: RootState) => state.character.params;
export const selectPage = (state: RootState) => state.character.page;

export const { toggleWatchlist, setParams, setPage } = characterSlice.actions;
export const characterReducer = characterSlice.reducer;
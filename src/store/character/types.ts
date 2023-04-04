import { PayloadAction } from "@reduxjs/toolkit";

export interface ICharacterState {
  watchlist: CharacterType[];
  page: number;
  params?: getCharacterParams;
}

export type getCharacterParams = {
  page?: number;
  name?: string;
  status?: string;
  gender?: string;
  species?: string;
};

export interface CharacterType {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Location {
  name: string
  url: string
}

export interface Origin {
  name: string
  url: string
}

export type ToggleWatchlistAction = PayloadAction<CharacterType>;

export type IsInWatchlistAction = PayloadAction<CharacterType>;

export type setParamsAction = PayloadAction<getCharacterParams>;

export type setPageAction = PayloadAction<number>;
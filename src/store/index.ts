import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit";
import { characterApi } from "./character/api";
import { characterReducer } from "./character/slice";

const rootReducer = combineReducers({
  character: characterReducer,
  [characterApi.reducerPath]: characterApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(characterApi.middleware),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
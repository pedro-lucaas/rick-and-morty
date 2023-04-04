import { Route, Routes, Outlet, Navigate } from "react-router-dom";

import { DefaultLayout } from "../layout/DefaultLayout";

import { CharacterDetails } from "../pages/CharacterDetails";
import { Characters } from "../pages/Characters";
import { Watchlist } from "../pages/Watchlist";

import { routes } from "./routes";

export function Router() {
  return (<>
    <Routes>
      <Route element={<DefaultLayout children={<Outlet />} />}>
        <Route path={routes.CHARACTERS} element={<Characters />} />
        <Route path={routes.WATCHLIST} element={<Watchlist />} />
        <Route path={routes.CHARACTERS_DETAILS} element={<CharacterDetails />} />
      </Route>
      <Route path="/" element={<Navigate to={routes.CHARACTERS} />} />
    </Routes>
  </>
  );
}

import { useAppSelector } from "../../../hooks";
import { selectWatchlist } from "../../slice";

const useIsWatchlist = (characterId?: number): boolean => {
  const watchlist = useAppSelector(selectWatchlist)

  if (!characterId) return false;

  return !!watchlist.find((item) => item.id === characterId);
};

export default useIsWatchlist;
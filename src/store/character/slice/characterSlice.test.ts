import { characterReducer, setPage, setParams, toggleWatchlist } from '.';
import { makeCharacter } from '../../../test/factory/makeCharacters';

const character = makeCharacter()

describe('characterSlice', () => {
  describe('reducer', () => {
    it('should handle initial state', () => {
      const nextState = characterReducer(undefined, { type: 'unknown' });
      const expectedState = {
        watchlist: [],
        page: 1,
      };

      expect(nextState).toEqual(expectedState);
    });

    it('should handle setParams', () => {
      const initialState = {
        watchlist: [],
        page: 1,
      };
      const nextState = characterReducer(
        initialState,
        setParams({ name: 'Rick' })
      );
      const expectedState = {
        watchlist: [],
        page: 1,
        params: { name: 'Rick' },
      };

      expect(nextState).toEqual(expectedState);
    });

    it('should handle setPage', () => {
      const initialState = {
        watchlist: [],
        page: 1,
      };
      const nextState = characterReducer(initialState, setPage(2));
      const expectedState = {
        watchlist: [],
        page: 2,
      };

      expect(nextState).toEqual(expectedState);
    });

    it('should handle toggleWatchlist', () => {
      const initialState = {
        watchlist: [],
        page: 1,
      };
      const nextState = characterReducer(
        initialState,
        toggleWatchlist(character)
      );
      const expectedState = {
        watchlist: [character],
        page: 1,
      };

      expect(nextState).toEqual(expectedState);
    });
  });
});
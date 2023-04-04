import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import '../../../__mocks__/intersectionObserverMock.js'

import { makeCharacter } from '../../test/factory/makeCharacters';

import Card from "./Card";

const renderComponent = (character: any) => {
  renderWithProviders(<Card character={character} />, {
    preloadedState: {
      character: {
        watchlist: [character],
        page: 1,
      },
    }
  });
}

describe('<Card />', () => {
  it('should render the component', () => {
    const character = makeCharacter()
    renderComponent(character);

    expect(screen.getByText(character.name)).toBeInTheDocument();
  });
});
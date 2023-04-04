import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  it('should render the component', () => {
    render(<Pagination currentPage={2} totalPages={3} setPage={() => { }} />);

    // expect(screen.getByText('1')).toBeInTheDocument();
    // expect(screen.getByText('2')).toBeInTheDocument();
    // expect(screen.getByText('3')).toBeInTheDocument();

    // expect(screen.getByText('de 3')).toBeInTheDocument();

    // const pageItems = screen.getAllByRole('listitem');
    // expect(pageItems).toHaveLength(3);

    const arrowButtons = screen.getAllByRole('button');
    expect(arrowButtons).toHaveLength(2);
  });
});
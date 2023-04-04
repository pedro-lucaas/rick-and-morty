import { render, screen } from '@testing-library/react';
import ErrorComponent from "./ErrorComponent";

describe('<ErrorComponent />', () => {
  it('should render the component', () => {
    render(<ErrorComponent name='Error' message='Something went wrong' />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
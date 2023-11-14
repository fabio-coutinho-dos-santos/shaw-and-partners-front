/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('should show Header Text', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Header')).toBeInTheDocument();
  });
});

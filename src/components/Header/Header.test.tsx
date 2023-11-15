/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('should contains text and icon', () => {
    const { getByText, getByRole } = render(<Header />);
    expect(getByRole('github-icon')).toBeInTheDocument();
    expect(getByText('Shaw and Partners')).toBeInTheDocument();
  });
});

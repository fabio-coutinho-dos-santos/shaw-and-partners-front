import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should show the footer dafault text', () => {
    render(<Footer />);
    expect(screen.getByText('Desenvolvido por Fabio Coutinho | Todos os direitos reservados')).toBeInTheDocument();
  });
});

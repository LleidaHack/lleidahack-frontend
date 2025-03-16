

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'src/pages/hackeps/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home - Render', () => {
  test(`renders without crashing + header and footer.`, async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Verifica que tengamos el footer y el header
    expect(await screen.findByTestId('footerHackeps')).toBeInTheDocument();
    expect(await screen.findByTestId('headerHackeps')).toBeInTheDocument();
  });
});
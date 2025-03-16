import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from 'src/pages/hackeps/Login';
import { MemoryRouter, useLocation } from 'react-router-dom';
  
describe('Login - Render', () => { 
    test(`renders without crashing + header and footer.`, async () => {
      useLocation.mockReturnValue({
          state: {
            fakevalue: 'fakevalue',
          },
      });

      render(
          <MemoryRouter>
              <Login />
          </MemoryRouter>
      );

      // Verifica que tengamos el footer y el header
      const footerElement = screen.getByTestId('footerHackeps');
      expect(footerElement).toBeInTheDocument();
      const headerElement = screen.getByTestId('headerHackeps');
      expect(headerElement).toBeInTheDocument();
    });
});
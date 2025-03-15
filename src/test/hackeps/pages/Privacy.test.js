import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Privacy from 'src/pages/hackeps/Privacy';
import { MemoryRouter } from 'react-router-dom';


  
describe('Error404 - Render', () => { 

    test(`renders without crashing + header and footer.`, async () => {
      await act(async () => {
          render(
              <MemoryRouter>
                  <Privacy />
              </MemoryRouter>
          );
      });
      // Verifica que tengamos el footer y el header
      const footerElement = screen.getByTestId('footerHackeps');
      expect(footerElement).toBeInTheDocument();
      const headerElement = screen.getByTestId('headerHackeps');
      expect(headerElement).toBeInTheDocument();
    });
});
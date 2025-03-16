import React from 'react';
import { render, screen, act } from '@testing-library/react';
import FAQPage from 'src/pages/hackeps/FAQ';
import { MemoryRouter } from 'react-router-dom';
  
describe('Error404 - Render', () => { 
    test(`renders without crashing + header and footer.`, async () => {
      await act(async () => { 
          render(
              <MemoryRouter>
                  <FAQPage />
              </MemoryRouter>
          );
      });
      
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);

      // Verifica que tengamos el footer y el header
      const footerElement = screen.getByTestId('footerHackeps');
      expect(footerElement).toBeInTheDocument();
      const headerElement = screen.getByTestId('headerHackeps');
      expect(headerElement).toBeInTheDocument();
    });
});
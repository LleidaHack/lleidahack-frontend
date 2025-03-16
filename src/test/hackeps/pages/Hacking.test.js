import React from 'react';
import { render } from '@testing-library/react';
import Hacking from 'src/pages/hackeps/Hacking';
import { MemoryRouter } from 'react-router-dom';
  
describe('Hacking - Render', () => { 
    test(`renders without crashing + header and footer.`, async () => {
      render(
          <MemoryRouter>
              <Hacking />
          </MemoryRouter>
      );
    });
});
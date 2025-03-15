jest.mock('src/services/EventService', () => ({
  getHackeps: jest.fn(async () => ({
    start_date: "2025-11-22T13:00:26.478000",
    end_date: "2025-11-23T19:12:26.478000",
  })),
}));

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from 'src/pages/hackeps/Home';
import { MemoryRouter } from 'react-router-dom';
import { getHackeps } from "src/services/EventService";


beforeEach(() => {
  jest.clearAllMocks();
});


describe('Home - Render', () => { 

    test(`renders without crashing + header and footer.`, async () => {
      
      console.log("getHackeps en test:", getHackeps);
      console.log("Mock implementation:", getHackeps.mock);
      await act(async () => {
        console.log(getHackeps.mock);
          render(
              <MemoryRouter>
                  <Home />
              </MemoryRouter>
          );
      });

      expect(getHackeps).toHaveBeenCalled();
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
      // Verifica que tengamos el footer y el header
      expect(await screen.findByTestId('footerHackeps')).toBeInTheDocument();
      expect(await screen.findByTestId('headerHackeps')).toBeInTheDocument();
    });
});
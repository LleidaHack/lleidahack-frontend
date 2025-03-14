//This test would get if all pages are rendered correctly. 
//Also would check if all pages have header and footer.

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConfirmAssistancePage from 'src/pages/hackeps/Confirm';
import { MemoryRouter } from 'react-router-dom';
import { confirmAssistance } from 'src/services/EventService';
import { useLocation } from 'react-router-dom';

//Mock user location
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(),
}));

//Mock EventService confirmAssistance
jest.mock('src/services/EventService', () => ({
    ...jest.requireActual('src/services/EventService'),
    confirmAssistance: jest.fn(),
}));
  
describe('ConfirmAssistancePage - Render', () => { 
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test(`renders without crashing + header and footer.`, async () => {
        
        useLocation.mockReturnValue({
            state: {
                confirm: 'false',
                token: 'abc123',
            },
        });

        await act(async () => {
            render(
                <MemoryRouter>
                    <ConfirmAssistancePage />
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

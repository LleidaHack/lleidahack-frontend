//This test would get if all pages are rendered correctly. 
//Also would check if all pages have header and footer.

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ConfirmAssistancePage from 'src/pages/hackeps/Confirm';
import { MemoryRouter, useLocation } from 'react-router-dom';


  
describe('ConfirmAssistancePage - Render', () => { 
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

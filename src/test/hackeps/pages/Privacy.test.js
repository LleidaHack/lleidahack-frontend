import React from 'react';
import { render, screen } from '@testing-library/react';
import Privacy from 'src/pages/hackeps/Privacy';
import { MemoryRouter } from 'react-router-dom';

describe('Privacy - Render', () => { 
    test(`renders without crashing + header and footer.`, async () => {
        render(
            <MemoryRouter>
                <Privacy />
            </MemoryRouter>
        );
        // Verifica que tengamos el footer y el header
        const footerElement = screen.getByTestId('footerHackeps');
        expect(footerElement).toBeInTheDocument();
        const headerElement = screen.getByTestId('headerHackeps');
        expect(headerElement).toBeInTheDocument();
    });
});
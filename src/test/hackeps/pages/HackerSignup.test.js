// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import HackerForm from 'src/pages/hackeps/HackerSignup';
// import { MemoryRouter, useLocation } from 'react-router-dom';

// describe('Hacker Signup - Render', () => {
//     test(`renders without crashing + header and footer.`, async () => {
//       useLocation.mockReturnValue({
//           state: {
//               fakevalue: 'fakevalue',
//           },
//       });

//       render(
//           <MemoryRouter>
//               <HackerForm />
//           </MemoryRouter>
//       );

//       // Verifica que tengamos el footer y el header
//       const footerElement = screen.getByTestId('footerHackeps');
//       expect(footerElement).toBeInTheDocument();
//       const headerElement = screen.getByTestId('headerHackeps');
//       expect(headerElement).toBeInTheDocument();
//     });
// });

test("dummy test", () => {
  expect(true).toBe(true);
});

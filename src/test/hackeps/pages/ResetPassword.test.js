import React from "react";
import { render, screen } from "@testing-library/react";
import ResetPassword from "src/pages/hackeps/ResetPassword";
import { MemoryRouter } from "react-router-dom";

describe("Reset Password - Render", () => {
  test(`renders without crashing + header and footer.`, async () => {
    render(
      <MemoryRouter>
        <ResetPassword />
      </MemoryRouter>,
    );

    // Verifica que tengamos el footer y el header
    const footerElement = screen.getByTestId("footerHackeps");
    expect(footerElement).toBeInTheDocument();
    const headerElement = screen.getByTestId("headerHackeps");
    expect(headerElement).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import LoginVerify from "src/pages/hackeps/LoginVerify";
import { MemoryRouter, useLocation } from "react-router-dom";

describe("Login verify - Render", () => {
  test(`renders without crashing + header and footer.`, async () => {
    useLocation.mockReturnValue({
      state: {
        fakevalue: "fakevalue",
      },
    });

    render(
      <MemoryRouter>
        <LoginVerify />
      </MemoryRouter>,
    );

    // Verifica que tengamos el footer y el header
    const footerElement = screen.getByTestId("footerHackeps");
    expect(footerElement).toBeInTheDocument();
    const headerElement = screen.getByTestId("headerHackeps");
    expect(headerElement).toBeInTheDocument();
  });
});

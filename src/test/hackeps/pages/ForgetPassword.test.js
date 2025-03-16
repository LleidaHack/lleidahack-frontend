import React from "react";
import { render, screen } from "@testing-library/react";
import ForgetPassword from "src/pages/hackeps/ForgetPassword";
import { MemoryRouter, useLocation } from "react-router-dom";

describe("Forget Password - Render", () => {
  test(`renders without crashing + header and footer.`, async () => {
    useLocation.mockReturnValue({
      state: {
        fakevalue: "fakevalue",
      },
    });

    render(
      <MemoryRouter>
        <ForgetPassword />
      </MemoryRouter>,
    );

    // Verifica que tengamos el footer y el header
    const footerElement = screen.getByTestId("footerHackeps");
    expect(footerElement).toBeInTheDocument();
    const headerElement = screen.getByTestId("headerHackeps");
    expect(headerElement).toBeInTheDocument();
  });
});

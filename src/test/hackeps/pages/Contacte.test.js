import React from "react";
import { render, screen } from "@testing-library/react";
import Contacte from "src/pages/hackeps/Contacte";
import { MemoryRouter } from "react-router-dom";

describe("Contacte - Render", () => {
  test(`renders without crashing + header and footer.`, async () => {
    render(
      <MemoryRouter>
        <Contacte />
      </MemoryRouter>,
    );

    // Verifica que tengamos el footer y el header
    const footerElement = screen.getByTestId("footerHackeps");
    expect(footerElement).toBeInTheDocument();
    const headerElement = screen.getByTestId("headerHackeps");
    expect(headerElement).toBeInTheDocument();
  });
});

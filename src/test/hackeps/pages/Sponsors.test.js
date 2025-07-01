import React from "react";
import { render, screen } from "@testing-library/react";
import Sponsors from "src/pages/hackeps/Sponsors";
import { MemoryRouter } from "react-router-dom";

describe("Sponsors - Render", () => {
  test(`renders without crashing + header and footer.`, async () => {
    render(
      <MemoryRouter>
        <Sponsors />
      </MemoryRouter>,
    );

    // Verifica que tengamos el footer y el header
    const footerElement = screen.getByTestId("footerHackeps");
    expect(footerElement).toBeInTheDocument();
    const headerElement = screen.getByTestId("headerHackeps");
    expect(headerElement).toBeInTheDocument();
  });
});

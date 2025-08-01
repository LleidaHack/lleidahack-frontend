import React from "react";
import { render, screen } from "@testing-library/react";
import Error404 from "src/pages/hackeps/Error404";
import { MemoryRouter } from "react-router-dom";

describe("Error404 - Render", () => {
  test(`renders without crashing + header and footer.`, async () => {
    render(
      <MemoryRouter>
        <Error404 />
      </MemoryRouter>,
    );

    // Verifica que tengamos el footer y el header
    const footerElement = screen.getByTestId("footerHackeps");
    expect(footerElement).toBeInTheDocument();
    const headerElement = screen.getByTestId("headerHackeps");
    expect(headerElement).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import EntrancePage from "src/pages/hackeps/UsersEntrance";
import { MemoryRouter, useLocation } from "react-router-dom";

describe("User Entrance - Render", () => {
  test(`renders without crashing + header and footer.`, async () => {
    useLocation.mockReturnValue({
      state: {
        fakevalue: "fakevalue",
      },
    });

    render(
      <MemoryRouter>
        <EntrancePage />
      </MemoryRouter>,
    );

    // Verifica que tengamos el footer y el header
    const footerElement = screen.getByTestId("footerHackeps");
    expect(footerElement).toBeInTheDocument();
    const headerElement = screen.getByTestId("headerHackeps");
    expect(headerElement).toBeInTheDocument();
  });
});

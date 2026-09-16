import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginUnverified from "./LoginUnverified";
import { localVerificationAvailable, verifyLocalAccount } from "src/services/AuthenticationService";
jest.mock("src/services/AuthenticationService", () => ({
  resendVerification: jest.fn(),
  localVerificationAvailable: jest.fn(),
  verifyLocalAccount: jest.fn(),
}));

test("local button verifies and displays the login action", async () => {
  localVerificationAvailable.mockResolvedValue(true);
  verifyLocalAccount.mockResolvedValue({success: true});
  render(<MemoryRouter><LoginUnverified email="test@example.test" /></MemoryRouter>);
  fireEvent.click(await screen.findByText("Verificar compte de prova"));
  await waitFor(() => expect(verifyLocalAccount).toHaveBeenCalledWith("test@example.test"));
  expect(await screen.findByRole("status")).toHaveTextContent("Compte verificat");
  expect(screen.getByText("Inicia sessió")).toBeInTheDocument();
});
test("normal backend does not offer a verification bypass", async () => {
  localVerificationAvailable.mockResolvedValue(false);
  render(<MemoryRouter><LoginUnverified email="test@example.test" /></MemoryRouter>);
  await waitFor(() => expect(localVerificationAvailable).toHaveBeenCalled());
  expect(screen.queryByText("Verificar compte de prova")).not.toBeInTheDocument();
});

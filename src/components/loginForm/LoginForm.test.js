import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { login } from "src/services/AuthenticationService";
import LoginForm from "./LoginForm";

jest.mock("src/services/AuthenticationService", () => ({ login: jest.fn() }));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

async function submit(result) {
  login.mockResolvedValue(result);
  render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>,
  );
  fireEvent.change(screen.getByPlaceholderText("Correu"), {
    target: { value: "person@example.test" },
  });
  fireEvent.change(screen.getByPlaceholderText("Contrasenya"), {
    target: { value: "Password123" },
  });
  fireEvent.submit(screen.getByPlaceholderText("Correu").closest("form"));
  await waitFor(() => expect(login).toHaveBeenCalled());
}

let navigate;
beforeEach(() => {
  jest.clearAllMocks();
  navigate = jest.fn();
  useNavigate.mockReturnValue(navigate);
});

test("unverified account opens verification without logging in", async () => {
  await submit({ errCode: 401, errorCode: "EMAIL_NOT_VERIFIED" });
  await waitFor(() =>
    expect(navigate).toHaveBeenCalledWith("/user-verification", {
      state: { email: "person@example.test" },
    }),
  );
  expect(screen.getByRole("alert")).not.toHaveTextContent("incorrectes");
});
test("bad password stays on login even with a stale token", async () => {
  localStorage.setItem("userToken", "old-token");
  await submit({ errCode: 401 });
  await waitFor(() =>
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Contrasenya o correu incorrectes",
    ),
  );
  expect(navigate).not.toHaveBeenCalled();
});
test("rate limit explains that the user must wait", async () => {
  await submit({ errCode: 429 });
  await waitFor(() =>
    expect(screen.getByRole("alert")).toHaveTextContent("Massa intents"),
  );
  expect(navigate).not.toHaveBeenCalled();
});
test("successful login navigates home", async () => {
  await submit({ access_token: "new-token" });
  await waitFor(() => expect(navigate).toHaveBeenCalledWith("/home"));
});

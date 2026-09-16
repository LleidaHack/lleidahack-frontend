import { fetchPlus } from "src/modules/fetchModule";

export async function login(user) {
  return fetchPlus({
    Url: "/auth/login",
    loginAuth: user,
    saveLoginInfo: true,
  });
}

export async function resetPassword(e_mail) {
  return fetchPlus({
    Url: "/auth/reset-password",
    Method: "POST",
    Query: { email: e_mail },
  });
}

export async function confirmResetPassword(Token, Password) {
  return fetchPlus({
    Url: "/auth/confirm-reset-password",
    Method: "POST",
    Query: {
      token: Token,
      password: Password,
    },
  });
}

export async function refreshToken() {
  return fetchPlus({
    Url: "/auth/refresh-token",
    Method: "POST",
    saveLoginInfo: true,
    refresh_token: true,
  });
}

export async function me() {
  return fetchPlus({
    Url: "/auth/me",
    hasUserauth: true,
  });
}

export async function verify(Token) {
  return fetchPlus({
    Url: "/auth/verify",
    Method: "POST",
    Query: { token: Token },
  });
}

export async function resendVerification(e_mail) {
  return fetchPlus({
    Url: "/auth/resend-verification",
    Method: "POST",
    Query: { email: e_mail },
  });
}

export async function checkToken() {
  return fetchPlus({
    Url: "/auth/check_token",
    hasUserauth: true,
  });
}

export async function contacte(mail) {
  return fetchPlus({
    Url: "/auth/contact",
    Method: "POST",
    Body: mail,
  });
}

export async function localVerificationAvailable() {
  if (
    !["localhost", "127.0.0.1", "::1", "[::1]"].includes(
      window.location.hostname,
    )
  ) {
    return false;
  }
  const response = await fetchPlus({ Url: "/auth/local-verification" });
  return response.enabled === true;
}

export async function verifyLocalAccount(email) {
  return fetchPlus({
    Url: "/auth/local-verification",
    Method: "POST",
    Body: { email },
  });
}

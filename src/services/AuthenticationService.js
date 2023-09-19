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
    Query: { refresh_token: localStorage.getItem("refreshToken") },
    saveLoginInfo: true,
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

export async function verify(token) {
  return fetch(process.env.REACT_APP_DOMAIN + "/auth/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: { token: token } }),
  })
    .then((response) => response.status === 200)
    .catch((error) => {
      console.warn(error);
      return false;
    });
}

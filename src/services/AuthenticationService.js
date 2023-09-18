import { fetchPlus } from "src/modules/fetchModule";

export async function login(user) {
  return fetchPlus({
    Url: "/auth/login",
    loginAuth: user,
    saveLoginInfo: true
  });
}

export async function resetPassword(e_mail) {
  return fetchPlus({
    Url: "/auth/reset-password",
    Method: "POST",
    Querry: {email: e_mail},
  });
}

export async function resetPassword(Token, Password) {
  return fetchPlus({
    Url: "/auth/confirm-reset-password",
    Method: "POST",
    Querry: {
      token: Token,
      password: Password
    }
  });
}

export async function refreshToken() {
  return fetchPlus({
    Url: "/auth/refresh-token",
    Method: "POST",
    Querry: {refresh_token: localStorage.getItem("refreshToken")},
    saveLoginInfo: true
  });
}

export async function me() {
  return fetchPlus({
    Url: "/auth/me",
    hasUserauth: true
  })
}

export async function verify(Token) {
  return fetchPlus({
    Url: "/auth/verify",
    Method: "POST",
    Querry: {token: Token}
  });
}

export async function resendVerification(e_mail) {
  return fetchPlus({
    Url: "/auth/resend-verification",
    Method: "POST",
    Querry: {email: e_mail},
  })
}

export async function checkToken() {
  return fetchPlus({
    Url: "/auth/check_token",
    hasUserauth: true
  })
}
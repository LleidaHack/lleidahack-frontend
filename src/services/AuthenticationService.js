import { fetchPlus } from "src/modules/fetchModule";

export async function login(user) {
  return fetchPlus({
    Url: "/login",
    loginAuth: user,
    saveLoginInfo: true
  });
}

export async function refreshToken() {
  return fetchPlus({
    Url: "/refresh-token",
    Method: "POST",
    Querry: {refresh_token: localStorage.getItem("refreshToken")},
    saveLoginInfo: true
  });
}

export async function confirmEmail(e_mail) {
  return fetchPlus({
    Url: "/confirm-email",
    Method: "POST",
    Querry: {email: e_mail},
  })
}

export async function me() {
  return fetchPlus({
    Url: "/me",
    Method: "POST",
    hasUserauth: true
  })
}

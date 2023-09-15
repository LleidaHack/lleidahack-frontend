import { encode as btoa } from "base-64";

export async function login(user) {
  return fetch(process.env.REACT_APP_DOMAIN + "/login", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${user.email}:${user.password}`),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("response: ", data);
      localStorage.setItem("userToken", data.access_token);
      localStorage.setItem("userID", data.user_id);
      localStorage.setItem("refreshToken", data.refresh_token);
      return data
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
}

export async function refreshToken() {
  return fetch(process.env.REACT_APP_DOMAIN + `/refresh_token?refresh_token=${localStorage.getItem("refreshToken")}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("response: ", data);
      localStorage.setItem("userToken", data.access_token);
      localStorage.setItem("userID", data.user_id);
      localStorage.setItem("refreshToken", data.refresh_token);
      return data
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
}

export async function confirmEmail(e_mail) {
  return fetch(process.env.REACT_APP_DOMAIN + `/confirm-email?email=${e_mail}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("response: ", data);
      return data
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
}

export async function me() {
  return fetch(process.env.REACT_APP_DOMAIN + "/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("response: ", data);
      return data
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
}

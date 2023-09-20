import { Navigate } from "react-router-dom";
import { mostrarPopupHandler } from "src/modules/emmiterModule";

export async function fetchPlus({
  Url,
  Method = "GET",
  Body,
  Query,
  hasUserauth = false,
  saveLoginInfo = false,
  nextScreen,
  loginAuth,
  ignorePoppup = false,
  debugging = false,
}) {
  const headers = { "Content-Type": "application/json" };
  if (hasUserauth || loginAuth)
    headers.Authorization = loginAuth
      ? "Basic " + btoa(`${loginAuth.email}:${loginAuth.password}`)
      : "Bearer " + localStorage.getItem("userToken");
  const args = {
    method: Method,
    headers: headers,
  };
  if (Body) args.body = JSON.stringify(Body);
  let query = "";
  if (Query)
    query = `?${Object.entries(Query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`;
  if (debugging) console.log("headers: ", args);
  return fetch(process.env.REACT_APP_DOMAIN + Url + query, args)
    .then((response) => {
      if (debugging) console.log("response: ", response);
      if (hasUserauth && response.status === 403 && !ignorePoppup)
        mostrarPopupHandler();
      return response.json();
    })
    .then((data) => {
      if (debugging) console.log("data: ", data);
      if (saveLoginInfo) {
        localStorage.setItem("userToken", data.access_token);
        localStorage.setItem("userID", data.user_id);
        localStorage.setItem("refreshToken", data.refresh_token);
      }
      if (nextScreen) Navigate(nextScreen);
      return data;
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
}

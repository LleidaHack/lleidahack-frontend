import { Navigate } from "react-router-dom";

export async function fetchPlus({
  Url,
  Method = "GET",
  Body,
  Query,
  hasUserauth = false,
  saveLoginInfo = false,
  nextScreen,
  loginAuth
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
  if (process.env.REACT_APP_DEBUG === "true") console.log("headers: ", args);
  return fetch(process.env.REACT_APP_DOMAIN + Url + query, args)
    .then((response) => {
      if (process.env.REACT_APP_DEBUG === "true")
        console.log("response: ", response);
      return response.json();
    })
    .then((data) => {
      if (process.env.REACT_APP_DEBUG === "true") console.log("data: ", data);
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

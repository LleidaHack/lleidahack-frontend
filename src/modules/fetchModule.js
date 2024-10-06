export async function fetchPlus({
  Url,
  Method = "GET",
  Body,
  Query,
  hasUserauth = false,
  saveLoginInfo = false,
  refresh_token = false,
  loginAuth,
  apiVersion = 1,
  forceDebug = false,
}) {
  const headers = { "Content-Type": "application/json" };
  if (hasUserauth || refresh_token || loginAuth)
    headers.Authorization = loginAuth
      ? "Basic " + btoa(`${loginAuth.email}:${loginAuth.password}`)
      : hasUserauth
        ? "Bearer " + localStorage.getItem("userToken")
        : "Bearer " + localStorage.getItem("refreshToken");
  const args = {
    method: Method,
    headers: headers,
  };
  if (Body) args.body = JSON.stringify(Body);
  let query = "";
  if (Query)
    query = `?${Object.entries(Query)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join("&")}`;
  if (process.env.REACT_APP_DEBUG === "true" || forceDebug)
    console.log("headers: ", args);
  return fetch(
    process.env.REACT_APP_DOMAIN + `/v${apiVersion}` + Url + query,
    args,
  )
    .then(async (response) => {
      if (process.env.REACT_APP_DEBUG === "true" || forceDebug)
        console.log("response: ", response);
      if (!response.ok) {
        const error = await response.json();
        return {
          errCode: response.status,
          errMssg: error.message,
        };
      }
      return response.json();
    })
    .then((data) => {
      if (process.env.REACT_APP_DEBUG === "true" || forceDebug)
        console.log("data: ", data);
      if (saveLoginInfo) {
        localStorage.setItem("userToken", data.access_token);
        localStorage.setItem("userID", data.user_id);
        localStorage.setItem("refreshToken", data.refresh_token);
      }
      return data;
    })
    .catch((error) => {
      if (error.message.includes("Failed to fetch")) {
        return {
          errCode: -1,
          errMssg: "Network error or request failed",
        };
      }
      console.warn(error);
      return error;
    });
}

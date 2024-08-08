export async function fetchPlus({
  Url,
  Method = "GET",
  Body,
  Query,
  hasUserauth = false,
  saveLoginInfo = false,
  loginAuth,
  apiVersion = 1,
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

  return fetch(
    process.env.REACT_APP_DOMAIN + `/v${apiVersion}` + Url + query,
    args,
  )
    .then((response) => {
      if (process.env.REACT_APP_DEBUG === "true")
        console.log("response: ", response);
      if (!response.ok) {
        return response.json().then((error) => ({
          errCode: response.status,
          errMssg: error,
        }));
      }
      return response.json();
    })
    .then((data) => {
      if (process.env.REACT_APP_DEBUG === "true") console.log("data: ", data);
      if (saveLoginInfo) {
        localStorage.setItem("userToken", data.access_token);
        localStorage.setItem("userID", data.user_id);
        localStorage.setItem("refreshToken", data.refresh_token);
      }
      return data;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

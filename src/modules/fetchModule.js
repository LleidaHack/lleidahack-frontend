function b64EncodeUnicode(str) {
  return btoa(
    encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode("0x" + p1);
      },
    ),
  );
}

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
  token,
  forceDebug = false,
}) {
  const headers = { "Content-Type": "application/json" };
  if (hasUserauth || refresh_token || loginAuth || token)
    headers.Authorization = loginAuth
      ? "Basic " + b64EncodeUnicode(`${loginAuth.email}:${loginAuth.password}`)
      : "Bearer " + hasUserauth
        ? localStorage.getItem("userToken")
        : refresh_token 
          ? localStorage.getItem("refreshToken")
          : token
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

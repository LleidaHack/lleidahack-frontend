export async function getPendingGroups() {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/1/pendinggruped`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("response: ", data);
      return data;
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
}

export async function accept(id) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/1/accept/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    }
  )
    .then((response) => {
      console.log(response);
      return response.status === 200;
    })
    .catch((error) => {
      console.warn(error);
      return false;
    });
}

export async function reject(id) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/1/reject/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    }
  )
    .then((response) => {
      return response.status === 200;
    })
    .catch((error) => {
      console.warn(error);
      return false;
    });
}

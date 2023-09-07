export async function sendMail(to, content) {
  return fetch(process.env.REACT_APP_DOMAIN + `/utils/send-email/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: to,
      template: content,
    },
  })
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

/*export async function uploadImage(image) {
  return fetch(process.env.REACT_APP_DOMAIN + "/utils/uploadImage", {
    method: "POST",
    headers: {
      "Content-Type": "image/jpeg",
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    body: image,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("response: ", data);
      localStorage.setItem("userToken", data.access_token);
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
}

export async function getImage(id) {
  return fetch(process.env.REACT_APP_DOMAIN + `/utils/imageUrl/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("response: ", data);
      return data;
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
}*/

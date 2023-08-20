export async function signupLleidaHacker(lleidaHacker) {
  return fetch("https://backend.lleidahack.dev/lleidahacker/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lleidaHacker),
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

export async function getAllLleidaHackers() {
  return fetch("https://backend.lleidahack.dev/lleidahacker/all", {
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
}

export async function getLleidaHackerById(lleidaHacker_id) {
  return fetch(
    `https://backend.lleidahack.dev/lleidahacker/${lleidaHacker_id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    },
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

export async function updateLleidaHacker(lleidaHacker) {
  return fetch(
    `https://backend.lleidahack.dev/lleidahacker/${lleidaHacker.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      body: JSON.stringify(lleidaHacker),
    },
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

export async function deleteLleidaHacker(lleidaHacker_id) {
  return fetch(
    `https://backend.lleidahack.dev/lleidahacker/${lleidaHacker_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    },
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

export async function addLleidaHacker(lleidaHacker) {
  return fetch("https://backend.lleidahack.dev/lleidahacker/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    body: JSON.stringify(lleidaHacker),
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

export async function signupHacker(hacker) {
  return fetch("https://backend.lleidahack.dev/hacker/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
    body: JSON.stringify(hacker),
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

export async function getAllHackers() {
  return fetch("https://backend.lleidahack.dev/hacker/all", {
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

export async function getHackerById(hacker_id) {
  return fetch(`https://backend.lleidahack.dev/hacker/${hacker_id}`, {
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

export async function updateHacker(hacker) {
  return fetch(`https://backend.lleidahack.dev/hacker/${hacker.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    body: JSON.stringify(hacker),
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

export async function addHacker(hacker) {
  return fetch("https://backend.lleidahack.dev/hacker/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
    body: JSON.stringify(hacker),
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

export async function banHackerById(hacker_id) {
  return fetch(`https://backend.lleidahack.dev/hacker/${hacker_id}/ban`, {
    method: "POST",
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

export async function unbanHackerById(hacker_id) {
  return fetch(`https://backend.lleidahack.dev/hacker/${hacker_id}/unban`, {
    method: "POST",
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

export async function deleteHacker(hacker_id) {
  return fetch(`https://backend.lleidahack.dev/hacker/${hacker_id}`, {
    method: "DELETE",
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

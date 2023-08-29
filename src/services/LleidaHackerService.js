export async function signupLleidaHacker(lleidaHacker) {
  return fetch(process.env.REACT_APP_DOMAIN + "/lleidahacker/signup", {
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
  return fetch(process.env.REACT_APP_DOMAIN + "/lleidahacker/all", {
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
    process.env.REACT_APP_DOMAIN + `/lleidahacker/${lleidaHacker_id}`,
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
    process.env.REACT_APP_DOMAIN + `/lleidahacker/${lleidaHacker.id}`,
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
    process.env.REACT_APP_DOMAIN + `/lleidahacker/${lleidaHacker_id}`,
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
  return fetch(process.env.REACT_APP_DOMAIN + "/lleidahacker/", {
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

export async function acceptLleidaHacker(lleidaHacker_id) {
  return fetch(process.env.REACT_APP_DOMAIN + `/lleidahacker/${lleidaHacker_id}/accept`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    }
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

export async function rejectLleidaHacker(lleidaHacker_id) {
  return fetch(process.env.REACT_APP_DOMAIN + `/lleidahacker/${lleidaHacker_id}/reject`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    }
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

export async function activateLleidaHacker(lleidaHacker_id) {
  return fetch(process.env.REACT_APP_DOMAIN + `/lleidahacker/${lleidaHacker_id}/activate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    }
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

export async function deactivateLleidaHacker(lleidaHacker_id) {
  return fetch(process.env.REACT_APP_DOMAIN + `/lleidahacker/${lleidaHacker_id}/deactivate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    }
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

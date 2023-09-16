export async function addDailyhack(event_id, hacker_id, url) {
  return fetch(
     process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/add_dailyhack/${hacker_id}?url=${url}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    },
  ).then((response) => response.json())
  .then((data) => {
    console.log("response: ", data);
    return(data)
    
  })
  .catch((error) => {
    console.warn(error);
    return [];
  });
}

export async function updateDailyhack(event_id, hacker_id, url) {
  return fetch(
    process.env.REACT_APP_DOMAIN +`/eventmanagment/${event_id}/update_dailyhack/${hacker_id}?url=${url}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    },
  ).then((response) => response.json())
  .then((data) => {
    console.log("response: ", data);
    return(data)
    
  })
  .catch((error) => {
    console.warn(error);
    return [];
  });
}

export async function getDailyhackById(event_id, hacker_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/dailyhack/${hacker_id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    },
  ).then((response) => response.json())
  .then((data) => {
    console.log("response: ", data);
    return(data)
    
  })
  .catch((error) => {
    console.warn(error);
    return [];
  });
}

export async function deleteDailyhack(event_id, hacker_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/dailyhack/${hacker_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    },
  ).then((response) => response.json())
  .then((data) => {
    console.log("response: ", data);
    return(data)
    
  })
  .catch((error) => {
    console.warn(error);
    return [];
  });
}

export async function getDailyhacks(event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/dailyhacks/`,
    process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/dailyhacks/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    },
  ).then((response) => response.json())
  .then((data) => {
    console.log("response: ", data);
    return(data)
    
  })
  .catch((error) => {
    console.warn(error);
    return [];
  });
}

export async function registerHackerToEvent(hacker_id, event_id, data) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/register/${hacker_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
      body: JSON.stringify(data),
    },
  ).then((response) => response.json())
  .then((data) => {
    console.log("response: ", data);
    return(data)
    
  })
  .catch((error) => {
    console.warn(error);
    return [];
  });
}

export async function unregisterHackerToEvent(hacker_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/unregister/${hacker_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("userToken"),
      },
    },
  ).then((response) => response.json())
  .then((data) => {
    console.log("response: ", data);
    return(data)
    
  })
  .catch((error) => {
    console.warn(error);
    return [];
  });
}

export async function participateHackerToEvent(hacker_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN +
      `/eventmanagment/${event_id}/participate/${hacker_id}`,
    {
      method: "PUT",
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

export async function unparticipateHackerToEvent(hacker_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN +
      `/eventmanagment/${event_id}/unparticipate/${hacker_id}`,
    {
      method: "PUT",
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

export async function acceptHackerToEvent(hacker_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN +
      `/eventmanagment/${event_id}/accept/${hacker_id}`,
    {
      method: "PUT",
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

export async function acceptGroupToEvent(group_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN +
      `/eventmanagment/${event_id}/acceptgroup/${group_id}`,
    {
      method: "PUT",
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

export async function rejectHackerToEvent(hacker_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN +
      `/eventmanagment/${event_id}/reject/${hacker_id}`,
    {
      method: "PUT",
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

export async function rejectGroupToEvent(group_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN +
      `/eventmanagment/${event_id}/rejectgroup/${group_id}`,
    {
      method: "PUT",
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

export async function getPendingHackers(event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/pending`,
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

export async function getPendingHackersGruped(event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/pendinggruped`,
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

export async function getRejectedHackers(event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/rejected`,
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

export async function getEventStatus(event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN + `/eventmanagment/${event_id}/status`,
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

export async function hackerEatsFoodFrom(hacker_id, meal_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN +
      `/eventmanagment/${event_id}/eat/${meal_id}/${hacker_id}`,
    {
      method: "PUT",
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

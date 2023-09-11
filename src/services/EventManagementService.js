export async function registerHackerToEvent(hacker_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN +
      `/eventmanagment/${event_id}/register/${hacker_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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

export async function unregisterHackerToEvent(hacker_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN +
      `/eventmanagment/${event_id}/unregister/${hacker_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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

export async function participateHackerToEvent(hacker_id, event_id) {
  return fetch(
    process.env.REACT_APP_DOMAIN +
      `/eventmanagment/${event_id}/participate/${hacker_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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

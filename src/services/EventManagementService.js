export async function registerHackerToEvent(hacker_id, event_id) {
  return fetch(
    `https://backend.lleidahack.dev/eventmanagment/${event_id}/register/${hacker_id}`,
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
    `https://backend.lleidahack.dev/eventmanagment/${event_id}/unregister/${hacker_id}`,
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

export async function getEventStatus(event_id) {
  return fetch(
    `https://backend.lleidahack.dev/eventmanagment/${event_id}/status`,
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
    `https://backend.lleidahack.dev/eventmanagment/${event_id}/eat/${meal_id}/${hacker_id}`,
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

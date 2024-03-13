import { fetchPlus } from "src/modules/fetchModule";

export async function addDailyhack(event_id, hacker_id, link) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/add_dailyhack/${hacker_id}`,
    Query: { url: link },
    Method: "POST",
    hasUserauth: true,
  });
}

export async function updateDailyhack(event_id, hacker_id, link) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/update_dailyhack/${hacker_id}`,
    Query: { url: link },
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function getDailyhackById(event_id, hacker_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/dailyhack/${hacker_id}`,
    hasUserauth: true,
  });
}

export async function deleteDailyhack(event_id, hacker_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/dailyhack/${hacker_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function getDailyhacks(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/dailyhacks/`,
    hasUserauth: true,
  });
}

export async function registerHackerToEvent(hacker_id, event_id, data) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/register/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: data,
  });
}

export async function unregisterHackerToEvent(hacker_id, event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/unregister/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function confirmAssistance(Token) {
  return fetchPlus({
    Url: `/eventmanagment/confirm-assistance`,
    Query: { token: Token },
  });
}

export async function participateHackerToEvent(hacker_id, event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/participate/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function unparticipateHackerToEvent(hacker_id, event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/unparticipate/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function acceptHackerToEvent(hacker_id, event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/accept/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function unacceptHackerToEventByMail(hacker_mail, event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/unaccept/${hacker_mail}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function acceptGroupToEvent(group_id, event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/acceptgroup/${group_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function rejectHackerToEvent(hacker_id, event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/reject/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function rejectGroupToEvent(group_id, event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/rejectgroup/${group_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function getPendingHackers(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/pending`,
    hasUserauth: true,
  });
}

export async function getPendingHackersGruped(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/pendinggruped`,
    hasUserauth: true,
  });
}

export async function getRejectedHackers(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/rejected`,
    hasUserauth: true,
  });
}

export async function getEventStatus(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/status`,
  });
}

export async function getFoodRestrictions(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/food_restrictions`,
  });
}

export async function hackerEatsFoodFrom(hacker_id, meal_id, event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/eat/${meal_id}/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function sendRemember(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/send_remember`,
    Method: "POST",
    hasUserauth: true,
  });
}

export async function sendDailyHack(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/send_dailyhack`,
    Method: "POST",
    hasUserauth: true,
  });
}

export async function getSizes(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/get_sizes`,
  });
}

export async function getUnregisteredHackers(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/get_unregistered_hackers`,
    hasUserauth: true,
  });
}

export async function countUnregisteredHackers(event_id) {
  return fetchPlus({
    Url: `/eventmanagment/${event_id}/count_unregistered_hackers`,
    hasUserauth: true,
  });
}

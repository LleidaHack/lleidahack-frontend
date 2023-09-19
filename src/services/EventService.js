import { fetchPlus } from "src/modules/fetchModule";

export async function getHackeps() {
  return fetchPlus({
    Url: "/event/get_hackeps",
    hasUserauth: true
  });
}

export async function getEvents() {
  return fetchPlus({
    Url: "/event/all",
    hasUserauth: true
  });
}

export async function getEventById(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}`,
    hasUserauth: true
  });
}

export async function updateEvent(event) {
  return fetchPlus({
    Url: `/event/${event.id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: event
  });
}

export async function deleteEvent(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}`,
    Method:"DELETE",
    hasUserauth: true
  });
}

export async function createEvent(event) {
  return fetchPlus({
    Url: "/event/",
    Method: "POST",
    hasUserauth: true,
    Body: event
  });
}

export async function getEventIsHackerRegistered(event_id, hacker_id) {
  return fetchPlus({
    Url: `/event/${event_id}/is_registered/${hacker_id}`,
    hasUserauth: true
  });
}

export async function getEventIsHackerAccepted(event_id, hacker_id) {
  return fetchPlus({
    Url: `/event/${event_id}/is_accepted/${hacker_id}`,
    hasUserauth: true
  });
}

export async function getEventMeals(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/meals`,
    hasUserauth: true
  });
}

export async function getEventParticipants(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/participants`,
    hasUserauth: true
  });
}

export async function getEventSponsors(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/sponsors`
  });
}

export async function getEventGroups(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/groups`,
    hasUserauth: true
  });
}

export async function addEventGroup(event_id, group_id) {
  return fetchPlus({
    Url: `/event/${event_id}/groups/${group_id}`,
    Method: "PUT",
    hasUserauth: true
  });
}

export async function removeEventGroup(event_id, group_id) {
  return fetchPlus({
    Url: `/event/${event_id}/groups/${group_id}`,
    Method: "DELETE",
    hasUserauth: true
  });
}

export async function addEventSponsor(event_id, company_id) {
  return fetchPlus({
    Url: `/event/${event_id}/sponsors/${company_id}`,
    Method: "PUT",
    hasUserauth: true
  });
}

export async function removeEventSponsor(event_id, company_id) {
  return fetchPlus({
    Url: `/event/${event_id}/sponsors/${company_id}`,
    Method: "DELETE",
    hasUserauth: true
  });
}



export async function getEventHackerGroup(event_id, hacker_id) {
  return fetchPlus({
    Url: `/event/${event_id}/get_hacker_group/${hacker_id}`,
    hasUserauth: true
  });
}

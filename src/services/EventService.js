import { fetchPlus } from "src/modules/fetchModule";

export async function getHackeps() {
  return fetchPlus({
    Url: "/event/get_hackeps",
  });
}

export async function getHackepsByYear(year) {
  return fetchPlus({
    Url: `/event/get_hackeps/${year}`,
  });
}

export async function getEvents() {
  return fetchPlus({
    Url: "/event/all",
    hasUserauth: true,
  });
}

export async function getEventById(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}`,
    hasUserauth: true,
  });
}

export async function updateEvent(event) {
  return fetchPlus({
    Url: `/event/${event.id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: event,
  });
}

export async function deleteEvent(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function createEvent(event) {
  return fetchPlus({
    Url: "/event/",
    Method: "POST",
    hasUserauth: true,
    Body: event,
  });
}

export async function getEventIsHackerRegistered(event_id, hacker_id) {
  return fetchPlus({
    Url: `/event/${event_id}/is_registered/${hacker_id}`,
    hasUserauth: true,
  });
}

export async function getEventIsHackerAccepted(event_id, hacker_id) {
  return fetchPlus({
    Url: `/event/${event_id}/is_accepted/${hacker_id}`,
    hasUserauth: true,
  });
}

export async function getEventHasHackerConfirmed(event_id, hacker_id) {
  return fetchPlus({
    Url: `/event/${event_id}/has_confirmed/${hacker_id}`,
    hasUserauth: true,
  });
}

export async function getHackerIsParticipant(event_id, hacker_id) {
  return fetchPlus({
    Url: `/event/${event_id}/is_participant/${hacker_id}`,
    hasUserauth: true,
  });
}

export async function getEventMeals(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/meals`,
    hasUserauth: true,
  });
}

export async function getEventParticipants(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/participants`,
    hasUserauth: true,
  });
}

export async function getEventSponsors(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/sponsors`,
  });
}

export async function getEventGroups(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/groups`,
    hasUserauth: true,
  });
}

export async function addEventGroup(event_id, group_id) {
  return fetchPlus({
    Url: `/event/${event_id}/groups/${group_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function removeEventGroup(event_id, group_id) {
  return fetchPlus({
    Url: `/event/${event_id}/groups/${group_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function registerHackerToEvent(event_id, hacker_id, data) {
  return fetchPlus({
    Url: `/event/${event_id}/register/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: data,
  });
}

export async function updateRregisterHackerToEvent(event_id, hacker_id, data) {
  return fetchPlus({
    Url: `/event/${event_id}/update-register/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: data,
  });
}

export async function addEventSponsor(event_id, company_id) {
  return fetchPlus({
    Url: `/event/${event_id}/sponsors/${company_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function removeEventSponsor(event_id, company_id) {
  return fetchPlus({
    Url: `/event/${event_id}/sponsors/${company_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function getAcceptedHackers(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/get_approved_hackers`,
    hasUserauth: true,
  });
}

export async function getAcceptedHackerMails(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/get_approved_hackers_mails`,
    hasUserauth: true,
  });
}

export async function getShirtSizes(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/get_sizes`,
  });
}

export async function getUnregisteredHackers(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/get_unregistered_hackers`,
    hasUserauth: true,
  });
}

export async function getUnregisteredHackersCount(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/count_unregistered_hackers`,
    hasUserauth: true,
  });
}

export async function confirmAssistance() {
  return fetchPlus({
    Url: `/event/confirm-assistance`,
    hasUserauth: true,
  });
}

export async function forceConfirmAssistance(event_id, user_id) {
  return fetchPlus({
    Url: `/event/force-confirm-assistance/${event_id}/${user_id}`,
    hasUserauth: true,
  });
}

export async function participateHackerToEvent(hacker_id, event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/participate/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function unparticipateHackerToEvent(hacker_id, event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/unparticipate/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function acceptHackerToEvent(hacker_id, event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/accept/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function rejectHackerToEvent(hacker_id, event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/reject/${hacker_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function acceptGroupToEvent(group_id, event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/acceptgroup/${group_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function rejectGroupToEvent(group_id, event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/rejectgroup/${group_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function getPendingHackers(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/pending`,
    hasUserauth: true,
  });
}

export async function getRejectedHackers(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/rejected`,
    hasUserauth: true,
  });
}

export async function getEventStatus(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/status`,
  });
}

export async function getFoodRestrictions(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/food_restrictions`,
  });
}

export async function getPendingHackersGruped(event_id) {
  return fetchPlus({
    Url: `/event/${event_id}/pendinggruped`,
    hasUserauth: true,
  });
}

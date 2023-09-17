import { fetchPlus } from "src/modules/fetchModule";

export async function signupHacker(hacker) {
  return fetchPlus({
    Url: "/hacker/signup",
    Method: "POST",
    Body: hacker,
    saveLoginInfo: true
  });
}

export async function getAllHackers() {
  return fetchPlus({
    Url: "/hacker/all",
    hasUserauth: true
  });
}

export async function getHackerById(hacker_id) {
  return fetchPlus({
    Url: `/hacker/${hacker_id}`,
    hasUserauth: true
  });
}

export async function updateHacker(hacker) {
  return fetchPlus({
    Url: `/hacker/${hacker.id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: hacker
  });
}

export async function banHackerById(hacker_id) {
  return fetchPlus({
    Url: `/hacker/${hacker_id}/ban`,
    Method: "POST",
    hasUserauth: true
  });
}

export async function unbanHackerById(hacker_id) {
  return fetchPlus({
    Url: `/hacker/${hacker_id}/unban`,
    Method: "POST",
    hasUserauth: true
  });
}

export async function deleteHacker(hacker_id) {
  return fetchPlus({
    Url: `/hacker/${hacker_id}`,
    Method: "DELETE",
    hasUserauth: true
  });
}

export async function getHackerEvents(hacker_id) {
  return fetchPlus({
    Url: `/hacker/${hacker_id}/events`,
    hasUserauth: true
  });
}

export async function getHackerGroups(hacker_id) {
  return fetchPlus({
    Url: `/hacker/${hacker_id}/groups`,
    hasUserauth: true
  });
}

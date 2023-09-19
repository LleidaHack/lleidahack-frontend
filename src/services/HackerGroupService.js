import { fetchPlus } from "src/modules/fetchModule";

export async function getAllHackerGroups() {
  return fetchPlus({
    Url: "/hacker/group/all",
    hasUserauth: true,
  });
}

export async function getHackerGroupById(hacker_group_id) {
  return fetchPlus({
    Url: `/hacker/group/${hacker_group_id}`,
    hasUserauth: true,
  });
}

export async function updateHackerGroup(hacker_group) {
  return fetchPlus({
    Url: `/hacker/group/${hacker_group.id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: hacker_group,
  });
}

export async function deleteHackerGroup(hacker_group_id) {
  return fetchPlus({
    Url: `/hacker/group/${hacker_group_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function addHackerGroup(hacker_group) {
  return fetchPlus({
    Url: "/hacker/group/",
    Method: "POST",
    hasUserauth: true,
    Body: hacker_group,
  });
}

export async function getHackerGroupMembers(hacker_group_id) {
  return fetchPlus({
    Url: `/hacker/group/${hacker_group_id}/members`,
    hasUserauth: true,
  });
}

export async function addHackerToGroup(hacker_id, hacker_group_id) {
  return fetchPlus({
    Url: `/hacker/group/${hacker_group_id}/members/${hacker_id}`,
    Method: "POST",
    hasUserauth: true,
  });
}

export async function removeHackerFromGroup(hacker_id, hacker_group_id) {
  return fetchPlus({
    Url: `/hacker/group/${hacker_group_id}/members/${hacker_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function addHackerToGroupByCode(group_code, hacker_id) {
  return fetchPlus({
    Url: `/hacker/group/${group_code}/members_by_code/${hacker_id}`,
    Method: "POST",
    hasUserauth: true,
  });
}

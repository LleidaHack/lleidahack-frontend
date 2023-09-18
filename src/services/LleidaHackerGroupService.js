import { fetchPlus } from "src/modules/fetchModule";

export async function getAllLleidaHackerGroups() {
  return fetchPlus({
    Url: "/lleidahacker/group/all",
    hasUserauth: true
  });
}

export async function getLleidaHackerGroupById(lleidaHacker_group_id) {
  return fetchPlus({
    Url: `/lleidahacker/group/${lleidaHacker_group_id}`,
    hasUserauth: true
  });
}

export async function deleteLleidaHackerGroup(lleidaHacker_group_id) {
  return fetchPlus({
    Url: `/lleidahacker/group/${lleidaHacker_group_id}`,
    Method: "DELETE",
    hasUserauth: true
  });;
}

export async function addLleidaHackerGroup(lleidaHacker_group) {
  return fetchPlus({
    Url: "/lleidahacker/group/",
    Method: "POST",
    hasUserauth: true,
    Body: lleidaHacker_group
  });
}

export async function getLleidaHackerGroupMembers(lleidaHacker_group_id) {
  return fetchPlus({
    Url: `/lleidahacker/group/${lleidaHacker_group_id}/members`,
    hasUserauth: true
  });
}

export async function addLleidaHackerToGroup(lleidaHacker_id, lleidaHacker_group_id) {
  return fetchPlus({
    Url: `/lleidahacker/group/${lleidaHacker_group_id}/members/${lleidaHacker_id}`,
    Method: "POST",
    hasUserauth: true
  });
}

export async function removeLleidaHackerFromGroup(lleidaHacker_id, lleidaHacker_group_id) {
  return fetchPlus({
    Url: `/lleidahacker/group/${lleidaHacker_group_id}/members/${lleidaHacker_id}`,
    Method: "DELETE",
    hasUserauth: true
  });
}

export async function setLleidaHackerGroupLeader(lleidaHacker_id, lleidaHacker_group_id) {
  return fetchPlus({
    Url: `/lleidahacker/group/${lleidaHacker_group_id}/leader/${lleidaHacker_id}`,
    Method: "PUT",
    hasUserauth: true
  });
}

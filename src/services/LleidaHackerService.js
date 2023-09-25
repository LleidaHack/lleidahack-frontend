import { fetchPlus } from "src/modules/fetchModule";

export async function signupLleidaHacker(lleidaHacker) {
  return fetchPlus({
    Url: "/lleidahacker/signup",
    Method: "POST",
    Body: lleidaHacker,
  });
}

export async function getAllLleidaHackers() {
  return fetchPlus({
    Url: "/lleidahacker/all",
    hasUserauth: true,
  });
}

export async function getLleidaHackerById(lleidaHacker_id) {
  return fetchPlus({
    Url: `/lleidahacker/${lleidaHacker_id}`,
    hasUserauth: true,
  });
}

export async function updateLleidaHacker(lleidaHacker) {
  return fetchPlus({
    Url: `/lleidahacker/${lleidaHacker.id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: lleidaHacker,
  });
}

export async function deleteLleidaHacker(lleidaHacker_id) {
  return fetchPlus({
    Url: `/lleidahacker/${lleidaHacker_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function acceptLleidaHacker(lleidaHacker_id) {
  return fetchPlus({
    Url: `/lleidahacker/${lleidaHacker_id}/accept`,
    Method: "POST",
    hasUserauth: true,
  });
}

export async function rejectLleidaHacker(lleidaHacker_id) {
  return fetchPlus({
    Url: `/lleidahacker/${lleidaHacker_id}/reject`,
    Method: "POST",
    hasUserauth: true,
  });
}

export async function activateLleidaHacker(lleidaHacker_id) {
  return fetchPlus({
    Url: `/lleidahacker/${lleidaHacker_id}/activate`,
    Method: "POST",
    hasUserauth: true,
  });
}

export async function deactivateLleidaHacker(lleidaHacker_id) {
  return fetchPlus({
    Url: `/lleidahacker/${lleidaHacker_id}/deactivate`,
    Method: "POST",
    hasUserauth: true,
  });
}

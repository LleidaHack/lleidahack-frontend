import { fetchPlus } from "src/modules/fetchModule";

export async function getAllUsers() {
  return fetchPlus({
    Url: "/user/all",
    hasUserauth: true,
  });
}

export async function getUserById(user_id) {
  return fetchPlus({
    Url: `/user/${user_id}`,
    hasUserauth: true,
  });
}

export async function getUserByEmail(email) {
  return fetchPlus({
    Url: `/user/email/${email}`,
    hasUserauth: true,
  });
}

export async function getUserByNickname(nickname) {
  return fetchPlus({
    Url: `/user/nickname/${nickname}`,
    hasUserauth: true,
  });
}

export async function getUserByPhone(phone) {
  return fetchPlus({
    Url: `/user/phone/${phone}`,
    hasUserauth: true,
  });
}

export async function getUserByCode(code) {
  return fetchPlus({
    Url: `/user/code/${code}`,
    hasUserauth: true,
  });
}

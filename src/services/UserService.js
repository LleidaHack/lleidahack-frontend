import { fetchPlus } from "src/modules/fetchModule";

export async function getAllUsers() {
  return fetchPlus({
    Url: "/user/all",
    hasUserauth: true
  });
}

export async function getUserById(user_id) {
  return fetchPlus({
    Url: `/user/${user_id}`,
    hasUserauth: true
  });
} 

export async function getUserByCode(code) {
  return fetchPlus({
    Url: `/user/${code}`,
    hasUserauth: true
  });
}

export async function addUser(user) {
  return fetchPlus({
    Url: "/user/",
    Method: "POST",
    hasUserauth: true,
    Body: user
  });
}

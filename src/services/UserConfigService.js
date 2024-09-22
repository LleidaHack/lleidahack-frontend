import { fetchPlus } from "src/modules/fetchModule";

export async function getUserConfigs() {
  return fetchPlus({
    Url: `/userConfig/all`,
    hasUserauth: true,
  });
}

export async function getUserConfigById(id) {
  return fetchPlus({
    Url: `/userConfig/${id}`,
    hasUserauth: true,
  });
}

export async function updateUserConfig(id, config) {
  return fetchPlus({
    Url: `/userConfig/${id}`,
    Method: "PUT",
    Body: config,
    hasUserauth: true,
  });
}

/*
export async function deleteALLUserConfigs() {
  return fetchPlus({
    Url: `/userConfig/`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function createALLUserConfigs() {
  return fetchPlus({
    Url: `/userConfig/userconfig_all_creator`,
    Method: "POST",
    hasUserauth: true,
  });
}
*/

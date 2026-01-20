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

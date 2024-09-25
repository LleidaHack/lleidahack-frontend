import { fetchPlus } from "src/modules/fetchModule";

export async function signupCompanyUser(company_user) {
  return fetchPlus({
    Url: "/company-user/signup",
    Method: "POST",
    Body: company_user,
  });
}

export async function getAllCompanyUsers() {
  return fetchPlus({
    Url: "/company-user/all",
    hasUserauth: true,
  });
}

export async function getCompanyUserById(company_user_id) {
  return fetchPlus({
    Url: `/company-user/${company_user_id}`,
    hasUserauth: true,
  });
}

export async function updateCompanyUser(company_user) {
  return fetchPlus({
    Url: `/company-user/${company_user.id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: company_user,
  });
}

export async function deleteCompanyUser(company_user_id) {
  return fetchPlus({
    Url: `/company-user/${company_user_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

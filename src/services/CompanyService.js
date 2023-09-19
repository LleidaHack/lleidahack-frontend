import { fetchPlus } from "src/modules/fetchModule";

export async function getAllCompanies() {
  return fetchPlus({
    Url: "/company/all"
  });
}

export async function getCompanyById(company_id) {
  return fetchPlus({
    Url: `/company/${company_id}`
  });
}

export async function updateCompany(company) {
  return fetchPlus({
    Url: `/company/${company.id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: company,
  });
}

export async function deleteCompany(company_id) {
  return fetchPlus({
    Url: `/company/${company_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function addCompany(company) {
  return fetchPlus({
    Url: "/company/",
    Method: "POST",
    hasUserauth: true,
    Body: company,
  });
}

export async function getCompanyUsers(company_id) {
  return fetchPlus({
    Url: `/company/${company_id}/users`,
    hasUserauth: true,
  });
}

export async function addUserToCompany(company_user_id, company_id) {
  return fetchPlus({
    Url: `/company/${company_id}/users/${company_user_id}`,
    Method: "POST",
    hasUserauth: true,
  });
}

export async function removeUserFromCompany(company_user_id, company_id) {
  return fetchPlus({
    Url: `/company/${company_id}/users/${company_user_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function getCompanyEvents(company_id) {
  return fetchPlus({
    Url: `/company/${company_id}/events`,
    hasUserauth: true,
  });
}

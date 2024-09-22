import { fetchPlus } from "src/modules/fetchModule";

export async function getAllArticleTypes() {
  return fetchPlus({
    Url: "/article_type/all",
  });
}

export async function getArticleTypeById(id) {
  return fetchPlus({
    Url: `/article_type/${id}`,
  });
}

export async function updateArticleType(article_type) {
  return fetchPlus({
    Url: `/article_type/${article_type.id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: article_type,
  });
}

export async function addArticleType(article_type) {
  return fetchPlus({
    Url: "/article_type/",
    Method: "POST",
    hasUserauth: true,
    Body: article_type,
  });
}

export async function deleteArticleType(id) {
  return fetchPlus({
    Url: `/article_type/${id}`,
    Method: "DELETE",
    hasUserauth: true
  });
}

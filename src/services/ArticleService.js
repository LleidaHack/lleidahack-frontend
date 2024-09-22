import { fetchPlus } from "src/modules/fetchModule";

export async function getAllArticles() {
  return fetchPlus({
    Url: "/article/all",
  });
}

export async function getArticleById(id) {
  return fetchPlus({
    Url: `/article/${id}`,
  });
}

export async function updateArticle(article) {
  return fetchPlus({
    Url: `/article/${article.id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: article,
  });
}

export async function addArticle(article) {
  return fetchPlus({
    Url: "/article/",
    Method: "POST",
    hasUserauth: true,
    Body: article,
  });
}

export async function deleteArticle(id) {
  return fetchPlus({
    Url: `/article/${id}`,
    Method: "DELETE",
    hasUserauth: true
  });
}

export async function addTypeToArticle(type_id, article_id) {
  return fetchPlus({
    Url: `/article/${article_id}/add/${type_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

export async function removeTypeFromArticle(type_id, article_id) {
  return fetchPlus({
    Url: `/company/${article_id}/delete/${type_id}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

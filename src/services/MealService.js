import { fetchPlus } from "src/modules/fetchModule";

export async function getMeals(id) {
  return fetchPlus({
    Url: `/meal/${id}/all`,
    hasUserauth: true,
  });
}

export async function getMealById(meal_id) {
  return fetchPlus({
    Url: `/meal/${meal_id}`,
    hasUserauth: true,
  });
}

export async function deleteMeal(meal_id) {
  return fetchPlus({
    Url: `/meal/${meal_id}`,
    Method: "DELETE",
    hasUserauth: true,
  });
}

export async function createMeal(meal) {
  return fetchPlus({
    Url: "/meal/",
    Method: "POST",
    hasUserauth: true,
    Body: meal,
  });
}

export async function updateMeal(id, meal) {
  return fetchPlus({
    Url: `/meal/${id}/${meal.id}`,
    Method: "PUT",
    hasUserauth: true,
    Body: meal,
  });
}

export async function hackerEatsFood(hacker_code, meal_id) {
  return fetchPlus({
    Url: `/meal/${meal_id}/eat/${hacker_code}`,
    Method: "PUT",
    hasUserauth: true,
  });
}

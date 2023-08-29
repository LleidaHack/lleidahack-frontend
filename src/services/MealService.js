export async function getMeals(id) {
    console.log(localStorage.getItem("userToken"));
    return fetch(process.env.REACT_APP_DOMAIN + `/meal/${id}/all`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("response: ", data);
        return data;
    })
    .catch((error) => {
        console.warn(error);
        return [];
    });
}

export async function getMealById(id, meal_id) {
    console.log(localStorage.getItem("userToken"));
    return fetch(process.env.REACT_APP_DOMAIN + `/meal/${id}/${meal_id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("response: ", data);
        return data;
    })
    .catch((error) => {
        console.warn(error);
        return [];
    });
}

export async function updateMeal(id, meal) {
    return fetch(process.env.REACT_APP_DOMAIN + `/meal/${id}/${meal.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
        body: JSON.stringify(meal),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("response: ", data);
        return data;
    })
    .catch((error) => {
        console.warn(error);
        return [];
    });
}

export async function deleteMeal(id, meal_id) {
    return fetch(process.env.REACT_APP_DOMAIN + `/meal/${id}/${meal_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("response: ", data);
        return data;
    })
    .catch((error) => {
        console.warn(error);
        return [];
    });
}

export async function createMeal(meal) {
    return fetch(process.env.REACT_APP_DOMAIN + `/meal/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
        body: JSON.stringify(meal),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("response: ", data);
        return data;
    })
    .catch((error) => {
        console.warn(error);
        return [];
    });
}
export async function signupUser(user) {
    return fetch(process.env.REACT_APP_DOMAIN+'/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // '': '',
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return[]
    });
}

export async function getAllUsers() {
    console.log(localStorage.getItem("userToken"))
    return fetch(process.env.REACT_APP_DOMAIN+'/user/all', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function getUserById(user_id) {
    return fetch(process.env.REACT_APP_DOMAIN+`/user/${user_id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });
}

export async function updateUser(user) {
    return fetch(process.env.REACT_APP_DOMAIN+`/user/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });
}

export async function deleteUser(user_id) {
    return fetch(process.env.REACT_APP_DOMAIN+`/user/${user_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });
}

export async function addUser(user) {
    return fetch(process.env.REACT_APP_DOMAIN+'/user/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });
}
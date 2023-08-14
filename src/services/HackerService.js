export async function signupHacker(hacker) {
    return fetch(process.env.REACT_APP_DOMAIN+'/hacker/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "mode":"no-cors"
        },
        body: JSON.stringify(hacker)
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

export async function getAllHackers() {
    return fetch(process.env.REACT_APP_DOMAIN+'/hacker/all', {
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

export async function getHackerById(hacker_id) {
    return fetch(process.env.REACT_APP_DOMAIN+`/hacker/${hacker_id}`, {
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

export async function updateHacker(hacker) {
    return fetch(process.env.REACT_APP_DOMAIN+`/hacker/${hacker.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        },
        body: JSON.stringify(hacker)
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

export async function addHacker(hacker) {
    return fetch(process.env.REACT_APP_DOMAIN+'/hacker/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        },
        body: JSON.stringify(hacker)
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

export async function banHackerById(hacker_id) {
    return fetch(process.env.REACT_APP_DOMAIN+`/hacker/${hacker_id}/ban`, {
        method: 'POST',
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

export async function unbanHackerById(hacker_id) {
    return fetch(process.env.REACT_APP_DOMAIN+`/hacker/${hacker_id}/unban`, {
        method: 'POST',
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

export async function deleteHacker(hacker_id) {
    return fetch(process.env.REACT_APP_DOMAIN+`/hacker/${hacker_id}`, {
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
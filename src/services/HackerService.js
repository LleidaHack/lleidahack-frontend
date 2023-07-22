export async function signupHacker(hacker) {
    return fetch('https://backend.lleidahack.dev/hacker/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hacker)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response  ', data);
        return data;
    })
    .catch(error => {
        //console.warn(error);
        return[]
    });
}

export async function getAllHackers() {
    return fetch('https://backend.lleidahack.dev/hacker/all')
    .then(response => response.json())
    .then(data => {
        console.log('response  ', data);
        return data;
    })
    .catch(error => {
        //console.warn(error);
        return [];
    });  
}

export async function getHackerById(id) {
    return fetch(`https://backend.lleidahack.dev/hacker/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log('response  ', data);
        return data;
    })
    .catch(error => {
        //console.warn(error);
        return [];
    });
}

export async function updateHacker(hacker) {
    return fetch(`https://backend.lleidahack.dev/hacker/${hacker.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hacker)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response  ', data);
        return data;
    })
    .catch(error => {
        //console.warn(error);
        return [];
    });
}

export async function addHacker(hacker) {
    return fetch('https://backend.lleidahack.dev/hacker/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hacker)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response  ', data);
        return data;
    })
    .catch(error => {
        //console.warn(error);
        return [];
    });
}

export async function banHackerById(id) {
    return fetch(`https://backend.lleidahack.dev/hacker/${id}/ban`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response  ', data);
        return data;
    })
    .catch(error => {
        //console.warn(error);
        return [];
    });
}

export async function unbanHackerByID(id) {
    return fetch(`https://backend.lleidahack.dev/hacker/${id}/unban`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response  ', data);
        return data;
    })
    .catch(error => {
        //console.warn(error);
        return [];
    });
}

export async function deleteHacker(id) {
    return fetch(`https://backend.lleidahack.dev/hacker/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response  ', data);
        return data;
    })
    .catch(error => {
        //console.warn(error);
        return [];
    });
}
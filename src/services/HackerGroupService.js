export async function getAllHackerGroups() {
    return fetch(process.env.DOMAIN+'/hacker/group/all', {
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

export async function getHackerGroupById(hacker_group_id) {
    return fetch(process.env.DOMAIN+`/hacker/group/${hacker_group_id}`, {
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

export async function updateHackerGroup(hacker_group) {
    return fetch(process.env.DOMAIN+`/hacker/group/${hacker_group.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        },
        body: JSON.stringify(hacker_group)
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

export async function deleteHackerGroup(hacker_group_id) {
    return fetch(process.env.DOMAIN+`/hacker/group/${hacker_group_id}`, {
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

export async function addHackerGroup(hacker_group) {
    return fetch(process.env.DOMAIN+'/hacker/group/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        },
        body: JSON.stringify(hacker_group)
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

export async function getHackerGroupMembers(hacker_group_id) {
    return fetch(process.env.DOMAIN+`/hacker/group/${hacker_group_id}/members`, {
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

export async function addHackerToGroup(hacker_id, hacker_group_id) {
    return fetch(process.env.DOMAIN+`/hacker/group/${hacker_group_id}/members/${hacker_id}`, {
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

export async function removeHackerFromGroup(hacker_id, hacker_group_id) {
    return fetch(process.env.DOMAIN+`/hacker/group/${hacker_group_id}/members/${hacker_id}`, {
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
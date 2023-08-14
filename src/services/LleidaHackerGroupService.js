export async function getAllLleidaHackerGroups() {
    return fetch(process.env.DOMAIN+'/lleidahacker/group/all', {
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

export async function getLleidaHackerGroupById(lleidaHacker_group_id) {
    return fetch(process.env.DOMAIN+`/lleidahacker/group/${lleidaHacker_group_id}`, {
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

export async function deleteLleidaHackerGroup(lleidaHacker_group_id) {
    return fetch(process.env.DOMAIN+`/lleidahacker/group/${lleidaHacker_group_id}`, {
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

export async function addLleidaHackerGroup(lleidaHacker_group) {
    return fetch(process.env.DOMAIN+'/lleidahacker/group/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        },
        body: JSON.stringify(lleidaHacker_group)
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

export async function getLleidaHackerGroupMembers(lleidaHacker_group_id) {
    return fetch(process.env.DOMAIN+`/lleidahacker/group/${lleidaHacker_group_id}/members`, {
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

export async function addLleidaHackerToGroup(lleidaHacker_id, lleidaHacker_group_id) {
    return fetch(process.env.DOMAIN+`/lleidahacker/group/${lleidaHacker_group_id}/members/${lleidaHacker_id}`, {
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

export async function removeLleidaHackerFromGroup(lleidaHacker_id, lleidaHacker_group_id) {
    return fetch(process.env.DOMAIN+`/lleidahacker/group/${lleidaHacker_group_id}/members/${lleidaHacker_id}`, {
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

export async function setLleidaHackerGroupLeader(lleidaHacker_id, lleidaHacker_group_id) {
    return fetch(process.env.DOMAIN+`/lleidahacker/group/${lleidaHacker_group_id}/leader/${lleidaHacker_id}`, {
        method: 'PUT',
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
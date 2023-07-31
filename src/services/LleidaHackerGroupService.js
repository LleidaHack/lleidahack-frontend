export async function getAllLleidaHackerGroups() {
    return fetch('https://backend.lleidahack.dev/lleidahacker/group/all')
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

export async function getLleidaHackerGroupById(lleidaHackerGroupId) {
    return fetch(`https://backend.lleidahack.dev/lleidahacker/group/${lleidaHackerGroupId}`)
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

export async function deleteLleidaHackerGroup(lleidaHackerGroupId) {
    return fetch(`https://backend.lleidahack.dev/lleidahacker/group/${lleidaHackerGroupId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
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

export async function addLleidaHackerGroup(lleidaHackerGroup) {
    return fetch('https://backend.lleidahack.dev/lleidahacker/group/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lleidaHackerGroup)
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

export async function getLleidaHackerGroupMembers(lleidaHackerGroupId) {
    return fetch(`https://backend.lleidahack.dev/lleidahacker/group/${lleidaHackerGroupId}/members`)
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

export async function addLleidaHackerToGroup(lleidaHackerId,groupId) {
    return fetch(`https://backend.lleidahack.dev/lleidahacker/group/${groupId}/members/${lleidaHackerId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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

export async function removeLleidaHackerFromGroup(lleidaHackerId,groupId) {
    return fetch(`https://backend.lleidahack.dev/lleidahacker/group/${groupId}/members/${lleidaHackerId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
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

export async function setLleidaHackerGroupLeader(groupId,lleidaHackerId) {
    return fetch(`https://backend.lleidahack.dev/lleidahacker/group/${groupId}/leader/${lleidaHackerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
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
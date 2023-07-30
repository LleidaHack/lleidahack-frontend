export async function getAllHackerGroups() {
    return fetch('https://backend.lleidahack.dev/hacker/group/all')
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

export async function getHackerGroupById(hackerGroupId) {
    return fetch(`https://backend.lleidahack.dev/hacker/group/${hackerGroupId}`)
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

export async function updateHackerGroup(hackerGroup) {
    return fetch(`https://backend.lleidahack.dev/hacker/group/${hackerGroup.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hackerGroup)
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

export async function deleteHackerGroup(hackerGroupId) {
    return fetch(`https://backend.lleidahack.dev/hacker/group/${hackerGroupId}`, {
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

export async function addHackerGroup(hackerGroup) {
    return fetch('https://backend.lleidahack.dev/hacker/group/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hackerGroup)
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

export async function getHackerGroupMembers(hackerGroupId) {
    return fetch(`https://backend.lleidahack.dev//hacker/group/${hackerGroupId}/members`)
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

export async function addHackerToGroup(hackerId,groupId) {
    return fetch(`https://backend.lleidahack.dev/hacker/group/${groupId}/members/${hackerId}`, {
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

export async function removeHackerFromGroup(hackerId,groupId) {
    return fetch(`https://backend.lleidahack.dev/hacker/group/${groupId}/members/${hackerId}`, {
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
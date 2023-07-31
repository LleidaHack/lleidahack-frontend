export async function signupLleidaHacker(lleidaHacker) {
    return fetch('https://backend.lleidahack.dev/lleidahacker/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lleidaHacker)
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

export async function getAllLleidaHackers() {
    return fetch('https://backend.lleidahack.dev/lleidahacker/all')
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

export async function getLleidaHackerById(lleidaHackerId) {
    return fetch(`https://backend.lleidahack.dev/lleidahacker/${lleidaHackerId}`)
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

export async function updateLleidaHacker(lleidaHacker) {
    return fetch(`https://backend.lleidahack.dev/lleidahacker/${lleidaHacker.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lleidaHacker)
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

export async function deleteLleidaHacker(lleidaHackerId) {
    return fetch(`https://backend.lleidahack.dev/lleidahacker/${lleidaHackerId}`, {
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

export async function addLleidaHacker(lleidaHacker) {
    return fetch('https://backend.lleidahack.dev/lleidahacker/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lleidaHacker)
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
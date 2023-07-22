//url="https://backend.lleidahack.dev/"

export async function signupUser(user) {
    return fetch('https://backend.lleidahack.dev/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response  ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return[]
    });
}

export async function getAllUsers() {
    try{
        const response = await fetch('https://backend.lleidahack.dev/user/all');
        // console.log('response  ', response)
        return await response.json();
    }catch(error) {
        return [];
    }   
}

export async function getUserById(id) {
    try{
        const response = await fetch(`https://backend.lleidahack.dev/user/${id}`);
        // console.log('response  ', response)
        return await response.json();
    }catch(error) {
        return [];
    }   
}

export async function updateUser(user) {
    try{
        const response = await fetch(`https://backend.lleidahack.dev/user/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        // console.log('response  ', response)
        return await response.json();
    }catch(error) {
        return [];
    }   
}

export async function deleteUser(id) {
    try{
        const response = await fetch(`https://backend.lleidahack.dev/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log('response  ', response)
        return await response.json();
    }catch(error) {
        return [];
    }   
}

export async function addUser(user) {
    try{
        const response = await fetch('https://backend.lleidahack.dev/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        // console.log('response  ', response)
        return await response.json();
    }catch(error) {
        return [];
    }   
}
export async function getAllUsers() {
    try{
        const response = await fetch('https://backend.lleidahack.dev/users');
        // console.log('response  ', response)
        return await response.json();
    }catch(error) {
        return [];
    }   
}

export async function getUserById(id) {
    try{
        const response = await fetch(`https://backend.lleidahack.dev/users/${id}`);
        // console.log('response  ', response)
        return await response.json();
    }catch(error) {
        return [];
    }   
}

export async function addUser(user) {
    try{
        const response = await fetch('https://backend.lleidahack.dev/users', {
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

export async function updateUser(user) {
    try{
        const response = await fetch(`https://backend.lleidahack.dev/users/${user.id}`, {
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
        const response = await fetch(`https://backend.lleidahack.dev/users/${id}`, {
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
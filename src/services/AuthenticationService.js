export async function login(user) {
    return fetch('https://backend.lleidahack.dev/login', {
        headers: {
            'Content-Type': 'application/json',
            'username': user.username,
            'password': user.password
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        localStorage.setItem("userToken", data.access_token)
    })
    .catch(error => {
        console.warn(error);
        return [];
    }); 
}

export async function confirmEmail(email) {
    return fetch('https://backend.lleidahack.dev/confirm-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain' //TODO TEXT O ALGO MÉS????
        },
        body: email
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        localStorage.setItem("userToken", data.access_token)
    })
    .catch(error => {
        console.warn(error);
        return [];
    }); 
}
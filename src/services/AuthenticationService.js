import {decode as atob, encode as btoa} from 'base-64'  

export async function login(user) {
    return fetch(process.env.REACT_APP_DOMAIN+'/login', {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Basic " + btoa(`${user.email}:${user.password}`)
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        //if (!data.hasOwnProperty('token')) {
        //    throw new Error('Token parameter not found in the data object.');
        //}
        localStorage.setItem("userToken", data.access_token)
    })
    .catch(error => {
        console.warn(error);
        return [];
    }); 
}

export async function confirmEmail(e_mail) {
    return fetch(process.env.REACT_APP_DOMAIN+'/confirm-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' //TODO TEXT O ALGO MÉS????
        },
        body: JSON.stringify({querry:{email:e_mail}}),
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
    })
    .catch(error => {
        console.warn(error);
        return [];
    }); 
}
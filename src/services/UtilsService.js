export async function uploadImage(image) {
    return fetch('https://backend.lleidahack.dev/utils/uploadImage', {
        method: 'POST',
        headers: {
            'Content-Type': 'image/jpeg'
        },
        body: image
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

export async function sendMail(to) {
    return fetch(`https://backend.lleidahack.dev/utils/sendMail/${to}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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
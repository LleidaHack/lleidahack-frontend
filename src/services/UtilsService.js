export async function uploadImage(image) {
    return fetch(process.env.REACT_APP_DOMAIN+'/utils/uploadImage', {
        method: 'POST',
        headers: {
            'Content-Type': 'image/jpeg',
            Authorization: 'Bearer ' + localStorage.getItem("userToken")
        },
        body: image
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        localStorage.setItem("userToken", data.access_token)
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
}

export async function sendMail(to) {
    return fetch(process.env.REACT_APP_DOMAIN+`/utils/sendMail/${to}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data)
        return data;
    })
    .catch((error) => {
      console.warn(error);
      return [];
    });
}

export async function getImage(id) {
    return fetch(process.env.REACT_APP_DOMAIN+`/utils/imageUrl/${id}`, {
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
    .catch((error) => {
      console.warn(error);
      return [];
    });
}

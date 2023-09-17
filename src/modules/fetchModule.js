import { Navigate } from 'react-router-dom';
import { mostrarPopupHandler } from 'src/modules/emmiterModule';

export async function fetchPlus({
    Url,
    Method = "GET",
    Body,
    Querry,
    hasUserauth = false,
    saveLoginInfo = false,
    nextScreen,
    loginAuth = false
}){
    const headers = {"Content-Type": "application/json"}
    if (hasUserauth||loginAuth) { headers.Authorization = loginAuth? "Basic " + btoa(`${loginAuth.email}:${loginAuth.password}`) : "Bearer " + localStorage.getItem("userToken"); }
    const args = {
        method: Method,
        headers: headers,
        body: JSON.stringify(Body)
    }
    const querry = Querry ? `?${Object.keys(Querry)[0]}=${Querry[Object.keys(Querry)[0]]}` : ""
    return fetch(process.env.REACT_APP_DOMAIN + Url+querry,args)
        .then((response) => {
            if(hasUserauth && response.status===403) {
                mostrarPopupHandler();
            }
            return response.json()
        })
        .then((data) => {
            console.log("response: ", data);
            if(saveLoginInfo){
                localStorage.setItem("userToken", data.access_token);
                localStorage.setItem("userID", data.user_id);
                localStorage.setItem("refreshToken", data.refresh_token);
            }
            if(nextScreen){
                Navigate(nextScreen)
            }
            return data;
        })
        .catch((error) => {
            console.warn(error);
            return [];
        });
}
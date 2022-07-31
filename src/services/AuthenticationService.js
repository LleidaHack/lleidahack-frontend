url="https://backend.lleidahack.dev/"
export async function addUser(user) {
    try{
        const response = await fetch(url+'login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'username': user.username,
                'password': user.password
            }
        });
        return await response.json();
    }catch(error) {
        return [];
    }   
}
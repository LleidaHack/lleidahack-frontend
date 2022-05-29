export async function getAllUsers() {
    try{
        const response = await fetch('https://backend.lleidahack.dev/users');
        console.log('response  ', response)
        return await response.json();
    }catch(error) {
        return [];
    }
    
}
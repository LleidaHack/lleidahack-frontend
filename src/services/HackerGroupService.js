export async function getAllHackerGroups() {
    return fetch('https://backend.lleidahack.dev/hacker/group/all')
    .then(response => response.json())
    .then(data => {
        console.log('response  ', data);
        return data;
    })
    .catch(error => {
        //console.warn(error);
        return [];
    });  
}

//avui acabo aquí, user i hacker service acabats i suposo que ben fets, tot i que tinc dubtes en certs enpoints
//on no n'estic segur de com canviar-ho, ja que per exemple en els "update" els objectes passats tenen un .id 
//mentre que al que posa que se l'hi ha de passar al backend no està
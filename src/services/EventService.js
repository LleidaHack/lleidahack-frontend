export async function getEvents() {
    return fetch('https://backend.lleidahack.dev/event/')
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function createEvent(event) {
    return fetch('https://backend.lleidahack.dev/event/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return[]
    });
}

export async function getEventById(event_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}`)
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function updateEvent(event) {
    return fetch(`https://backend.lleidahack.dev/event/${event.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function deleteEvent(event_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function getEventParticipants(event_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}/participants`)
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function getEventSponsors(event_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}/sponsors`)
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function getEventGroups(event_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}/groups`)
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function addEventParticipant(event_id, hacker_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}/participants/${hacker_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function deleteEventParticipant(event_id, hacker_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}/participants/${hacker_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function addEventSponsor(event_id, company_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}/sponsors/${company_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function deleteEventSponsor(event_id, company_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}/sponsors/${company_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function addEventGroup(event_id, group_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}/group/${group_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}

export async function deleteEventGroup(event_id, group_id) {
    return fetch(`https://backend.lleidahack.dev/event/${event_id}/group/${group_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('response: ', data);
        return data;
    })
    .catch(error => {
        console.warn(error);
        return [];
    });  
}
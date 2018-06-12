import { authHeader } from '../_helpers';
import { serviceConstants } from '../_constants';

export const itemService = {
    getAllInList
};


function getAllInList(listId) {
    
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(serviceConstants.ITEMS_IN_LIST_URL + listId, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    
    console.log(response);
    
    if (!response.ok) { 
        //TODO: Handle status!!!!!
        return Promise.reject(response.statusText);
    }
    
    return response.json();
}
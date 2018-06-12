import { authHeader } from '../_helpers';
import { serviceConstants } from '../_constants';

export const listService = {
    getAll,
    createList
};


function getAll() {
    
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(serviceConstants.LIST_URL, requestOptions).then(handleResponse);
}

function createList(name, description) {
    
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            name: name,
            description: description
        })
    };

    return fetch(serviceConstants.LIST_URL, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    
    if (!response.ok) { 
        return Promise.reject(getErrorObject(response));
    }
    
    return response.json();
}

function getErrorObject(response) {
    
    var  errorText = "Se ha producido un error";
    if(response.status === 449) {
        errorText = "Token expirado";
    } else if(response.status === 500) {
        errorText = "Error en el servidor";
    } 
    
    return {
        code: response.status,
        message: errorText
    }
    
}
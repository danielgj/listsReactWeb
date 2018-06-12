import { authHeader } from '../_helpers';
import { serviceConstants } from '../_constants';

export const userService = {
    login,
    logout,
    register
};

function login(user, pass) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            'username': user, 
            'password': pass 
        })
    };

    return fetch(serviceConstants.LOGIN_URL, requestOptions)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function register(name, lastname, email, username, password) {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            'firstname': name,
            'lastname': lastname,
            'email': email,
            'username': username, 
            'password': password 
        })
    };

    return fetch(serviceConstants.REGISTER_URL, requestOptions)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
        
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

import { listConstants } from '../_constants';
import { listService } from '../_services';

export const listActions = {
    getAll,
    createList,
    navigateToLogin
};

function getAll() {
    return dispatch => {
        dispatch(request());

        listService.getAll()
            .then(
                lists => dispatch(success(lists)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: listConstants.GET_LISTS_REQUEST } }
    function success(lists) { return { type: listConstants.GET_LISTS_SUCCESS, lists } }
    function failure(error) { 
        if(error.code === 449) {
            return { type: listConstants.TOKEN_EXPIRED, error } 
        } else {
            return { type: listConstants.GET_LISTS_FAILURE, error } 
        }
    }
}

function createList(name, description) {
    
    return dispatch => {
        
        dispatch(request());

        listService.createList(name, description)
            .then(
                list => dispatch(success(list)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: listConstants.CREATE_LIST_REQUEST } }
    function success(list) { return { type: listConstants.CREATE_LIST_SUCCESS, list } }
    function failure(error) { return { type: listConstants.CREATE_LIST_FAILURE, error } }
}

function navigateToLogin() {
    //console.log("Debería navegar al login");
}
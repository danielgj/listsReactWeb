import { itemConstants } from '../_constants';
import { itemService } from '../_services';

export const itemActions = {
    getAllInList
};

function getAllInList(listId) {
    return dispatch => {
        dispatch(request());

        itemService.getAll(listId)
            .then(
                items => dispatch(success(items)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: itemConstants.GET_ITEMS_INLIST_REQUEST } }
    function success(items) { return { type: itemConstants.GET_ITEMS_INLIST_SUCCESS, items } }
    function failure(error) { return { type: itemConstants.GET_ITEMS_INLIST_FAILURE, error } }
}
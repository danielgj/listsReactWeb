import { itemConstants } from '../_constants';

export function items(state = {}, action) {
  switch (action.type) {
    case itemConstants.GET_ITEMS_INLIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case itemConstants.GET_ITEMS_INLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.items
      };
    case itemConstants.GET_ITEMS_INLIST_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}
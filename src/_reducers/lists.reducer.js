import { listConstants } from '../_constants';

export function lists(state = {}, action) {
  switch (action.type) {
    case listConstants.GET_LISTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        tokenExpired: false
      };
    case listConstants.GET_LISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        lists: action.lists,
        tokenExpired: false
      };
    case listConstants.GET_LISTS_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error,
        tokenExpired: false
      };
    case listConstants.CREATE_LISTS_REQUEST:
      return {
        ...state,
        error: null,
        creating: true,
        tokenExpired: false
      };
    case listConstants.CREATE_LISTS_SUCCESS:          
      return {
        lists: state.lists.push(action.list),
        error: null,
        dani: 'prueba',
        creating: false,
        tokenExpired: false
      };
    case listConstants.CREATE_LISTS_FAILURE:
      return { 
        ...state,
        creating: false,
        error: action.error,
        tokenExpired: false
      };
    case listConstants.TOKEN_EXPIRED:
      return { 
        ...state,
        creating: false,
        loading: false,
        error: action.error,
        tokenExpired: true
      };
    default:
      return state
  }
}
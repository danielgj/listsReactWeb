import { combineReducers } from 'redux';

import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { lists } from './lists.reducer';
import { items } from './items.reducer';


const rootReducer = combineReducers({
  users,
  alert,
  lists,
  items
});

export default rootReducer;
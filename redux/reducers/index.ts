import {combineReducers} from 'redux';
import cartReducer from './cartReducers';

let reducers = combineReducers({
  cartReducer: cartReducer,
});

const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};

export default rootReducer;

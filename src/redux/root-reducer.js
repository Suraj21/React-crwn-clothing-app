//the actual base reducer object that represents all of the state of the application
// this will combine all the state together 
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers ({
    user: userReducer,
    cart: cartReducer
});
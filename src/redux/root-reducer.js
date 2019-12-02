import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import shopReducer from  './shop/shop-reducer';
import sliderReducer from './navbar-slider/slider-reducer';
import indiReducer from './indi-slider/indi-reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    slider: sliderReducer,
    indi: indiReducer
});

export default persistReducer(persistConfig, rootReducer);
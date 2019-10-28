import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import shopReducer from  './shop/shop-reducer';
import sliderReducer from './navbar-slider/slider-reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    slider: sliderReducer
});

export default persistReducer(persistConfig, rootReducer);
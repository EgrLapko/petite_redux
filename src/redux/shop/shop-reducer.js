import { products } from './productsData';

const INITIAL_STATE = {
    collections: products
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;
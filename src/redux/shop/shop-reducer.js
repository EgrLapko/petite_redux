import { items_database } from './items_database';

const INITIAL_STATE = {
    collections: items_database
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;
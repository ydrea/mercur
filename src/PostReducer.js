import {FETCH, NEW} from './types';

const iState = {
    items: [],
    item: {}
}
export default function (state = iState, action ) {
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                items: action.payload
            }
        default: 
        return state;
    }
};

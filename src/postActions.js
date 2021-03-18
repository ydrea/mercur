import {FETCH, NEW} from './types';

export function fetchPosts () {
    return function (dispatch) {
        fetch ('https://jsonplaceholder.typicode.com/posts')
        //promise
        .then (rez => rez.json())
        //data
        .then (posts => dispatch({
            type: FETCH,
            payload: posts}));
    
    }
}
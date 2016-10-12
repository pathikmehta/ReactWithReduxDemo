import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
}

const reducer = function(state, action) {
	switch(action.type) {
		case 'FETCH_USERS_START': {
			return {...state, fetching: true};
			break;
		}
		case 'FETCH_USERS_ERROR': {
			return {...state, fetching: false, fetched: false, error: action.payload};
			break;
		}
		case 'FETCH_USERS_COMPLETED': {
			return {...state, fetching: false, fetched: true, users: action.payload};
			break;
		}
	}
	return state;
}

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
	dispatch({type: 'FETCH_USERS_START'});
	axios.get("http://google.co.in").
		then( (response) => {
			dispacth({type: "FETCH_USERS_COMPLETED", payload: response.data});
		})
		.catch((err) => {
			dispatch({type: 'FETCH_USERS_ERROR', payload: err})
		})
});
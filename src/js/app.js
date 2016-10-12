import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
}

const reducer = function(state, action) {
	switch(action.type) {
		case 'FETCH_USERS_PENDING': {
			return {...state, fetching: true};
			break;
		}
		case 'FETCH_USERS_REJECTED': {
			return {...state, fetching: false, fetched: false, error: action.payload};
			break;
		}
		case 'FETCH_USERS_FULFILLED': {
			return {...state, fetching: false, fetched: true, users: action.payload};
			break;
		}
	}
	return state;
}

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducer, middleware);

store.dispatch({
	type: "FETCH_USERS",
	payload: axios.get("http://google.co.in")
});
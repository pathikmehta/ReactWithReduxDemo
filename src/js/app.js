import { combineReducers, createStore } from "redux"

const userReducer = (state = {}, action) => {
	switch(action.type) {
		case "CHANGE_NAME": {
			state = {...state, name: action.payload}
			break;
		}
		case "CHANGE_AGE": {
			state = {...state, age: action.payload}
			break;
		}
	}

	return state;
}

const tweetReducer = (state = [], action) => {
	return state;
}

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetReducer
});


const reducer = function(state, action) {
	if (action.type === 'INC') {
		return state+action.payload;
	}
	if (action.type === 'DEC') {
		return state-action.payload;
	}
	return state;
}

const store = createStore(reducers);

store.subscribe( () => {
	console.log("Store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "Pathik"})
store.dispatch({type: "CHANGE_AGE", payload: 23})
import { applyMiddleware, createStore } from "redux"

const reducer = function(state, action) {
	if (action.type === 'INC') {
		return state+action.payload;
	}
	if (action.type === 'DEC') {
		return state-action.payload;
	}
	if (action.type === 'E') {
		throw new Error("Error!!!!");
	}
	return state;
}

const logger = (store) => (next) => (action) => {
	console.log("Action fired",action);
	next(action);
}

const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch(e) {
		console.log("Error occured", e);
	}
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 0, middleware);

store.subscribe( () => {
	console.log("Store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 10})
store.dispatch({type: "INC", payload: 12})
store.dispatch({type: "INC", payload: 15})
store.dispatch({type: "DEC", payload: 25})
store.dispatch({type: "DEC", payload: 5})
store.dispatch({type: "E"})
export default function(state = {
		tweets: [],
		fetching: false,
		fetched: false,
		error: null
	}, action) {

	switch(action.type) {
		case 'FETCH_TWEETS_PENDING': {
			return {...state, fetching: true}
			break;
		}
		case 'FETCH_TWEETS_FULFILLED': {
			return {...state, fetching: false, fetched: true}
			break;
		}
		case 'FETCH_TWEETS_REJECTED': {
			return {...state, fetching: false, error: action.payload}
			break;
		}
	}

	return state;
}
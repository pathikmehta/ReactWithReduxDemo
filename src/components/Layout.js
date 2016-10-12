import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import { fetchTweets } from '../actions/tweetsActions';

@connect( (store) => {
	return {
		user: store.user.user,
		userFetched: store.user.fetched,
		tweets: store.tweets.tweets
	};
})
export default class Layout extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchUser());
	}

	render() {
		console.log(this.props);
		const {user, tweets} = this.props;

		if (!tweets.length) {
			return <button onClick={this.fetchTweets.bind(this)}>Load tweets</button>
		}
		return <h1>{this.props.user.name}</h1>;
	}

	fetchTweets() {
		this.props.dispatch(fetchTweets());
	}
}
import { actions } from './actions';

const initialState = {
	loggedIn: false,
	userName: 'guest'
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.login:
			return {
				loggedIn: true,
				userName: 'not guest'
			};
		case actions.logOut:
			return {
				loggedIn: false
			};
		default:
			return state;
	}
};

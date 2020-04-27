export const actions = {
	login: 'LOGIN',
	logOut: 'LOGOUT',
};

export const login = () => ({
	type: actions.login
});

export const logOut = () => ({
	type: actions.logOut
});

export default {
	login,
	logOut
};

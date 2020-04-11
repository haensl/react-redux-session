import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { login, logOut } from './actions'

const Login = ({
	isLoggedIn
}) => {
	isLoggedIn =  useSelector(state => state.loginReducer.loggedIn);
	const dispatch = useDispatch();

	const changeStatus = () => {
		isLoggedIn ? dispatch(logOut()) : dispatch(login())
	};

	return (
		<button onClick={() => changeStatus()}
		className="Login">
			{ isLoggedIn ? 'Logout' : 'Login'}
		</button>
	)
};

export default Login;
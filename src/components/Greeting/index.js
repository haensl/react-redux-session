import React from 'react';
import { useSelector } from "react-redux";

const Greeting = ({
	userName,
	loggedIn
}) => {

	userName = useSelector(state => state.loginReducer.userName);
	loggedIn = useSelector(state => state.loginReducer.loggedIn);
	return (
		<div className="Greeting">
			{loggedIn ? `Hello ${userName}. Wassup?` : `Hmm, I don't know you ${userName}. Would you mind to log in?`}
		</div>
	)
};

export default Greeting;

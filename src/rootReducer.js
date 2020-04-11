import { combineReducers } from 'redux';
import appReducer from './components/App/reducer';
import loginReducer from './components/Login/reducer';

export default combineReducers({
	appReducer,
	loginReducer
});


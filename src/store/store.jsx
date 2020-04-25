import {configureStore} from "@reduxjs/toolkit";
import appReducer from './appReducer';
import activationReducer from './activationReducer';


export default configureStore({
	reducer: {
		app: appReducer,
		activation: activationReducer
	}
})

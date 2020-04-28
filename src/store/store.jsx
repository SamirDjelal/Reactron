import {configureStore} from "@reduxjs/toolkit";
import appReducer from './appReducer';
import activationReducer from './activationReducer';
import updateReducer from './updateReducer';


export default configureStore({
	reducer: {
		app: appReducer,
		activation: activationReducer,
		update: updateReducer
	}
})

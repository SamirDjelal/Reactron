import {createSlice} from "@reduxjs/toolkit";

const activationState = createSlice({
	name: 'activation',
	initialState: {
		license: '',
		valideLicense: false
	},
	reducers: {
		activateLicense: (state, action) => {
			return {...state, license: action.payload, valideLicense: true}
		},
		desactivateLicense: (state) => {
			return {...state, license: '', valideLicense: false}
		}
	}
})

export const {activateLicense, desactivateLicense} = activationState.actions;

export default activationState.reducer

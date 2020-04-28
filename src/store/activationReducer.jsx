import {createSlice} from "@reduxjs/toolkit";

const activationState = createSlice({
	name: 'activation',
	initialState: {
		// license: '',
		// valideLicense: false
		license: '1234-1234-1234-1234-1234',
		valideLicense: true
	},
	reducers: {
		activateLicense: (state, action) => {
			return {...state, license: action.payload, valideLicense: true}
		},
		deactivateLicense: (state) => {
			return {...state, license: '', valideLicense: false}
		}
	}
})

export const {activateLicense, deactivateLicense} = activationState.actions;

export default activationState.reducer

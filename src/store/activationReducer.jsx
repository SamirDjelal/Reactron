import {createSlice} from "@reduxjs/toolkit";

const activationState = createSlice({
	name: 'activation',
	initialState: {
		// license: '',
		// validLicense: false
		license: '1234-1234-1234-1234-1234',
		validLicense: true
	},
	reducers: {
		activateLicense: (state, action) => {
			return {...state, license: action.payload, validLicense: true}
		},
		deactivateLicense: (state) => {
			return {...state, license: '', validLicense: false}
		}
	}
})

export const {activateLicense, deactivateLicense} = activationState.actions;

export default activationState.reducer

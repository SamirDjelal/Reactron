import {createSlice} from "@reduxjs/toolkit";

const appState = createSlice({
	name: 'app',
	initialState: {
		val: 11
	},
	reducers: {
		inc: (state, action) => {
			return {...state, val: state.val + action.payload}
		},
		dec: (state, action) => {
			return {...state, val: state.val - action.payload}
		}
	}
})

export const {inc, dec} = appState.actions;

export default appState.reducer

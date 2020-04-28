import {createSlice} from "@reduxjs/toolkit";

const updateState = createSlice({
	name: 'update',
	initialState: {
		lastCheck: new Date().toLocaleTimeString()
	},
	reducers: {
		resetLastCheck: (state) => {
			return {...state, lastCheck: new Date().toLocaleTimeString()}
		}
	}
})

export const {resetLastCheck} = updateState.actions;

export default updateState.reducer

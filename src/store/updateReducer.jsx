import {createSlice} from "@reduxjs/toolkit";

const updateState = createSlice({
	name: 'update',
	initialState: {
		lastCheck: new Date().toLocaleTimeString(),
		status: ''
	},
	reducers: {
		resetLastCheck: (state) => {
			return {...state, lastCheck: new Date().toLocaleTimeString()}
		},
		setUpdateStatus: (state, action) => {
			return {...state, status: action.payload}
		}
	}
})

export const {resetLastCheck, setUpdateStatus} = updateState.actions;

export default updateState.reducer

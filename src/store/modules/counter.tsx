import { createSlice } from '@reduxjs/toolkit'

const counterSilce = createSlice({
	name: 'counter',
	initialState: {
		count: 100,
		msg: 'hello would'
	},
	reducers: {
		changeCount(state, { payload }) {
			state.count += payload
		}
	}
})
export const { changeCount } = counterSilce.actions
export default counterSilce.reducer

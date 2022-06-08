import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	counter: 0
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (state) => {
			state.counter += 1;
		},
		subtract: (state) => {
			state.counter -= 1;
		}
	}
});

export const { add, subtract } = cartSlice.actions;
export default cartSlice.reducer;
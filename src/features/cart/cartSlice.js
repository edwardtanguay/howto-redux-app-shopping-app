import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (state) => {
			state.items.push('book');
		},
		subtract: (state) => {
			state.items.pop();
		},
	},
});

export const { add, subtract } = cartSlice.actions;
export default cartSlice.reducer;

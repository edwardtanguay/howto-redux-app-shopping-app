import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	customerName: '',
	coupon: false
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			action.payload.discountedPrice = action.payload.price * (state.coupon ? .9 : 1);
			state.items.push(action.payload);
		},
		removeItem: (state) => {
			state.items.pop();
		},
		changeCustomerName: (state, action) => {
			state.customerName = action.payload;
		},
		addCoupon: (state) => {
			state.coupon = true;
			state.items.forEach(m=>m.discountedPrice = m.price * .9)
		}
	},
});

export const { addItem, removeItem, addCoupon } = cartSlice.actions;
export default cartSlice.reducer;

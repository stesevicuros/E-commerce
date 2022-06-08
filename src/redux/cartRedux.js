import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
	},
	reducers: {
		addProduct: (state, action) => {
			state.products.push(action.payload);
		},
		removeProduct: (state, action) => {
			const nextCartItems = (state.products = state.products.filter(
				(product) => product._id !== action.payload._id
			));
			state.products = nextCartItems;
		},
	},
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

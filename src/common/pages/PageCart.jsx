import { useSelector } from 'react-redux';

export const PageCart = () => {
	const { counter } = useSelector((state) => state.cart);

	return (
		<div className="page_cart">
			<h2>Shopping Cart</h2>
			<p>Number of books: {counter}</p>
		</div>
	)
}
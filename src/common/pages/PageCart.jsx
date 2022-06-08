import { useSelector } from 'react-redux';

export const PageCart = () => {
	const { items } = useSelector((state) => state.cart);

	return (
		<div className="page_cart">
			<h2>Shopping Cart</h2>
			<p>Number of books: {items.length}</p>
			<ul>
				{items.map((item, index) => {
					return (
						<li key={index}>{item}</li>
				)
			})}
			</ul>
		</div>
	)
}
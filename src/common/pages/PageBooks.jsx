import { useDispatch } from 'react-redux';
import { add, subtract} from '../../features/cart/cartSlice';

export const PageBooks = () => {
	const dispatch = useDispatch();

	return (
		<div className="page_books">
			<h2>Books</h2>
			<button onClick={() => dispatch(subtract())}>Subtract book</button>
			<button onClick={() => dispatch(add())}>Add book</button>
		</div>
	)
}
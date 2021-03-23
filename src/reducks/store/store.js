import { createStore as reduxCreateStore, combineReducers } from 'redux';
// import { ProductsReducer } from '../products/reducers';
import { UsersReducer } from '../users/reducers';

const createStore = () => {
	const combinedReducers = combineReducers({
		// products: ProductReducer,
		users: UsersReducer,
	});

	return reduxCreateStore(combinedReducers);
};

export default createStore;

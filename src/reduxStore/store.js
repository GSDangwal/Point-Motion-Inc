
import { configureStore } from '@reduxjs/toolkit'

const initial = {
    products: []
}

function reducer(state = initial, { type, payload }) {
    switch (type) {
        case "ADD":
            return { ...state, products: [...state.products, payload] }
        case "remove":
            return {
                ...state,
                products: state.products.filter((item, index) => index !== payload)
            }
        default:
            return state;
    }
}

const store = configureStore({
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});
export default store

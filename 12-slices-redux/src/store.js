import { configureStore, combineReducers } from '@reduxjs/toolkit'
import ThemeSliceReducer from './slices/theme.slice.js'


const rootReducer = combineReducers({
    theme: ThemeSliceReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store
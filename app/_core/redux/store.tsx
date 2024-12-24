import storage from 'redux-persist/es/storage'
import persistStore from 'redux-persist/es/persistStore'
import { persistReducer } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import loginSlice  from '@/app/_core/redux/auth/login'
import themeSlice  from '@/app/_core/redux/theme/theme'

export const reducers = combineReducers({
    loginType: loginSlice,
    isDarkMode: themeSlice,

})

const persistConfig = {
    key: 'root',
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

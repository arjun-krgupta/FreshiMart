
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import cartSlice from '../features/cartSlice'

// combine reducers
const rootReducer=combineReducers({
    allCart:cartSlice,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['allCart'] // only cart data will be persisted
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

// create store
export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE", "persist/REGISTER"],
          },
        }),
})

export const persistor=persistStore(store)
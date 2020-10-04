
import { configureStore } from "@reduxjs/toolkit"
import { layoutSlice as uniqLayoutSlice } from './uniq/uniq-web/src/slices/layout'
import { authSlice as uniqAuthSlice } from './uniq/uniq-web/src/slices/auth'
import reduceReducers from 'reduce-reducers'

//const store = configureStore({ reducer: combineReducers({ layoutReducer, authReducer }) })

const reducer = reduceReducers(uniqLayoutSlice.reducer, uniqAuthSlice.reducer) as any

const store = configureStore({ reducer: reducer })

//const store = configureStore({ reducer: {} })

export default store

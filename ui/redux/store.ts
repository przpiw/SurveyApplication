import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index';

//export type Store = ReduxStore<typeof initialState>;
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"

const middleware = [thunk]
export const store =  createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))
export const wrapper = createWrapper(()=>store)
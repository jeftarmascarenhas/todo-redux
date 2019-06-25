/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux' // apenas configs da lib redux
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store

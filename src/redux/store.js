import { createStore, applyMiddleware, compose } from 'redux' // apenas configs da lib redux

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware()))

export default store

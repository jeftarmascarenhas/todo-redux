import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // react-redux sever para a integração do redux com react

import Routes from './routes'
import './index.css'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
)

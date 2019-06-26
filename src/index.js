import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // react-redux sever para a integração do redux com react

import Todo from './screens/Todo'
import App from './screens/App'
import './index.css'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

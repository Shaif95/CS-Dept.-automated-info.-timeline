import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import { Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Switch> */}
        <App />
      {/* </Switch> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

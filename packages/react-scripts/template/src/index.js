import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import configureStore from './configureStore.dev'
// import { createStore } from 'redux'
// import fooApp from './reducers'
// import registerServiceWorker from './registerServiceWorker'
// Don't do this! You’re bringing DevTools into the production bundle.
import DevTools from './DevTools'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()

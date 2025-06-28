import { StrictMode,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import {ThemeProvider } from 'styled-components'

import App from './App.jsx'
import store from './store/index'
import theme from './assets/theme'

import "normalize.css"
import "./assets/css/index.less"


createRoot(document.getElementById('root')).render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App></App>
        </HashRouter>
      </ThemeProvider>
    </Provider>
 </Suspense>
)

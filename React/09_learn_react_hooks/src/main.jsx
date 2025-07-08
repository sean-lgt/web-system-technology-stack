import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import App from './01_不使用hook/App.jsx'
// import App from './02_计时器实现对比/App.jsx'
// import App from './03_useState的使用/App.jsx'
// import App from './04_useEffect的使用/App.jsx'
// import App from './05_useContext的使用/App.jsx'
// import App from './06_useReducer的使用(了解)/App.jsx'
// import App from './07_useCallback的使用/App.jsx'
// import App from './08_useMemo的使用/App.jsx'
// import App from './09_useRef的使用/01_useRef绑定DOM.jsx'
// import App from './10_useImperativeHandle使用/App.jsx'
// import App from './11_useLayoutEffect使用/02_切换数字-useEffect.jsx'
// import App from './12_自定义Hooks/App.jsx'
// import App from './13_redux中的hooks/App.jsx'
// import App from './14_useId的使用/App.jsx'
import App from './15_useTransition使用/02_useDeferredValue的使用.jsx'
import { UserContext, ThemeContext } from './05_useContext的使用/context'
import { Provider } from "react-redux"
import store from './13_redux中的hooks/store';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={{ name: "why", level: 99 }}>
      <ThemeContext.Provider value={{ color: "red", size: 30 }}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>,
)

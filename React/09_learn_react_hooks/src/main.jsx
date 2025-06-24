import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import App from './01_不使用hook/App.jsx'
// import App from './02_计时器实现对比/App.jsx'
// import App from './03_useState的使用/App.jsx'
// import App from './04_useEffect的使用/App.jsx'
import App from './05_useContext的使用/App.jsx'
import { UserContext, ThemeContext } from './05_useContext的使用/context'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={{ name: "why", level: 99 }}>
      <ThemeContext.Provider value={{ color: "red", size: 30 }}>
        <App />
      </ThemeContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>,
)

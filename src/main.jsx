import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App1 from './App1.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App1 />
    </Provider>
        

  </StrictMode>,
)

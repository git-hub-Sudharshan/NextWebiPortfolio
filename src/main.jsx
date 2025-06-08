import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/whyChooseUs.css'
import "aos/dist/aos.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
    </BrowserRouter>
)

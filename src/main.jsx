import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import { LocaleProvider } from './i18n.jsx'

createRoot(document.getElementById('root')).render(
  <LocaleProvider>
    <App />
  </LocaleProvider>,
)

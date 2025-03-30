import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'tailwindcss'

createRoot(document.getElementById('root')!).render(
    <App />
)

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BG from './assets/img/bg.jpg'

createRoot(document.getElementById('root')).render(
    <>
        <img src={BG} className='img-bg' />
        <App />
    </>
)

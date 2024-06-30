import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import AppRouter from "./Router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <div className="main k-grid">
            <AppRouter/>
        </div>
    </React.StrictMode>,
)

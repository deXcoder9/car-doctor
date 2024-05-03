import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Root';
import AuthProvider from './Auth Provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-[1140px] mx-auto">
    <React.StrictMode>
      <AuthProvider>
   <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>
  </div>
)

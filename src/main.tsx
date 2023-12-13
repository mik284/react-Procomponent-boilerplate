import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <ConfigProvider locale={enUS} theme={{
          token: {
            colorPrimary: "#6c1c2c",
            colorBgContainer: "#f6ffed",
          },
        }}>
    <App />
        </ConfigProvider>
  </React.StrictMode>,
)

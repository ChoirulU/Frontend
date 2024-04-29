import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import IndukMahasiswa from './Induk-mahasiswa.jsx'
import Navbar from './assets/componen/Navbar.jsx'
import 'flowbite';
import Sidebar from './assets/componen/Sidebar.jsx'
import Layout from './assets/componen/Layout.jsx'
import Home from './assets/Pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <IndukMahasiswa /> */}
    {/* <Navbar />
    <Sidebar /> */}
    {/* <Layout /> */}
    {/* <Home /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

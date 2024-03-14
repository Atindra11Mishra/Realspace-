import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './component/Contact/Contact.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from './component/About/About.jsx'
import Projects from './component/Home/projects/Projects.jsx'
import Newproject from './component/Home/Newproject/Newproject.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects/>} />
      <Route path="contact" element={<Contact />} />
      <Route path='New' element={<Newproject/>}/>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)

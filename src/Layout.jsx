
import Footer from './component/Header/Footer'

import Header from './component/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Layout
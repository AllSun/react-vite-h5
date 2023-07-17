// App.jsx
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import routes from '@/router'
import { ConfigProvider } from 'zarm'
import zhCN from 'zarm/lib/config-provider/locale/zh_CN'
import 'zarm/dist/zarm.css'
import NavBar from '@/components/NavBar';

function App() {
  return <Router>
    <ConfigProvider primaryColor={'#007fff'}>
      <>
       <Routes>
        {routes.map(route => <Route exact key={route.path} path={route.path} element={<route.component />} />)}
       </Routes>
      <NavBar showNav={showNav} />
     </>
    </ConfigProvider>
    <NavBar showNav={true} />
  </Router>

}

export default App


import React from 'react'
import Header from './Header'
import "./Layout.css"

import StudentDetail from './StudentDetail'
import DisplayTime from './DisplayTime'
import Modules from './DropdownMenu'
import LoginAndOutClass from './LoginAndOutClass'
import LoginTime from './LoginTime'
import LogoutTime from './LogoutTime'
const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <div className="body">
        <StudentDetail />
        <DisplayTime />
        <Modules />
        <LoginTime />
        <LogoutTime />
        <LoginAndOutClass />
      </div>
    </div>
  );
}

export default Layout

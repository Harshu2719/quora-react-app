import React from 'react'
import HeaderComponent from '../../Layout/Header/HeaderComponent'
import LogoutButtonComponent from '../../Layout/Header/LogoutButtonComponent'

const ProfilePage = () => {
  return (
    <>
    <HeaderComponent />
    <div>This is profile page</div>
    <LogoutButtonComponent />
    </>
  )
}

export default ProfilePage
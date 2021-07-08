import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'

function PasswordList() {
  const passwords = useSelector((state) => state.passwords)

  const passwordList = passwords.map((pass, index) => {
    return (
      <div key={index}>
        name: <b>{pass.name}</b> password: <b>{pass.password}</b>
      </div>)
  })
  
  return (
    <div>
      {passwordList}
    </div>
  )
}

export default PasswordList

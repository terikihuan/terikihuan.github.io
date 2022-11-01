import React from 'react'
import './_miniComponent.css'

const Logo = ({fontSize}) => {

  return (
    <div className="logo" style={{fontSize: fontSize || {}}}>Huan</div>
  )
}

export default Logo
import React from 'react'

import Logo from '../images/property-flow-logo.jpg'

const Header = () => {
  return (
    <div className="w-full flex justify-center items-center mb-10 shadow-lg">
        <img src={Logo} alt="Property Flow Logo" />
    </div>
  )
}

export default Header
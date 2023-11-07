import React from 'react'

export default function Header({onDarkModeClick, isDarkMode}) {
    return (
    <div className="header">
        <h2>Shopster</h2>
        <button  onClick={onDarkModeClick} value= {isDarkMode} className="header-button">
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </div>
  )
}

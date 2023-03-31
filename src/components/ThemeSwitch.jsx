import React from 'react';

export default function ThemeSwitch() {
  const [darkToggle, setDarkToggle] = React.useState(false)
  return (
    <div
      className={`   py-auto absolute right-2.5 ${
        darkToggle && 'dark'
      }`}
    >
      <label className="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span className="slideBtnTg round"></span>
      </label>
    </div>
  )
}
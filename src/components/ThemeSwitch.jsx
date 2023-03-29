import React from 'react';

export default function ThemeSwitch() {
  const [darkToggle, setDarkToggle] = React.useState(false)
  return (
    <div
      class={`   py-auto absolute right-2.5 ${
        darkToggle && 'dark'
      }`}
    >
      <label class="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span class="slideBtnTg round"></span>
      </label>
    </div>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [changeIconTheme, setChangeIconTheme] = useState(true)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme =
      storedTheme === 'dark' ||
      (!storedTheme && systemPrefersDark)
        ? 'dark'
        : 'light'

    document.documentElement.setAttribute('data-theme', initialTheme)
    setTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
    setChangeIconTheme(!changeIconTheme)
  }

  return (
    <button 
      onClick={() => toggleTheme()}
      className="flex items-center cursor-pointer hover:bg-[#9595954D] h-[30px] w-fit md:w-[50px] text-[#0A0A0A] dark:text-white rounded-3xl justify-center px-2 md:px-3 transition duration-150 ease-in-out">
      {changeIconTheme ? <LuSun /> : <FaRegMoon size={14}/> }
    </button>
  )
}
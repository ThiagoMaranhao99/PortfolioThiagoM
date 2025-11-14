'use client'

import { GoHome } from "react-icons/go";
import { PiUserCircle } from "react-icons/pi";
import { TbTable } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
import { PiNotebook } from "react-icons/pi";
import { useLanguage } from '@/context/LanguageContext'
import ThemeToggle from "./ThemeToggle";



export default function Header() {
  const { translations, toggleLanguage, language } = useLanguage();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent flex items-center justify-center pt-5">
      <div
          className="max-w-[95vw] h-[42px] px-2 gap-2 rounded-3xl backdrop-blur-lg flex flex-wrap items-center justify-center border border-[#262626] dark:border-[#9595954d] overflow-hidden
          shadow-[0_3px_5px_rgba(0,0,0,0.5)] dark:shadow-[0_3px_5px_rgba(255,255,255,0.1)]"
          >
        <button
          onClick={() =>
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
          } 
          className="flex items-center cursor-pointer hover:bg-[#9595954D] h-[30px] w-fit md:w-[50px] text-[#0A0A0A] dark:text-white rounded-3xl justify-center px-2 md:px-3 transition duration-150 ease-in-out">
          <GoHome />
        </button>

        <div className="h-[30px] w-[1px] dark:bg-[#9595954d] bg-[#0A0A0A]"></div>

        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex gap-1 items-center cursor-pointer hover:bg-[#9595954D] h-[30px] w-fit text-[#0A0A0A] dark:text-white rounded-xl justify-center px-2 transition duration-150 ease-in-out">
            <PiUserCircle />
            <p className="hidden text-[13px] md:flex text-[#0A0A0A] dark:text-white">{translations.header.about}</p>
          </button>
          <button
            onClick={() =>
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex gap-1 items-center cursor-pointer hover:bg-[#9595954D] h-[30px] w-fit text-[#0A0A0A] dark:text-white rounded-xl justify-center px-2 transition duration-150 ease-in-out">
            <TbTable />
            <p className="hidden md:flex text-[13px] text-[#0A0A0A] dark:text-white">{translations.header.projects}</p>
          </button>
          <button
            onClick={() =>
              document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex gap-1 items-center cursor-pointer hover:bg-[#9595954D] h-[30px] w-fit text-[#0A0A0A] dark:text-white rounded-xl justify-center px-2 transition duration-150 ease-in-out">
            <PiNotebook />
            <p className="hidden md:flex text-[13px] text-[#0A0A0A] dark:text-white">{translations.header.education}</p>
          </button>
          <button
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex gap-1 items-center cursor-pointer hover:bg-[#9595954D] h-[30px] w-fit text-[#0A0A0A] dark:text-white rounded-xl justify-center px-2 transition duration-150 ease-in-out">
            <LuPhone />
            <p className="hidden md:flex text-[13px] text-[#0A0A0A] dark:text-white">{translations.header.contact}</p>
          </button>
        </div>

        <div className="h-[30px] w-[1px] dark:bg-[#9595954d] bg-[#0A0A0A]"></div>
    
        <ThemeToggle />
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center cursor-pointer hover:bg-[#9595954D] h-[30px] w-fit md:w-[50px] rounded-3xl px-2 md:px-3 transition duration-150 ease-in-out"
        >
          <p className="text-[13px] text-[#0A0A0A] dark:text-white">{language === 'pt' ? 'EN' : 'PT'}</p>
        </button>

      </div>
    </div>
  )
}
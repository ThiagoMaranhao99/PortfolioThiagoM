'use client'

import { useLanguage } from "@/context/LanguageContext";
import RevealOnScroll from "./RevealOnScroll";
import Link from "next/link";

export default function Footer() {
  const { translations } = useLanguage();
  return (
    <RevealOnScroll delay={0}>
      <div className="flex items-center flex-col px-8 md:px-28 py-20">
        <div className="w-full px-0 md:px-28 flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-40">
          <div className="flex flex-col text-center w-full h-fit px-10 sm:px-0 md:w-[70%] sm:w-[50%] lg:w-[40%] xl:w-[30%]">
            <h2 className="text-[20px] w-full font-semibold text-black dark:text-[#ededed]">Anselmo Ferrer</h2>
            <h3 className="text-black/70 dark:text-[#d4d4d4] text-[12px]">{translations.footer.desc}</h3>
          </div>
          <div className="flex gap-10">
            <div className="flex items-start flex-col">
              <p className="text-black dark:text-[#ededed] text-md">General</p>
              <button onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })} className="dark:text-[#9595954d] text-black/30 cursor-pointer hover:text-black dark:hover:text-[#9c9c9c] text-sm">{translations.footer.home}</button>
              <button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })} className="dark:text-[#9595954d] text-black/30 cursor-pointer hover:text-black dark:hover:text-[#9c9c9c] text-sm">{translations.footer.about}</button>
              <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="dark:text-[#9595954d] text-black/30 cursor-pointer hover:text-black dark:hover:text-[#9c9c9c] text-sm">{translations.footer.projects}</button>
              <button onClick={() => document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' })} className="dark:text-[#9595954d] text-black/30 cursor-pointer hover:text-black dark:hover:text-[#9c9c9c] text-sm">{translations.footer.education}</button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="dark:text-[#9595954d] text-black/30 cursor-pointer hover:text-black dark:hover:text-[#9c9c9c] text-sm">{translations.footer.contact}</button>
            </div>
            <div className="flex flex-col">
              <p className="text-black dark:text-[#ededed] text-md">{translations.footer.socials}</p>
              <Link href="https://br.linkedin.com/in/anselmo-ferrer" target="_blank" rel="noopener noreferrer" className="dark:text-[#9595954d] text-black/30 cursor-pointer hover:text-black dark:hover:text-[#9c9c9c] text-sm">Linkedin</Link>
              <Link href="https://github.com/Anselmo-Ferrer" target="_blank" rel="noopener noreferrer" className="dark:text-[#9595954d] text-black/30 cursor-pointer hover:text-black dark:hover:text-[#9c9c9c] text-sm">Github</Link>
              <Link href="mailto:anselmoferrer.dev@gmail.com?subject=Contato&body=Olá, Anselmo!" className="dark:text-[#9595954d] text-black/30 cursor-pointer hover:text-black dark:hover:text-[#9c9c9c] text-sm">Email</Link>
            </div>
          </div>

        </div>
        <div className="shrink-0 my-20 bg-neutral-800 h-[1px] w-full bg-gradient-to-r from-[#171717] via-[#525252] to-[#171717]" />
        <p className="text-black dark:text-[#9c9c9c] text-[10px] md:text-sm ">{translations.footer.copyright}</p>
      </div>
    </RevealOnScroll>
  )
}
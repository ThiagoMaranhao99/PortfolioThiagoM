import React from "react";
import { VscArrowDown } from "react-icons/vsc";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { PiReadCvLogoLight } from "react-icons/pi";

export default function HomeSection() {
  const translations = {
    home: {
      title: "Olá, eu sou Thiago",
      subtitle: "Desenvolvedor Front-end apaixonado por criar interfaces modernas e funcionais.",
      button: "Ver Projetos",
    },
  };

  return (
<section
  id="home"
  className="h-screen w-full flex flex-col justify-center items-center text-center sm:px-6 md:px-12 gap-6 pt-0"
>



    <div className="flex flex-col items-center text-center gap-3 mt-8">
        <h1 className="text-2xl sm:text-4xl md:text-6xl 2xl:text-7xl font-bold text-white">
            {translations.home.title}
        </h1>
        <p className="text-[#B2B2B2] text-[14px] md:text-xl max-w-2xl">
            {translations.home.subtitle}
        </p>
    </div>

      
      <div className="flex flex-col w-full justify-center items-center md:flex-row md:items-center mt-10 gap-6">
        <div className="flex gap-4">
          <a
            className="text-[#242424] dark:text-white transition-transform duration-300 hover:scale-110"
            href="https://github.com/ThiagoMaranhao99"
            target="_blank"
           
          >
            <LuGithub size={24} />
          </a>

          <a
            className="text-[#242424] dark:text-white transition-transform duration-300 hover:scale-110"
            href="https://www.linkedin.com/in/thiago-maranhao-546b20303/"
            target="_blank"
         
          >
            <CiLinkedin size={24} />
          </a>

          <a
            className="text-[#242424] dark:text-white transition-transform duration-300 hover:scale-110"
            href="mailto:thiagomaranhao11@gmail.com?subject=Contato&body=Olá, Thiago!"
          >
            <MdOutlineEmail size={24} />
          </a>

          <a
            className="text-[#242424] dark:text-white transition-transform duration-300 hover:scale-110"
            href="/curriculo.pdf"
            target="_blank"
            
          >
            <PiReadCvLogoLight size={24} />
          </a>
        </div>
      </div>

     
      <div className="shrink-0 mt-40 h-[1px] w-full bg-gradient-to-r from-[#d4d4d4] via-[#a3a3a3] to-[#d4d4d4] dark:from-[#171717] dark:via-[#525252] dark:to-[#171717]" />
    </section>
  );
}

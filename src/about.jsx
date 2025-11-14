import React from "react";
import { PiUserCircle } from "react-icons/pi";
import imagePerfil from "./assets/perfil3.jpg";
import StackIconsComponent from "./Stck-icons";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function AboutSection() {
  const translations = {
    about: {
      title: "Sobre",
      title2: "Mim",
      stack: "Tecnologias que utilizo:",
      language: "Idiomas:",
      english: "Inglês",
      portuguese: "Português",
      text: "Sou Thiago Maranhão, estudante de Ciência da Computação na Universidade de Fortaleza (UNIFOR), atualmente cursando o 4º semestre. Sou apaixonado por tecnologia e estou sempre em busca de aprender e evoluir como desenvolvedor. Tenho interesse especial por desenvolvimento web e mobile, trabalhando com ferramentas e linguagens como React, TypeScript, JavaScript, Node.js e MongoDB. Gosto de entender como tudo funciona por trás das aplicações, tanto no front-end quanto no back-end, unindo lógica e criatividade para construir soluções funcionais e bem estruturadas. Também me interesso por temas como algoritmos, estruturas de dados e padrões de projeto, pois acredito que uma boa base teórica é essencial para crescer na área. Meu objetivo é conquistar minha primeira oportunidade profissional em TI e aplicar na prática o que venho aprendendo na faculdade e em projetos pessoais."
    },
  };

  return (
    <section
      id="about"
      className="h-fit xl:h-screen w-full flex flex-col justify-start px-6 sm:px-12 gap-14 py-10 md:py-40 lg:py-10"
    >
      <RevealOnScroll delay={0}>
        <div className="w-full flex items-center flex-col gap-5">
          <div className="flex items-center text-black dark:text-white text-[14px] justify-center backdrop-blur-lg gap-3 border dark:border-[#9595954d] border-black px-4 py-4 rounded-full shadow-[0_5px_5px_rgba(0,0,0,0.5)] dark:shadow-[0_4px_5px_rgba(255,255,255,0.1)]">
            <PiUserCircle size={24} />
          </div>

          <div className="flex items-center gap-2">
            <h3 className="text-4xl sm:text-5xl font-bold text-black dark:text-[#ededed]">
              {translations.about.title}
            </h3>
            <h3 className="text-4xl sm:text-5xl font-bold relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#00ff95]/30 via-[#00ff95] to-[#00ff95]/30 transition-colors">
              {translations.about.title2}
            </h3>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="flex flex-col lg:flex-row justify-center sm:items-center">
          <div className="w-fit h-fit py-8 px-8 backdrop-blur-lg border border-[#9595954d] gap-3 transition-color duration-300 ease-in-out rounded-xl hover:border-[#6b6a6a] shadow-[0_8px_10px_rgba(0,0,0,0.5)] dark:shadow-[0_8px_10px_rgba(255,255,255,0.1)]">
            <img
              src={imagePerfil}
              alt="Foto de perfil"
              className="md:h-[300px] md:w-[300px] rounded-xl"
            />

            <div>
              <p className="mb-3 mt-5 text-[16px] text-black dark:text-[#ededed]">
                {translations.about.stack}
              </p>
              <StackIconsComponent />
            </div>

            <div>
              <p className="mb-3 mt-5 text-[16px] text-black dark:text-[#ededed]">
                {translations.about.language}
              </p>
              <div className="flex gap-3 ">
                <div className="border-1 cursor-default border-[rgba(59,130,246,1)] flex items-center bg-[rgba(59,130,246,0.2)] px-3 py-[0.5] rounded-xl gap-1 shadow-inner backdrop-blur-sm transition-all duration-300 hover:bg-blue-400/30">
                  <span className="shrink-0 rounded-full block w-2 h-2 bg-[rgba(59,130,246,1)] shadow-[0_0_6px_rgba(59,130,246,0.6),0_0_12px_rgba(59,130,246,0.5)]" />
                  <p className="text-[13px] text-blue-800 dark:text-blue-100">
                    {translations.about.english}
                  </p>
                </div>

                <div className="flex cursor-default items-center gap-2 rounded-full border border-emerald-400 bg-emerald-400/20 px-3 py-1 shadow-inner backdrop-blur-sm transition-all duration-300 hover:bg-emerald-400/30">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(34,197,94,0.8),0_0_8px_rgba(34,197,94,0.6)]" />
                  <p className="text-xs dark:text-emerald-100 text-emerald-800 font-medium">
                    {translations.about.portuguese}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%] lg:w-[60%] h:fit xl:h-[450px] pt-8 pb-4 xl:py-4 lg:px-8 gap-3">
        <h3 className="relative w-full flex justify-center text-2xl sm:text-3xl font-semibold mb-4 text-black dark:text-[#ededed]">
            Thiago Maranhão
        </h3>

            <p className="text-[12px] md:text-[14px] text-[#9c9c9c]">
              {translations.about.text}
            </p>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="shrink-0 bg-neutral-800 my-20 h-[1px] w-full bg-gradient-to-r from-[#d4d4d4] via-[#a3a3a3] to-[#d4d4d4] dark:from-[#171717] dark:via-[#525252] dark:to-[#171717]" />
      </RevealOnScroll>
    </section>
  );
}

import RevealOnScroll from "./ui/RevealOnScroll";
import { PiNotebook } from "react-icons/pi";
import { HoverEffect } from "./ui/card-hover-effect"; 

export default function EducationSection() {
  const educations = [
    {
      title: "Início da Faculdade — Ciência da Computação",
      description:
        "Começo da jornada em Ciência da Computação e aprendizado de programação.",
      link: "#", 
    },
    {
      title: "JavaScript do Básico ao Avançado – Udemy",
      description:
        "Fundamentos, DOM, assíncrono, boas práticas e projetos práticos.",
      link: "#",
    },
    {
      title: "Introdução à Inteligência Artificial – Udemy",
      description:
        "Conceitos fundamentais de IA e aplicações reais.",
      link: "#",
    },
  ];

  return (
    <section
      id="education"
      className="h-fit w-full flex flex-col xl:flex-row justify-between px-6 sm:px-12 gap-6 py-10"
    >
     
      <div className="w-[100%] xl:w-[40%]">
        <RevealOnScroll delay={0}>
          <div
            className="flex w-fit items-center text-black dark:text-white text-[14px] 
            backdrop-blur-lg gap-3 border border-black dark:border-[#9595954d] 
            px-4 py-3 rounded-xl mb-4 shadow-[0_5px_5px_rgba(0,0,0,0.5)] 
            dark:shadow-[0_4px_5px_rgba(255,255,255,0.1)]"
          >
            <PiNotebook size={24} />
          </div>

          <h1 className="relative flex items-center gap-2 self-start text-3xl md:text-5xl font-bold mb-4 text-black dark:text-[#ededed]">
            Educação
          </h1>

          <h3 className="text-[12px] md:text-[14px] w-[100%] md:w-[80%] text-black/70 dark:text-[#d4d4d4]">
            Minha trajetória de estudos e desenvolvimento profissional.
          </h3>
        </RevealOnScroll>
      </div>

    
      <RevealOnScroll delay={0.1}>
        <div className="relative w-[100%] lg:w-[100%]">
          <HoverEffect
            items={educations}
            className="w-full lg:w-[90%]"
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}

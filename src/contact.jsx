import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

import RevealOnScroll from "./ui/RevealOnScroll";
import ContactCard from "./ui/ContactCard";

export default function ContactSection() {
  return (
    <section id="contact" className="h-fit w-full flex flex-col justify-between px-6 sm:px-12 gap-6">

      
      <RevealOnScroll delay={0}>
        <div className="flex items-center gap-4">

          <h2 className="relative flex items-center gap-2 text-3xl md:text-4xl sm:text-5xl font-bold">
            <span className="text-black dark:text-[#ededed]">
              Entre em{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#00ff95]/30 via-[#00ff95] to-[#00ff95]/30">
                Contato
              </span>
            </span>
          </h2>

          <div className="flex items-center text-black dark:text-white text-[14px] justify-center 
            backdrop-blur-lg gap-3 border border-black dark:border-[#9595954d] 
            px-4 py-3 rounded-xl shadow-[0_5px_5px_rgba(0,0,0,0.5)] 
            dark:shadow-[0_4px_5px_rgba(255,255,255,0.1)]">
            <LuPhone size={24} />
          </div>

        </div>
      </RevealOnScroll>

      
      <RevealOnScroll delay={0.1}>
        <div className="flex flex-col xl:flex-row gap-5 z-10 relative w-full">

          <ContactCard
            icon={<CiLinkedin size={20} />}
            background="LINKEDIN"
            href="https://www.linkedin.com/in/thiago-maranhao-546b20303/"
            views="LinkedIn"
          />

          <ContactCard
            icon={<MdOutlineEmail size={20} />}
            background="EMAIL"
            href="mailto:thiagomaranhao11@gmail.com?subject=Contato&body=Olá!"
            views="Email"
          />

          <ContactCard
            icon={<LuGithub size={20} />}
            background="GITHUB"
            href="https://github.com/ThiagoMaranhao99"
            views="GitHub"
          />

        </div>
      </RevealOnScroll>

    </section>
  );
}

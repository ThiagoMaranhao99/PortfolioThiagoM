import { useState } from "react";
import RevealOnScroll from "./ui/RevealOnScroll";

import NbaImagem from './assets/nbaimage.jpg';
import NbastatsImage from './assets/images.png';
import FinanceiroImage from './assets/financeiro.jpg';
import InvertedIndexImage from './assets/Juridico.jpg';
import CepImage from './assets/cep.png';

import { FaRegFolderOpen } from "react-icons/fa";
import { VscArrowDown, VscArrowUp } from "react-icons/vsc";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export default function ProjectsSection() {

  const [seeMore, setSeeMore] = useState(false);

  return (
    <section id="projects" className="h-fit w-full flex flex-col items-start px-6 sm:px-12 py-10 xl:py-30">

      
      <RevealOnScroll delay={0}>
        <div className="w-full flex items-center justify-center gap-4">

          <div className="flex items-center text-black dark:text-white text-[14px] justify-center 
            backdrop-blur-lg gap-3 border border-black dark:border-[#9595954d] 
            px-4 py-3 rounded-xl shadow-[0_5px_5px_rgba(0,0,0,0.5)] 
            dark:shadow-[0_4px_5px_rgba(255,255,255,0.1)]">
            <FaRegFolderOpen size={24} />
          </div>

          <h2 className="relative flex items-center gap-2 self-center text-2xl sm:text-3xl md:text-5xl font-bold text-black dark:text-[#ededed]">
            Meus <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#00ff95]/30 via-[#00ff95] to-[#00ff95]/30">Projetos</span>
          </h2>

        </div>
      </RevealOnScroll>

    
      <RevealOnScroll delay={0.15}>
        <BentoGrid className="md:grid-cols-4 mt-14">

          
          <BentoGridItem
            header={<img src={NbaImagem} className="rounded-lg w-full h-40 object-cover" />}
                icon={
                    <a
                      href="https://github.com/ThiagoMaranhao99/Site_NBA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:scale-110 transition-transform"
                    >
                      <FaRegFolderOpen size={22} className="text-[#00ff95]" />
                    </a>
                  }
            title="Nba Players"
            description="Aplicação para verificar jogadores da NBA."
          />

        
          <BentoGridItem
            header={<img src={NbastatsImage} className="rounded-lg w-full h-40 object-cover" />}
                icon={
                    <a
                      href="https://github.com/ThiagoMaranhao99/Chess_UNIFOR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:scale-110 transition-transform"
                    >
                      <FaRegFolderOpen size={22} className="text-[#00ff95]" />
                    </a>
                  }
            title="Chess Unifor"
            description="Projeto de um Jogo de Xadrez."
          />

        
          <BentoGridItem
            header={<img src={InvertedIndexImage} className="rounded-lg w-full h-40 object-cover" />}
                icon={
                    <a
                      href="https://github.com/ThiagoMaranhao99/AppDocumentosJuridicos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:scale-110 transition-transform"
                    >
                      <FaRegFolderOpen size={22} className="text-[#00ff95]" />
                    </a>
                  }
            title="Documentos Juridicos"
            description="Site para organização de projetos jurídicos."
          />

      
          <BentoGridItem
            header={<img src={CepImage} className="rounded-lg w-full h-40 object-cover" />}
                icon={
                    <a
                      href="https://github.com/ThiagoMaranhao99/ConsultaCEP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:scale-110 transition-transform"
                    >
                      <FaRegFolderOpen size={22} className="text-[#00ff95]" />
                    </a>
                  }
            title="Consulta de CEP"
            description="Site para consultas de CEP"
            
            
          />

         
          {seeMore && (
            <BentoGridItem
              header={<img src={FinanceiroImage} className="rounded-lg w-full h-40 object-cover" />}
                icon={
                    <a
                      href=""
                      target="_blank"
                      rel="Em Desenvolvimento"
                      className="inline-block hover:scale-110 transition-transform"
                    >
                      <FaRegFolderOpen size={22} className="text-[#00ff95]" />
                    </a>
                  }
              title="Software Financeiro (em Desenvolvimento)"
              description="Software para organização financeira."
              
            />
          )}

        </BentoGrid>
      </RevealOnScroll>

     
      <div className="flex w-full justify-center mb-20 mt-10">
        <RevealOnScroll delay={0.1}>
          <button
            onClick={() => setSeeMore(!seeMore)}
            className="flex text-black dark:text-white items-center text-[14px] cursor-pointer 
              transition-color duration-300 ease-in-out hover:bg-[#9595954D] 
              dark:hover:bg-[#242424] justify-center dark:bg-transparent bg-[#EDEDED] 
              dark:backdrop-blur-lg gap-3 border border-[#9595954d] px-4 py-3 
              rounded-xl shadow-[0_3px_5px_rgba(0,0,0,0.5)] 
              dark:shadow-[0_3px_5px_rgba(255,255,255,0.1)]"
          >
            {seeMore ? "Ver menos" : "Ver mais"}
            {seeMore ? (
              <VscArrowUp size={24} className="border border-[#9595954d] p-1 rounded-md" />
            ) : (
              <VscArrowDown size={24} className="border border-[#9595954d] p-1 rounded-md" />
            )}
          </button>
        </RevealOnScroll>
      </div>

    </section>
  );
}

import { ReactNode } from "react";
import { LuSend } from "react-icons/lu";

type Props = {
  background: string;
  href: string;
  views: string;
  icon?: ReactNode;
};

export default function ContactCard({
  background,
  href,
  views,
  icon
}: Props) {
  return (
    <div className="w-full xl:w-1/3 relative cursor-default group backdrop-blur-lg transition-color duration-300 ease-in-out border dark:border-[#9595954d] border-[#9595954d] dark:border-1 border-3 hover:border-[#a3a3a3] rounded-2xl dark:rounded-xl shadow-[0_5px_8px_rgba(0,0,0,0.5)] dark:shadow-[0_5px_8px_rgba(255,255,255,0.1)]">
      <div className="group/retro-card-with-views">
        <div className="block h-full rounded-md default-ring">
          <div className="rounded-xl inset">

            {/* Header */}
            <div className="flex justify-between xl:gap-5 backdrop-blur-xl border-b rounded-t-xl border-[#9595954d] px-6 py-4 bg-gradient-to-r from-white/30 via-white/30 to-emerald-400/80 dark:from-black/30 dark:via-black/30 dark:to-emerald-400/30">
              
              {/* Views */}
              <div className="flex items-center relative">
                <p className="c1 txt-secondary flex items-center gap-2 text-black dark:text-[#ededed]">
                  {icon}
                  <span>{views}</span>
                </p>
              </div>

              {/* Botão */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-black dark:text-[#ededed] cursor-pointer items-center transition-color duration-300 ease-in-out hover:border-emerald-800 
                dark:hover:border-emerald-400 text-[14px] justify-center backdrop-blur-lg gap-3 dark:hover:bg-emerald-700 hover:bg-emerald-500 border border-[#9595954d] 
                px-6 py-2 rounded-xl"
              >
                <LuSend />
                Enviar
              </a>

            </div>

            {/* Body */}
            <div className="-mx-px min-h-[100px] md:min-h-[150px] isolate relative px-6 py-6 rounded-xl bg-neutral-925 overflow-hidden">
              <span
                className="absolute z-[-1] -right-4 -bottom-8 text-9xl font-rethink font-extrabold text-neutral-900 
                [mask-image:linear-gradient(rgba(0,0,0,0.07)_0%,rgba(0,0,0,0)_110%)] 
                dark:[mask-image:linear-gradient(rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_110%)]"
                style={{
                  textShadow:
                    "-0.3px 0 rgba(82, 82, 82, 0.8), 0 0.3px rgba(82, 82, 82, 0.8), 0.3px 0 rgba(82, 82, 82, 0.8), 0 -0.3px rgba(82, 82, 82, 0.8)",
                }}
              >
                {background}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

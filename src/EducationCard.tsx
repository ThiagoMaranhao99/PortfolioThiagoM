import React from "react";

type EducationCardProps = {
  year: string;
  top: string;
  title: string;
  description: string;
};

export default function EducationCard({
  year,
  top,
  title,
  description,
}: EducationCardProps) {
  return (
    <div className="w-full xl:w-[80%] group backdrop-blur-lg border border-[#9595954d] border-3 hover:border-emerald-400 transition-color duration-300 ease-in-out rounded-xl w-[800px] mb-6 shadow-[0_4px_6px_rgba(0,0,0,0.5)] dark:shadow-[0_4px_6px_rgba(255,255,255,0.1)]">
      <div className="block h-full rounded-md default-ring">
        <div className="isolate relative px-6 py-9 rounded-xl bg-neutral-925 overflow-hidden">
          {/* Background Year */}
          <span
            className="absolute z-[-1] -right-4 -bottom-8 text-9xl font-extrabold text-neutral-900 [mask-image:linear-gradient(rgba(0,0,0,0.07)_0%,rgba(0,0,0,0)_110%)] dark:[mask-image:linear-gradient(rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_110%)]"
            style={{
              textShadow:
                "-0.3px 0 rgba(82, 82, 82, 0.8), 0 0.3px rgba(82, 82, 82, 0.8), 0.3px 0 rgba(82, 82, 82, 0.8), 0 -0.3px rgba(82, 82, 82, 0.8)",
            }}
          >
            {year}
          </span>

          {/* Views */}
          <div className="flex items-center gap-1.5 text-neutral-500">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(34,197,94,0.8),0_0_8px_rgba(34,197,94,0.6)]" />
            <p className="c1">{top}</p>
          </div>

          {/* Title */}
          <h3 className="h5 mt-3 relative font-semibold">
            <span
              className="text-[14px] text-black dark:text-[#ededed] md:text-[16px] bg-gradient-to-r from-accent/30 via-accent/90 to-accent/30 box-decoration-clone group-hover:opacity-30 opacity-0 transition text-transparent"
              aria-hidden="true"
            >
              {title}
            </span>
            <span className="text-[14px] text-black dark:text-[#ededed] md:text-[16px] absolute left-0 top-0">{title}</span>
          </h3>

          {/* Description */}
          <p className="text-[12px] md:text-[14px] text-[#d4d4d4] mt-2 text-black/70 dark:text-[#d4d4d4]">{description}</p>
        </div>
      </div>
    </div>
  );
}
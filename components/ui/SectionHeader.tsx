import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  Icon?: ReactNode;
};

export default function SectionHeader({
  title,
  subtitle,
  Icon,
}: SectionHeaderProps) {
  return (
    <div className="w-full flex flex-col items-center text-center gap-4">
      <div className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]">
        <div className="flex flex-row items-center justify-center gap-2">
          {Icon}
          <span className="Welcome-text text-[13px]">Services</span>
        </div>
      </div>

      <h2 className="text-[36px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        {title}
      </h2>

      <p className="max-w-[42rem] text-gray-300 text-[16px] leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}


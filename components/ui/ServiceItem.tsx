import type { CSSProperties, ComponentType } from "react";

type IconComponent = ComponentType<{
  className?: string;
  style?: CSSProperties;
}>;

type ServiceItemProps = {
  id: string;
  name: string;
  description: string;
  icon: IconComponent;
};

export default function ServiceItem({
  name,
  description,
  icon: Icon,
}: ServiceItemProps) {
  return (
    <li className="w-full p-5 rounded-2xl border border-[#252134] bg-[#0300144d] hover:bg-[#03001480] transition">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#252134] bg-[#03001466]">
          <Icon className="h-7 w-7 text-[#b49bff]" />
        </div>
        <div>
          <h3 className="text-white text-[18px] font-semibold">{name}</h3>
          <p className="mt-1 text-gray-300 text-[14px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}


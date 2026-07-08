import { createElement } from "react";
import type { CSSProperties, ComponentType } from "react";
import {
  CodeBracketIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiFirebase,
  SiGit,
  SiJetpackcompose,
  SiKotlin,
  SiReact,
  SiSupabase,
} from "react-icons/si";

export type IconComponent = ComponentType<{
  className?: string;
  style?: CSSProperties;
}>;

export const ServicesData: Array<{
  id: string;
  name: string;
  description: string;
  icon: IconComponent;
}> = [
  {
    id: "frontend",
    name: "Frontend Development",
    description:
      "Responsive, accessible interfaces with modern React/Next.js patterns.",
    icon: CodeBracketIcon,
  },
  {
    id: "backend",
    name: "Backend Development",
    description:
      "APIs and server logic with reliable data modeling and performance.",
    icon: ServerStackIcon,
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    description:
      "Clean, tasteful UI with thoughtful spacing, typography, and user flows.",
    icon: PaintBrushIcon,
  },
  {
    id: "fullstack",
    name: "Full-Stack Solutions",
    description:
      "End-to-end development from UI to backend with scalable architecture.",
    icon: CpuChipIcon,
  },
];

export const ServicesApps: Array<{
  id: string;
  title: string;
  icon: IconComponent;
  size: number;
  color: string;
}> = [
  {
    id: "android",
    title: "Android",
    icon: iconFromReactIcons(SiAndroid),
    size: 26,
    color: "#3DDC84",
  },
  {
    id: "kotlin",
    title: "Kotlin",
    icon: iconFromReactIcons(SiKotlin),
    size: 26,
    color: "#7F52FF",
  },
  {
    id: "jetpack-compose",
    title: "Jetpack Compose",
    icon: iconFromReactIcons(SiJetpackcompose),
    size: 26,
    color: "#4285F4",
  },
  {
    id: "react",
    title: "React.js",
    icon: iconFromReactIcons(SiReact),
    size: 26,
    color: "#61DAFB",
  },
  {
    id: "git",
    title: "Git",
    icon: iconFromReactIcons(SiGit),
    size: 26,
    color: "#F05032",
  },
  {
    id: "supabase",
    title: "Supabase",
    icon: iconFromReactIcons(SiSupabase),
    size: 26,
    color: "#3ECF8E",
  },
  {
    id: "firebase",
    title: "Firebase",
    icon: iconFromReactIcons(SiFirebase),
    size: 26,
    color: "#FFCA28",
  },
];

function iconFromReactIcons(Icon: IconType): IconComponent {
  return function WrappedIcon({ className, style }) {
    return createElement(Icon, { className, style });
  };
}


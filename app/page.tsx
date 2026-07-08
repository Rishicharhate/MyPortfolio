import { Hero } from "@/components/main/hero";
import { Services } from "@/components/main/services";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Services />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}

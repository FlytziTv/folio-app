import { Spacing } from "@/app/SZComponents/Spacing";
import Projects from "@/app/SZComponents/WorksPage/Projects";

export default function Works() {
  return (
    <main className="flex flex-col gap-4 bg-background">
      <Spacing size="xs" />
      <Projects />
    </main>
  );
}

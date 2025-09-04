import { About } from "@/app/SZComponents/HomePage/About";
import { Me } from "@/app/SZComponents/HomePage/Me";
import { Spacing } from "@/app/SZComponents/Spacing";

export default function Index() {
  return (
    <main className="flex flex-col gap-4 bg-background">
      <Spacing size="xs" />

      <Me />

      <Spacing size="xs" />

      <About />

      <Spacing size="xs" />
    </main>
  );
}

import { Spacing } from "@/app/SZComponents/Spacing";
import { Setup } from "@/app/SZComponents/StackPage/Setup";

export default function Stack() {
  return (
    <main className="flex flex-col gap-4 bg-background">
      <Spacing size="xs" />
      <Setup />
      <Spacing size="xs" />
    </main>
  );
}

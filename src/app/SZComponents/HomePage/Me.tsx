import { Section } from "../Section";

export const Me = () => {
  return (
    <div className="w-full">
      <Section className="flex justify-center ">
        <div className="flex justify-center flex-col items-center gap-[8px]">
          <img
            src="/icons/pp.png"
            alt="Description"
            width={100}
            height={100}
            className=" mb-[10px] rounded-[50%]"
          />
          <div className="flex italic flex-col items-center">
            <h1 className="font-[perandory] text-5xl font-medium text-foreground">
              Alexis De Jesus
            </h1>
            <p className="text-base font-light text-foreground">
              Etudiant en développement
            </p>
          </div>
          <div className="flex gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/aalexis.in/"
              className="cursor-pointer text-xs border border-solid border-border text-foreground shadow-xs hover:bg-border/70 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-[8px] py-[4px] has-[>svg]:px-3"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alexis-dejesus/"
              className="cursor-pointer text-xs border border-solid border-border text-foreground shadow-xs hover:bg-border/70 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-[8px] py-[4px] has-[>svg]:px-3"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/FlytziTv"
              className="cursor-pointer text-xs border border-solid border-border text-foreground shadow-xs hover:bg-border/70 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-[8px] py-[4px] has-[>svg]:px-3"
            >
              GitHub
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

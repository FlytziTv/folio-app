import { ArrowUpRight, Folder } from "lucide-react";
import { Section } from "../Section";
import { useState } from "react";
import { BASE_URL } from "@/lib/constants";

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <div className="w-full">
      <Section className="flex flex-col items-stretch gap-8">
        <div className="flex items-center gap-[4px]">
          <Folder className="text-foreground size-[22px]" />
          <h2 className="text-lg text-foreground font-semibold">Mes Projets</h2>
        </div>
        <div className="flex flex-row gap-[8px]">
          <div className="flex-1 flex flex-col gap-[4px]">
            {WORKS.map((item, idx) => (
              <WorkCard
                key={item.title + idx}
                {...item}
                onHover={() => setHoveredIdx(idx)}
                isActive={hoveredIdx === idx}
              />
            ))}
          </div>
          <div className="w-[400px] hidden lg:block">
            <img
              src={WORKS[hoveredIdx].image}
              alt={WORKS[hoveredIdx].title}
              width={500}
              height={300}
              className=""
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

const WORKS = [
  {
    link: "/",
    title: "Flytzi",
    description: "Mon portfolio",
    language: "React, Next.js, Tailwind",
    image: `${BASE_URL}works/portfolio.png`, // <-- Ajoute cette ligne (mets le bon chemin)
  },
  // {
  //   link: "https://tansi.dev",
  //   title: "Tansi MAKELE",
  //   description: "Portfolio",
  //   language: "Next.js, Sanity, Tailwind",
  //   image: `${BASE_URL}stack/Intel®-Core™-i5-14400F.png`, // <-- Et ici aussi
  // },
];

type WorkCardProps = {
  title: string;
  description: string;
  link: string;
  language: string;
  image: string;
  onHover: () => void;
  isActive: boolean;
};

const WorkCard = (props: WorkCardProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.link}
      onMouseEnter={props.onHover}
      className={`flex items-center justify-between group px-[16px] py-[8px] rounded-md transition-colors
        ${props.isActive ? "bg-accent/70" : "hover:bg-accent/50"}
      `}
    >
      <h3 className="text-base font-bold text-foreground">{props.title}</h3>
      <p className="text-sm text-foreground">{props.description}</p>
      <p className="inline-block text-foreground text-xs font-mono">
        {props.language}
      </p>
      <ArrowUpRight className="size-[15px] text-foreground" />
    </a>
  );
};

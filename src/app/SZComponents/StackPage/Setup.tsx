import type { ReactNode } from "react";
import { Section } from "../Section";
import { AppWindow, Blocks, BookOpen, LaptopMinimal, Link } from "lucide-react";
import { BASE_URL } from "@/lib/constants";

export const Setup = () => {
  return (
    <div className="w-full">
      <Section className="flex flex-col items-stretch gap-[32px]">
        {/* Liste Setup */}
        <div className="flex-1 flex flex-col rounded-md gap-[8px]">
          <div className="flex items-center gap-[4px]">
            <LaptopMinimal className="text-foreground size-[22px]" />
            <h2 className="text-lg text-foreground font-semibold">
              Mon poste de travail
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[8px]">
            {setup.map((item, idx) => (
              <Stack key={item.title + idx} {...item} />
            ))}
          </div>
        </div>
        {/* Liste Language */}
        <div className="flex-1 flex flex-col rounded-md gap-[8px]">
          <div className="flex items-center gap-[4px]">
            <BookOpen className="text-foreground size-[22px]" />
            <h2 className="text-lg text-foreground font-semibold">
              Mes Languages
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[8px]">
            {language.map((item, idx) => (
              <Stack key={item.title + idx} {...item} />
            ))}
          </div>
        </div>
        {/* Liste Language */}
        <div className="flex-1 flex flex-col rounded-md gap-[8px]">
          <div className="flex items-center gap-[4px]">
            <AppWindow className="text-foreground size-[22px]" />
            <h2 className="text-lg text-foreground font-semibold">
              Mes logiciels
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[8px]">
            {logiciel.map((item, idx) => (
              <Stack key={item.title + idx} {...item} />
            ))}
          </div>
        </div>
        {/* Liste Extension */}
        <div className="flex-1 flex flex-col rounded-md gap-[8px]">
          <div className="flex items-center gap-[4px]">
            <Blocks className="text-foreground size-[22px]" />
            <h2 className="text-lg text-foreground font-semibold">
              Mes extensions
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[8px]">
            {extension.map((item, idx) => (
              <Stack key={item.title + idx} {...item} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

const STACK = [
  {
    categorie: "setup",
    Logo: (
      <img
        src={`${BASE_URL}stack/Intel®-Core™-i5-14400F.png`}
        alt="Image processeur Intel® Core™ i5 14400F"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Intel® Core™ i5 14400F",
    description: "Processeur Pc Fixe",
    link: "https://amzn.eu/d/gSrqm7t",
  },
  {
    categorie: "setup",
    Logo: (
      <img
        src={`${BASE_URL}stack/GEFORCE-RTX®-4070-SUPER.png`}
        alt="Image carte graphique GEFORCE RTX® 4070 SUPER"
        width={70}
        height={70}
        className="h-auto w-auto"
      />
    ),
    title: "RTX® 4070 SUPER",
    description: "Carte Graphique Pc Fixe",
    link: "https://www.ldlc.com/fiche/PB00588184.html",
  },
  {
    categorie: "setup",
    Logo: (
      <img
        src={`${BASE_URL}stack/AOC-Écran-gamer.png`}
        alt="Image écran AOC Écran gamer"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "AOC Écran gamer",
    description: "Ecran Principal",
    link: "https://amzn.eu/d/gndgVm2",
  },
  {
    categorie: "setup",
    Logo: (
      <img
        src={`${BASE_URL}stack/ASUS-VP228DE.png`}
        alt="Image écran ASUS VP228DE"
        width={70}
        height={70}
        className="h-auto w-auto"
      />
    ),
    title: "ASUS VP228DE",
    description: "Ecran Secondaire",
    link: "https://amzn.eu/d/88zeysk",
  },
  {
    categorie: "setup",
    Logo: (
      <img
        src={`${BASE_URL}stack/Apex-3-TKL.png`}
        alt="Image clavier Apex 3 TKL"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Apex 3 TKL",
    description: "Clavier",
    link: "https://amzn.eu/d/0ZbqliC",
  },
  {
    categorie: "setup",
    Logo: (
      <img
        src={`${BASE_URL}stack/Logitech-G-PRO.png`}
        alt="Image souris Logitech G PRO"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Logitech G PRO",
    description: "Souris",
    link: "https://amzn.eu/d/9mYxvH8",
  },
  {
    categorie: "setup",
    Logo: (
      <img
        src={`${BASE_URL}stack/TITANWOLF-XXL.png`}
        alt="Image tapis de souris TITANWOLF XXL"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "TITANWOLF XXL",
    description: "Tapis de souris Bureau",
    link: "https://amzn.eu/d/cdbR1UB",
  },
  {
    categorie: "setup",
    Logo: (
      <img
        src={`${BASE_URL}stack/Hidizs-MS1-Galaxy.png`}
        alt="Image écouteurs Hidizs MS1 Galaxy"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Hidizs MS1 Galaxy",
    description: "Ecouteurs Intra-Auriculaires",
    link: "https://amzn.eu/d/9PuDO2L",
  },
  {
    categorie: "setup",
    Logo: (
      <img
        src={`${BASE_URL}stack/WD-2-To.png`}
        alt="Image disque dur WD 2 To"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "WD 2 To",
    description: "Disque Dur Externe Pc fixe",
    link: "https://amzn.eu/d/8ClqgPr",
  },
  {
    categorie: "setup",
    Logo: (
      <img
        src={`${BASE_URL}stack/LaCie-Rugged-Mini-1To.png`}
        alt="Image disque dur LaCie Rugged Mini 1To"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "LaCie Rugged Mini 1To",
    description: "Disque Dur Principal",
    link: "https://amzn.eu/d/bCx0zFE",
  },
  {
    categorie: "language",
    Logo: (
      <img
        src={`${BASE_URL}stack/html.png`}
        alt="Logo HTML5"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Html",
    description: "// Base du web",
    link: "https://developer.mozilla.org/fr/docs/Web/HTML",
  },
  {
    categorie: "language",
    Logo: (
      <img
        src={`${BASE_URL}stack/css3.png`}
        alt="Logo CSS3"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Css 3",
    description: "// Mise en forme",
    link: "https://developer.mozilla.org/fr/docs/Web/CSS",
  },
  {
    categorie: "language",
    Logo: (
      <img
        src={`${BASE_URL}stack/javascript.png`}
        alt="Logo Javascript"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Javascript",
    description: "// Interactivité du web",
    link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  {
    categorie: "language",
    Logo: (
      <img
        src={`${BASE_URL}stack/vuejs.png`}
        alt="Logo Vue.js"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Vue.js",
    description: "// Framework JavaScript",
    link: "https://vuejs.org/guide/introduction",
  },
  {
    categorie: "language",
    Logo: (
      <img
        src={`${BASE_URL}stack/react.png`}
        alt="Logo React"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "React",
    description: "// Bibliothèque JavaScript",
    link: "https://react.dev/learn",
  },
  {
    categorie: "language",
    Logo: (
      <img
        src={`${BASE_URL}stack/tailwindcss.png`}
        alt="Logo Tailwind CSS"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "tailwindcss",
    description: "// Bibliothèque CSS",
    link: "https://tailwindcss.com/docs/installation/using-vite",
  },
  {
    categorie: "language",
    Logo: (
      <img
        src={`${BASE_URL}stack/nodejs.png`}
        alt="Logo Node.js"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Node.js",
    description: "// Serveur JavaScript",
    link: "https://nodejs.org/fr",
  },
  {
    categorie: "language",
    Logo: (
      <img
        src={`${BASE_URL}stack/python.png`}
        alt="Logo Python"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Python",
    description: "// Scripts & back-end",
    link: "https://www.python.org/",
  },
  {
    categorie: "language",
    Logo: (
      <img
        src={`${BASE_URL}stack/mysql.png`}
        alt="Logo Mysql"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Mysql",
    description: "// Base de données",
    link: "https://dev.mysql.com/doc/",
  },
  {
    categorie: "language",
    Logo: (
      <img
        src={`${BASE_URL}stack/lua.png`}
        alt="Logo Lua"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Lua",
    description: "// Langage de script",
    link: "https://www.lua.org/docs.html",
  },
  {
    categorie: "logiciel",
    Logo: (
      <img
        src={`${BASE_URL}stack/vscode.png`}
        alt="Logo Visual Studio Code"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Visual Studio Code",
    description: "// Éditeur de code",
    link: "https://code.visualstudio.com/",
  },
  {
    categorie: "logiciel",
    Logo: (
      <img
        src={`${BASE_URL}stack/figma.png`}
        alt="Logo Figma"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Figma",
    description: "// Design d'interface",
    link: "https://www.figma.com/fr-fr/",
  },
  {
    categorie: "logiciel",
    Logo: (
      <img
        src={`${BASE_URL}stack/solidworks.png`}
        alt="Logo SolidWorks"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "SolidWorks",
    description: "// CAO 3D",
    link: "https://www.solidworks.com/fr",
  },
  {
    categorie: "logiciel",
    Logo: (
      <img
        src={`${BASE_URL}stack/autocad.png`}
        alt="Logo AutoCad"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "AutoCad",
    description: "// CAO 2D/3D",
    link: "https://www.autodesk.com/fr/products/autocad/overview",
  },
  {
    categorie: "logiciel",
    Logo: (
      <img
        src={`${BASE_URL}stack/fusion360.png`}
        alt="Logo Fusion 360"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Fusion 360",
    description: "// CAO 3D",
    link: "https://www.autodesk.com/fr/products/fusion-360/overview",
  },
  {
    categorie: "logiciel",
    Logo: (
      <img
        src={`${BASE_URL}stack/blender.png`}
        alt="Logo Blender"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Blender",
    description: "// Modélisation 3D",
    link: "https://studio.blender.org/welcome/",
  },
  {
    categorie: "logiciel",
    Logo: (
      <img
        src={`${BASE_URL}stack/git.png`}
        alt="Logo Git"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Git",
    description: "// Gestion de versions",
    link: "https://git-scm.com/",
  },
  {
    categorie: "logiciel",
    Logo: (
      <img
        src={`${BASE_URL}stack/gitextension.png`}
        alt="Logo Git Extension"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Git Extension",
    description: "// Intégration Git",
    link: "https://gitextensions.github.io/",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/Auto_Rename_Tag.png`}
        alt="Logo Auto Rename Tag"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Auto Rename Tag",
    description: "// Renommer automatiquement les balises",
    link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/Color_Highlighter.png`}
        alt="Logo Color Highlighter"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Color Highlighter",
    description: "// Surligner la syntaxe",
    link: "",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/EditorConfig.png`}
        alt="Logo EditorConfig"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "EditorConfig",
    description: "// Gestion des configurations de code",
    link: "https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/Error_Lens.png`}
        alt="Logo Error Lens"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Error Lens",
    description: "// Met en surbrillance les erreurs et avertissements",
    link: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/ESLint.png`}
        alt="Logo ESLint"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "ESLint",
    description: "// Linter pour JavaScript",
    link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/GitHub_Copilot.png`}
        alt="Logo GitHub Copilot"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "GitHub Copilot",
    description: "// Assistant de code AI",
    link: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/GitHub_Theme.png`}
        alt="Logo GitHub Theme"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "GitHub Theme",
    description: "// Thème pour GitHub",
    link: "https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/gitignore.png`}
        alt="Logo gitignore"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "gitignore",
    description: "// Fichier d'ignore pour Git",
    link: "https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/Live_Server.png`}
        alt="Logo Live Server"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Live Server",
    description: "// Serveur de développement local",
    link: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/Prettier_Code_formatter.png`}
        alt="Logo Prettier - Code formatter"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Prettier - Code formatter",
    description: "// Formateur de code",
    link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
  },
  {
    categorie: "extension",
    Logo: (
      <img
        src={`${BASE_URL}stack/Material_Icon_Theme.png`}
        alt="Logo Material Icon Theme"
        width={70}
        height={70}
        className="h-[60px] w-auto"
      />
    ),
    title: "Material Icon Theme",
    description: "// Thème d'icônes pour le code",
    link: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
  },
];

const setup = STACK.filter((item) => item.categorie === "setup");
const language = STACK.filter((item) => item.categorie === "language");
const logiciel = STACK.filter((item) => item.categorie === "logiciel");
const extension = STACK.filter((item) => item.categorie === "extension");

type StackProps = {
  Logo: ReactNode;
  title: string;
  description: string;
  link: string;
};

const Stack = (props: StackProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.link}
      className="flex flex-col gap-4 p-4 w-full rounded-md border border-solid border-transparent hover:border-border hover:bg-accent/50 transition-colors"
    >
      <div className="flex items-center justify-center h-[80px] w-[80px] bg-muted-foreground/10 rounded-md border border-solid border-border p-[4px]">
        {props.Logo}
      </div>

      <div className="flex flex-col">
        <h3 className="text-base font-bold">{props.title}</h3>
        <p className="text-sm font-light">{props.description}</p>
      </div>

      <div className="flex gap-2 items-center">
        <Link className="size-[16px] " />
        <p className="text-sm font-medium ">Consulter</p>
      </div>
    </a>
  );
};

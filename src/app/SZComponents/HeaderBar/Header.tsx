import { Section } from "../Section";
import { Status } from "./Status";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-background/80 backdrop-blur-md z-50">
      <Section className=" w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-[4px]">
        {/* Logo */}
        <NavLink to="/" className="text-lg font-bold text-foreground">
          SZ-Dev
        </NavLink>

        {/* Status */}
        <Status status="Available" />

        {/* Navbar */}
        <ul className="flex flex-row gap-4 justify-end items-center">
          {[
            { to: "/", label: "index" },
            { to: "/works", label: "works" },
            { to: "/stack", label: "stack" },
          ].map(({ to, label }) => (
            <li key={to} className="text-sm font-light text-foreground">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? "font-semibold" : undefined
                }
              >
                {({ isActive }) => (isActive ? `(${label})` : label)}
              </NavLink>
            </li>
          ))}
        </ul>
      </Section>
    </header>
  );
};

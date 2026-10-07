import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../constant";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (isActive) =>
    `text-sm font-medium transition-colors duration-150 border-b-2 focus:outline-none ${isActive ? "text-text border-accent" : "text-text border-transparent"
    }`;

  return (
    <header className="bg-header relative">
      <div className="mx-auto h-[65px] flex max-w-7xl items-center justify-between px-6 py-4 mt-5">

        {/* Logo - Untouched */}
        <Logo />

        {/* Desktop nav - Untouched */}
        <nav className="hidden md:flex items-center gap-x-[65px]">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setActiveHref(link.href)}
              className={({ isActive }) =>
                getLinkClass(activeHref === link.href ? isActive : undefined)
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu toggle button (Animated Hamburger to X) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-2 rounded-lg text-text focus:outline-none transition-colors active:scale-95"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >

          {
            isMenuOpen ? (
              <svg fill="#0f99cc" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#0f99cc" stroke-width="0.002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"></path></g></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#0f99cc" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="#0f99cc" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#0f99cc" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            )
          }
        </button>
      </div>

      {/* Mobile nav (Enhanced Dropdown Card) */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-[calc(100%+8px)] left-4 right-4 z-50 flex flex-col gap-1.5 p-3 rounded-2xl bg-header/95 backdrop-blur-xl border border-accent/20 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => {
                setActiveHref(link.href);
                setIsMenuOpen(false);
              }}
              className={({ isActive }) => {
                const isSelected = activeHref === link.href || isActive;
                return `group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isSelected
                  ? "bg-accent/15 text-accent font-semibold shadow-xs"
                  : "text-text hover:bg-accent/5 hover:text-accent"
                  }`;
              }}
            >
              {({ isActive }) => {
                const isSelected = activeHref === link.href || isActive;
                return (
                  <>
                    <span className="tracking-wide">{link.label}</span>
                    <span
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${isSelected
                        ? "bg-accent scale-100 shadow-[0_0_8px_rgba(var(--accent-rgb),0.6)]"
                        : "bg-transparent scale-0 group-hover:bg-accent/40 group-hover:scale-75"
                        }`}
                    />
                  </>
                );
              }}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
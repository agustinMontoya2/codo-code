import { useEffect, useRef, useState } from "react";
import useScrolled from "../../hooks/useScrolled";
import useTheme from "../../hooks/useTheme";
import { NAV_LINKS } from "../../data/nav";
import { CloseIcon, LogoIcon, MenuIcon, MoonIcon, SunIcon } from "../ui/icons";
import "./Navbar.css";

export default function Navbar() {
  const scrolled = useScrolled();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        if (toggleRef.current) toggleRef.current.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const firstLink = menuRef.current && menuRef.current.querySelector("a");
    if (firstLink) firstLink.focus();
  }, [menuOpen]);

  return (
    <>
      <header id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="container nav-inner">
          <a className="logo" href="#inicio" aria-label="Codo Code — inicio">
            <LogoIcon />
            <span>
              Codo <b>Code</b>
            </span>
          </a>
          <nav aria-label="Principal">
            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Cambiar tema claro/oscuro"
              aria-pressed={theme === "dark"}
              onClick={toggleTheme}
            >
              <MoonIcon className="icon-moon" />
              <SunIcon className="icon-sun" />
            </button>
            <a className="btn btn-ghost btn-nav" href="#contacto">
              Hablemos
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon className="icon-open" />
              <CloseIcon className="icon-close" />
            </button>
          </div>
        </div>
      </header>
      <nav
        id="mobile-menu"
        ref={menuRef}
        aria-label="Menú móvil"
        className={`mobile-menu${menuOpen ? " open" : ""}`}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="btn btn-primary"
          href="#contacto"
          onClick={() => setMenuOpen(false)}
        >
          Hablemos de tu proyecto
        </a>
      </nav>
    </>
  );
}

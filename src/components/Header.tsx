"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="logo-link" aria-label="Zur Startseite">
          <Logo />
        </Link>
        <nav className="main-nav" aria-label="Hauptnavigation">
          <Link href="/#karte">Karte</Link>
          <Link href="/#entdecken">Entdecken</Link>
          <Link href="/#mitmachen">Mitmachen</Link>
          <Link href="/#projekt">Über das Projekt</Link>
        </nav>
        <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          <span className="sr-only">{menuOpen ? "Menü schließen" : "Menü öffnen"}</span>
        </button>
        <Link href="/#karte" className="button button--small button--blue header-cta">Orte entdecken <span aria-hidden="true">→</span></Link>
      </div>
      <nav id="mobile-menu" className={`mobile-menu shell ${menuOpen ? "is-open" : ""}`} aria-label="Mobile Navigation" aria-hidden={!menuOpen}>
        <Link href="/#karte" onClick={closeMenu}>Karte</Link>
        <Link href="/#entdecken" onClick={closeMenu}>Entdecken</Link>
        <Link href="/#mitmachen" onClick={closeMenu}>Mitmachen</Link>
        <Link href="/#projekt" onClick={closeMenu}>Über das Projekt</Link>
      </nav>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { NAV_LINKS } from "@/lib/data/nav";
import { CONTACT } from "@/lib/data/contact";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between md:h-[72px]">
        <a href="#hero" className="font-display text-lg font-semibold tracking-tight text-paper">
          Pedro
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-paper-dim transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" size="sm">
            Vamos conversar
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-ink transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 pt-8" aria-label="Navegação mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-2xl text-paper"
            >
              {link.label}
            </a>
          ))}
          <Button
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full"
            onClick={() => setOpen(false)}
          >
            Vamos conversar
          </Button>
        </nav>
      </div>
    </header>
  );
}

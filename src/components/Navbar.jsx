import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      active === id ? "bg-accent text-white" : "text-ink/70 hover:bg-ink/10 hover:text-ink"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#home" className="font-display text-lg font-extrabold tracking-tight">
          {profile.firstName} Busante
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? "page" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <ul
        id="mobile-menu"
        className={`mx-auto max-w-6xl space-y-1 overflow-hidden px-5 transition-all duration-300 md:hidden ${
          open ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navLinks.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={linkClass(id)} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

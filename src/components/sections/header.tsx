"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Расположение", href: "#location" },
  { label: "Достопримечательности", href: "#attractions" },
  { label: "Участки", href: "#plots" },
  { label: "Дома", href: "#houses" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest-950/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest-400/20">
            <Leaf className="h-5 w-5 text-forest-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg leading-tight tracking-wide text-white sm:text-xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
              ДИКАЯ ДАЧА
            </span>
            <span className="hidden text-[11px] font-normal leading-tight text-forest-300 sm:block" style={{ fontFamily: "var(--font-heading)" }}>
              свежий воздух, спокойствие
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="rounded-lg px-3 py-2 text-[13px] font-medium tracking-wide text-white/80 transition-all hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+79001234567"
            className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-forest-300"
          >
            <Phone className="h-4 w-4" />
            +7 (900) 123-45-67
          </a>
          <button
            onClick={() => {
              const el = document.querySelector("#contacts");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-xl bg-forest-400 px-5 py-2.5 text-sm font-semibold text-forest-950 transition-all hover:bg-forest-300 hover:shadow-lg hover:shadow-forest-400/25 active:scale-95"
          >
            Заказать звонок
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-forest-950/98 backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 border-t border-white/10 pt-4">
                <a
                  href="tel:+79001234567"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-forest-300"
                >
                  <Phone className="h-4 w-4" />
                  +7 (900) 123-45-67
                </a>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    const el = document.querySelector("#contacts");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-2 w-full rounded-xl bg-forest-400 px-5 py-3 text-sm font-semibold text-forest-950 transition-all hover:bg-forest-300"
                >
                  Заказать звонок
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
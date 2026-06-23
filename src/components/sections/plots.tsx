"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Check, Ruler, TreePine } from "lucide-react";

const plots = [
  { size: "6 соток", price: "350 000", area: "600 м²", image: "/images/plot-1.png", popular: false },
  { size: "10 соток", price: "420 000", area: "1000 м²", image: "/images/plot-2.png", popular: true },
  { size: "12 соток", price: "490 000", area: "1200 м²", image: "/images/plot-3.png", popular: false },
];

const benefits = ["Без скрытых платежей", "Официальный договор", "Помощь с документами", "Электричество на участке", "Круглогодичный подъезд"];

export function Plots() {
  return (
    <section id="plots" className="relative overflow-hidden bg-forest-900 py-20 noise-overlay sm:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-leaves-pattern" />
      <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-forest-400/5 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-forest-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center sm:mb-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-forest-300" style={{ fontFamily: "var(--font-body)" }}>
              Участки
            </p>
            <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">Участки в сосновом лесу</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/50 sm:text-lg">
              Выберите идеальный участок для вашего дома среди вековых сосен
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {plots.map((plot, i) => (
            <ScrollReveal key={plot.size} delay={i * 0.15}>
              <div className={`relative h-full overflow-hidden rounded-3xl transition-all duration-500 ${plot.popular ? "ring-2 ring-forest-400 shadow-xl shadow-forest-400/10" : "ring-1 ring-white/10"}`}>
                {plot.popular && (
                  <div className="absolute top-4 right-4 z-20 rounded-full bg-forest-400 px-3 py-1">
                    <span className="text-xs font-semibold text-forest-950" style={{ fontFamily: "var(--font-body)" }}>ПОПУЛЯРНЫЙ</span>
                  </div>
                )}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url('${plot.image}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/20 to-transparent" />
                </div>
                <div className="bg-forest-950/80 p-6 backdrop-blur-sm sm:p-8">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-forest-300"><Ruler className="h-4 w-4" /><span className="text-sm font-medium">{plot.size}</span></div>
                    <div className="flex items-center gap-1.5 text-white/40"><TreePine className="h-4 w-4" /><span className="text-sm">{plot.area}</span></div>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm font-medium text-white/50">Стоимость</p>
                    <p className="text-3xl text-forest-300 sm:text-4xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>от {plot.price} ₽</p>
                  </div>
                  <button
                    onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full rounded-xl bg-forest-400 py-3.5 text-sm font-semibold text-forest-950 transition-all hover:bg-forest-300 active:scale-[0.98]"
                  >
                    Узнать подробнее
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2.5 text-sm text-white/70 sm:px-4">
                <Check className="h-4 w-4 shrink-0 text-forest-400" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C400,60 800,0 1200,40 L1200,60 L0,60 Z" fill="#faf6f0" />
        </svg>
      </div>
    </section>
  );
}
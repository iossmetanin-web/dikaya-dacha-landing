"use client";

import { Trees, Droplets, Mountain, Gem, TrendingUp, Hammer } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const advantages = [
  {
    icon: Trees,
    title: "Дикий сосновый лес",
    description: "Участки в окружении векового соснового леса с чистейшим воздухом",
  },
  {
    icon: Droplets,
    title: "Чистая вода рядом",
    description: "Озёра и родники в пешей доступности — природа у вашего порога",
  },
  {
    icon: Mountain,
    title: "Скалы и горы рядом",
    description: "Каменные палатки и природные достопримечательности в 15 минутах",
  },
  {
    icon: Gem,
    title: "Грибы и ягоды",
    description: "Богатый уральский лес — грибы, ягоды и прогулки прямо от дома",
  },
  {
    icon: TrendingUp,
    title: "Растущая стоимость",
    description: "Участки рядом с городом растут в цене — выгодная инвестиция",
  },
  {
    icon: Hammer,
    title: "Стройте без разрешений",
    description: "Дома из контейнеров на участке СНТ — быстро и без лишних бумаг",
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dots" />
      <div className="bg-blob absolute -top-10 right-[5%] h-96 w-96 bg-forest-300" />
      <div className="bg-blob absolute bottom-0 left-[10%] h-72 w-72 bg-forest-200" />
      {/* Large decorative circle */}
      <div className="absolute top-1/2 right-[15%] h-40 w-40 -translate-y-1/2 rounded-full border border-forest-200/50" />
      <div className="absolute top-[30%] left-[8%] h-20 w-20 rounded-full border border-forest-200/30" />

      {/* Top wave (from hero dark to cream already handled by hero wave) */}
      <div className="deco-line absolute top-10 left-[15%]" />
      <div className="deco-line absolute top-20 right-[20%]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center sm:mb-16">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-forest-600"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Преимущества
            </p>
            <h2
              className="text-3xl text-forest-950 sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Почему именно здесь?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {advantages.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-forest-100 bg-white p-6 transition-all duration-300 hover:border-forest-200 hover:shadow-xl hover:shadow-forest-900/5 sm:p-8">
                {/* Hover background glow */}
                <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-forest-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-600 transition-all duration-300 group-hover:bg-forest-400 group-hover:text-forest-950 group-hover:shadow-lg group-hover:shadow-forest-400/20">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3
                    className="mb-2 text-lg text-forest-950 sm:text-xl"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom wave to dark section */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C300,60 600,0 900,35 C1050,50 1150,25 1200,30 L1200,60 L0,60 Z" fill="#0f2b1e" />
        </svg>
      </div>
    </section>
  );
}
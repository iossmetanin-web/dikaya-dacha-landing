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
      {/* Subtle decorative element */}
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-forest-100/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-forest-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center sm:mb-16">
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-forest-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Преимущества
            </p>
            <h2
              className="text-3xl font-black tracking-tight text-forest-950 sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Почему именно здесь?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {advantages.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-2xl border border-forest-100 bg-white p-6 transition-all duration-300 hover:border-forest-200 hover:shadow-xl hover:shadow-forest-900/5 sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-600 transition-colors group-hover:bg-forest-400 group-hover:text-forest-950">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3
                  className="mb-2 text-lg font-bold text-forest-950 sm:text-xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
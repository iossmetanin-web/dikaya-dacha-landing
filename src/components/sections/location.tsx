"use client";

import { Car, Bus, Footprints, Navigation } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const routes = [
  {
    icon: Car,
    title: "На автомобиле",
    time: "40 минут",
    distance: "52 км",
    description: "По трассе через Асбест",
  },
  {
    icon: Bus,
    title: "Общественный транспорт",
    time: "1 ч 50 мин",
    distance: "",
    description: "Автобус + 43 мин пешком от пл. 1905 года",
  },
  {
    icon: Footprints,
    title: "Пешком от остановки",
    time: "43 минуты",
    distance: "3.2 км",
    description: "Прямо через лесную тропу",
  },
];

export function Location() {
  return (
    <section id="location" className="relative overflow-hidden bg-forest-900 py-20 noise-overlay sm:py-28">
      {/* Real photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('https://sfile.chatglm.cn/images-ppt/ced60ca3ed33.jpg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-forest-900/70" />

      {/* Background decorations for dark section */}
      <div className="absolute inset-0 bg-leaves-pattern" />
      <div className="absolute top-0 left-0 h-48 w-48 rounded-full bg-forest-400/5 blur-[80px]" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-forest-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="blur">
          <div className="mb-14 text-center sm:mb-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-forest-300">
              Расположение
            </p>
            <h2
              className="text-3xl text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Всего 52 км
              <br className="hidden sm:block" /> от Екатеринбурга
            </h2>
          </div>
        </ScrollReveal>

        {/* Route cards */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {routes.map((route, i) => (
            <ScrollReveal key={route.title} variant="slide-left" delay={i * 0.15}>
              <div className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/10 sm:p-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-400/20 text-forest-300">
                  <route.icon className="h-7 w-7" />
                </div>
                <h3
                  className="mb-1 text-base text-white sm:text-lg"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  {route.title.toUpperCase()}
                </h3>
                <p
                  className="mb-1 text-3xl text-forest-300 sm:text-4xl"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                >
                  {route.time}
                </p>
                {route.distance && (
                  <p className="mb-2 text-sm font-medium text-white/60">{route.distance}</p>
                )}
                <p className="text-sm text-white/50">{route.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Map visual */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-forest-800/50 p-6 sm:p-10">
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-400 text-forest-950">
                  <Navigation className="h-5 w-5" />
                </div>
                <div className="h-px w-px bg-forest-400/30" />
                <div className="h-24 w-px bg-gradient-to-b from-forest-400 to-forest-600" />
                <div className="h-px w-px bg-forest-600/30" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-forest-400 bg-forest-900 text-forest-300">
                  <span className="text-[10px] font-semibold">СНТ</span>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <p
                    className="text-lg text-white sm:text-xl"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    Екатеринбург
                  </p>
                  <p className="text-sm text-white/50">Площадь 1905 года — старт маршрута</p>
                </div>

                <div className="relative h-3 overflow-hidden rounded-full bg-forest-800">
                  <div className="absolute inset-y-0 left-0 w-3/4 rounded-full bg-gradient-to-r from-forest-400 via-forest-500 to-forest-600" />
                  <div className="absolute inset-y-0 left-0 w-1/3 animate-pulse rounded-full bg-forest-300/30" />
                </div>

                <div>
                  <p
                    className="text-lg text-forest-300 sm:text-xl"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    СНТ «Протон»
                  </p>
                  <p className="text-sm text-white/50">Сысертский район, Свердловская область</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-6">
              {["Через Асбест", "По трассе Р320", "Свердловская область"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-forest-400/30 bg-forest-400/10 px-4 py-1.5 text-xs font-medium text-forest-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom wave to white */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,25 C150,55 350,5 600,40 C850,75 1050,15 1200,30 L1200,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
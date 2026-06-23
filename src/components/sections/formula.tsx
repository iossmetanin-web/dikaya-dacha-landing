"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Plus } from "lucide-react";

export function Formula() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-20 noise-overlay sm:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-leaves-pattern" />
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest-400/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center sm:mb-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-forest-300" style={{ fontFamily: "var(--font-body)" }}>
              Ваша дача
            </p>
            <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">
              Своя дача ближе,
              <br />
              <span className="text-gradient-green">чем кажется</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-4 lg:gap-6">
              <div className="glass-card w-full rounded-2xl p-6 text-center transition-all hover:bg-white/10 sm:w-48 sm:p-8">
                <div className="mx-auto mb-3 h-16 w-16 overflow-hidden rounded-xl">
                  <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/plot-2.png')" }} />
                </div>
                <p className="text-sm font-medium text-white/60">Участок</p>
                <p className="mt-1 text-xl text-forest-300 sm:text-2xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>350 000 ₽</p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-forest-400/50 text-forest-400">
                <Plus className="h-6 w-6" />
              </div>

              <div className="glass-card w-full rounded-2xl p-6 text-center transition-all hover:bg-white/10 sm:w-48 sm:p-8">
                <div className="mx-auto mb-3 h-16 w-16 overflow-hidden rounded-xl">
                  <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/house-1.png')" }} />
                </div>
                <p className="text-sm font-medium text-white/60">Дом 25 м²</p>
                <p className="mt-1 text-xl text-forest-300 sm:text-2xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>1 250 000 ₽</p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-400 text-forest-950">
                <span className="text-2xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>=</span>
              </div>

              <div className="glow-green w-full rounded-2xl bg-forest-400/20 p-6 text-center ring-1 ring-forest-400/50 sm:w-56 sm:p-8">
                <p className="text-sm font-medium text-forest-300">Ваша дача</p>
                <p className="mt-1 text-2xl text-white sm:text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>от 1 600 000 ₽</p>
                <p className="mt-2 text-sm text-white/50">Участок + дом под ключ</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })} className="glow-green rounded-2xl bg-forest-400 px-8 py-4 text-base font-semibold text-forest-950 transition-all hover:bg-forest-300 active:scale-[0.98] sm:text-lg">
                Получить консультацию
              </button>
              <button onClick={() => document.querySelector("#plots")?.scrollIntoView({ behavior: "smooth" })} className="rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/50 hover:bg-white/20 active:scale-[0.98] sm:text-lg">
                Выбрать участок
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
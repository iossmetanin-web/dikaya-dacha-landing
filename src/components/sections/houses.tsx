"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Maximize2, Thermometer, Zap, Truck } from "lucide-react";

const houses = [
  { title: "Компактный", size: "25 м²", price: "1 250 000", description: "Идеальный вариант для одного или пары. Всё необходимое в компактном пространстве.", image: "/images/house-1.png", features: ["Спальня", "Кухня-гостиная", "Санузел", "Терраса"] },
  { title: "Семейный", size: "36 м²", price: "1 550 000", description: "Просторный дом для семьи. Отдельная спальня и просторная гостиная.", image: "/images/house-2.png", features: ["2 спальни", "Кухня-гостиная", "Санузел", "Терраса"], popular: true },
  { title: "Просторный", size: "50 м²", price: "1 950 000", description: "Максимальный комфорт на природе. Двухуровневый дом с мансардой.", image: "/images/house-3.png", features: ["2 спальни", "Гостиная", "Кухня", "2 террасы"] },
];

const specs = [
  { icon: Thermometer, label: "Утепление" },
  { icon: Zap, label: "Электричество" },
  { icon: Truck, label: "Доставка" },
  { icon: Maximize2, label: "Под ключ" },
];

export function Houses() {
  return (
    <section id="houses" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots" />
      <div className="bg-blob absolute -bottom-20 right-[10%] h-96 w-96 bg-forest-200" />
      <div className="bg-blob absolute top-20 -left-16 h-72 w-72 bg-forest-100" />
      {/* Decorative elements */}
      <div className="absolute bottom-20 left-[15%] h-24 w-24 rounded-full border border-forest-200/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center sm:mb-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-forest-600" style={{ fontFamily: "var(--font-body)" }}>
              Дома
            </p>
            <h2 className="text-3xl text-forest-950 sm:text-4xl lg:text-5xl">Дома из контейнеров под заказ</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 sm:text-lg">
              Современные, тёплые и стильные дома — быстрая установка и доступная цена
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-14 flex flex-wrap justify-center gap-4 sm:gap-6">
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-2 rounded-full border border-forest-200 bg-white px-4 py-2">
                <spec.icon className="h-4 w-4 text-forest-600" />
                <span className="text-sm font-medium text-forest-800">{spec.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {houses.map((house, i) => (
            <ScrollReveal key={house.title} delay={i * 0.15}>
              <div className={`group relative h-full overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-forest-900/8 ${house.popular ? "ring-2 ring-forest-400" : "border border-forest-100"}`}>
                {house.popular && (
                  <div className="absolute top-4 left-4 z-20 rounded-full bg-forest-600 px-3 py-1">
                    <span className="text-xs font-semibold text-white" style={{ fontFamily: "var(--font-body)" }}>ХИТ</span>
                  </div>
                )}
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${house.image}')` }} />
                  <div className="absolute bottom-3 right-3 rounded-xl bg-forest-900/80 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-lg text-forest-300" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>{house.size}</span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="mb-2 text-xl text-forest-950">{house.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500">{house.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {house.features.map((f) => (
                      <span key={f} className="rounded-lg bg-forest-50 px-2.5 py-1 text-xs font-medium text-forest-700">{f}</span>
                    ))}
                  </div>
                  <div className="flex items-end justify-between border-t border-forest-100 pt-5">
                    <div>
                      <p className="text-xs font-medium text-gray-400">Стоимость</p>
                      <p className="text-2xl text-forest-700 sm:text-3xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>от {house.price} ₽</p>
                    </div>
                    <button
                      onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
                      className="rounded-xl bg-forest-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-forest-500 active:scale-95"
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,35 C300,0 600,55 900,15 C1050,0 1150,30 1200,25 L1200,60 L0,60 Z" fill="#071a12" />
        </svg>
      </div>
    </section>
  );
}
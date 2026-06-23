"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Maximize2, Thermometer, Zap, Truck } from "lucide-react";

const houses = [
  {
    title: "Компактный",
    size: "25 м²",
    price: "1 250 000",
    description: "Идеальный вариант для одного или пары. Всё необходимое в компактном пространстве.",
    image: "/images/house-1.png",
    features: ["Спальня", "Кухня-гостиная", "Санузел", "Терраса"],
  },
  {
    title: "Семейный",
    size: "36 м²",
    price: "1 550 000",
    description: "Просторный дом для семьи. Отдельная спальня и просторная гостиная.",
    image: "/images/house-2.png",
    features: ["2 спальни", "Кухня-гостиная", "Санузел", "Терраса"],
    popular: true,
  },
  {
    title: "Просторный",
    size: "50 м²",
    price: "1 950 000",
    description: "Максимальный комфорт на природе. Двухуровневый дом с мансардой.",
    image: "/images/house-3.png",
    features: ["2 спальни", "Гостиная", "Кухня", "2 террасы"],
  },
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center sm:mb-16">
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-forest-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Дома
            </p>
            <h2
              className="text-3xl font-black tracking-tight text-forest-950 sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Дома из контейнеров под заказ
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 sm:text-lg">
              Современные, тёплые и стильные дома — быстрая установка и доступная цена
            </p>
          </div>
        </ScrollReveal>

        {/* Specs row */}
        <ScrollReveal delay={0.1}>
          <div className="mb-14 flex flex-wrap justify-center gap-4 sm:gap-6">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center gap-2 rounded-full border border-forest-200 bg-white px-4 py-2"
              >
                <spec.icon className="h-4 w-4 text-forest-600" />
                <span className="text-sm font-medium text-forest-800">{spec.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {houses.map((house, i) => (
            <ScrollReveal key={house.title} delay={i * 0.15}>
              <div
                className={`group relative h-full overflow-hidden rounded-3xl bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-forest-900/8 ${
                  house.popular ? "ring-2 ring-forest-400" : "border border-forest-100"
                }`}
              >
                {house.popular && (
                  <div className="absolute top-4 left-4 z-20 rounded-full bg-forest-600 px-3 py-1">
                    <span
                      className="text-xs font-bold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      ХИТ
                    </span>
                  </div>
                )}

                <div className="relative h-52 overflow-hidden sm:h-60">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${house.image}')` }}
                  />
                  <div className="absolute bottom-3 right-3 rounded-xl bg-forest-900/80 px-3 py-1.5 backdrop-blur-sm">
                    <span
                      className="text-lg font-black text-forest-300"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {house.size}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3
                    className="mb-2 text-xl font-bold text-forest-950"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {house.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500">
                    {house.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {house.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-lg bg-forest-50 px-2.5 py-1 text-xs font-medium text-forest-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-end justify-between border-t border-forest-100 pt-5">
                    <div>
                      <p className="text-xs font-medium text-gray-400">Стоимость</p>
                      <p
                        className="text-2xl font-black text-forest-700 sm:text-3xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        от {house.price} ₽
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="rounded-xl bg-forest-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-forest-500 active:scale-95"
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
    </section>
  );
}
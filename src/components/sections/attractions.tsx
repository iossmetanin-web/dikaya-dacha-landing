"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Clock } from "lucide-react";

const attractions = [
  {
    title: "Новая Линза",
    time: "5 мин на машине",
    description: "Живописное озеро с кристально чистой водой среди сосен",
    image: "/images/attraction-lake.jpg",
  },
  {
    title: "Старая Линза",
    time: "10 мин на машине",
    description: "Уединённое озеро в лесу — идеальное место для рыбалки",
    image: "/images/attraction-rocks.jpg",
  },
  {
    title: "Каменные палатки",
    time: "15 мин на машине",
    description: "Древние скальные формирования — потрясающие виды и маршруты",
    image: "/images/attraction-viewpoint.jpg",
  },
  {
    title: "Лесные тропы",
    time: "Прямо от поселка",
    description: "Прогулки по уральскому лесу, сбор грибов и ягод",
    image: "/images/attraction-forest.jpg",
  },
];

export function Attractions() {
  return (
    <section id="attractions" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Real photo background — very subtle */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('https://sfile.chatglm.cn/images-ppt/4dcb88816541.jpeg')" }}
      />
      {/* White overlay to keep text readable */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Background decoration */}
      <div className="absolute inset-0 bg-diagonal" />
      <div className="bg-blob absolute top-1/4 -left-20 h-80 w-80 bg-forest-100" />
      <div className="bg-blob absolute bottom-1/4 -right-10 h-60 w-60 bg-forest-200" />
      {/* Decorative ring */}
      <div className="absolute top-20 right-[10%] h-32 w-32 rounded-full border border-forest-100/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade">
          <div className="mb-14 text-center sm:mb-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-forest-600">
              Природа рядом
            </p>
            <h2 className="text-3xl text-forest-950 sm:text-4xl lg:text-5xl">
              Достопримечательности рядом
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 sm:text-lg">
              Озёра, скалы, лесные тропы и потрясающие виды — идеальное место для отдыха и жизни
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {attractions.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1} direction="up">
              <div className="group relative h-full overflow-hidden rounded-2xl bg-cream transition-all duration-500 hover:shadow-2xl hover:shadow-forest-900/10">
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
                    <Clock className="h-3.5 w-3.5 text-white" />
                    <span className="text-xs font-medium text-white">{item.time}</span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="mb-2 text-lg text-forest-950">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom wave to dark */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C200,5 500,55 700,25 C900,-5 1100,45 1200,20 L1200,60 L0,60 Z" fill="#0f2b1e" />
        </svg>
      </div>
    </section>
  );
}
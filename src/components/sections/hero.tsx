"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Trees, Home, MapPin } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const speed = 0.4;
        setScrollY(rect.top * speed);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-forest-950">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 parallax-bg"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
      </div>

      {/* Dark overlays + mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/30 to-forest-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-transparent to-forest-950/40" />
      <div className="absolute inset-0 hero-mesh" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-forest-400/10 blur-[100px] sm:right-20 sm:h-96 sm:w-96" />
      <div className="absolute bottom-40 left-10 h-60 w-60 rounded-full bg-forest-500/8 blur-[80px] sm:left-20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center sm:px-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal delay={0.2} direction="none" duration={0.8}>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-forest-300 sm:text-base">
              52 км от Екатеринбурга
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="none" duration={0.8}>
            <h1
              className="mb-6 text-5xl leading-[1.0] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              ДИКАЯ
              <br />
              <span className="text-gradient-green">ДАЧА</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.6} direction="none" duration={0.8}>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
              Тихое место для жизни среди соснового леса. Земельные участки
              с возможностью строительства дома из контейнера под ключ.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.8} direction="none" duration={0.8}>
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {[
                { icon: Trees, label: "Участок от", value: 350000, suffix: " ₽", color: "text-forest-300" },
                { icon: Home, label: "Дом из контейнеров от", value: 1250000, suffix: " ₽", color: "text-forest-200" },
                { icon: MapPin, label: "До Екатеринбурга", value: 52, suffix: " км", color: "text-forest-300" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl px-4 py-5 sm:px-6"
                >
                  <stat.icon className={`mx-auto mb-2 h-6 w-6 ${stat.color}`} />
                  <p className="text-xs font-medium tracking-wide text-white/50 uppercase sm:text-sm">
                    {stat.label}
                  </p>
                  <p
                    className={`mt-1 text-2xl ${stat.color} sm:text-3xl`}
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={1} direction="none" duration={0.8}>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <button
                onClick={() => {
                  document.querySelector("#plots")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="glow-green rounded-2xl bg-forest-400 px-8 py-4 text-base font-semibold text-forest-950 transition-all hover:bg-forest-300 hover:shadow-xl hover:shadow-forest-400/20 active:scale-[0.98] sm:text-lg"
              >
                Выбрать участок
              </button>
              <button
                onClick={() => {
                  document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 active:scale-[0.98] sm:text-lg"
              >
                Получить консультацию
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator — three pulsing lines, wave upward */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial="hidden"
          animate="visible"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 mb-1">
            Листайте
          </span>
          <div className="flex flex-col items-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-[2px] w-3 rounded-full bg-forest-300/70"
                initial={{ opacity: 0.2, y: 4 }}
                animate={{
                  opacity: [0.2, 0.9, 0.2],
                  y: [4, -4, 4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.25,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C200,50 400,10 600,40 C800,70 1000,20 1200,35 L1200,60 L0,60 Z" fill="#faf6f0" />
        </svg>
      </div>
    </section>
  );
}
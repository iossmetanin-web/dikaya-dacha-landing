"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, Leaf, TreePine, Zap, Shield } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

export function Consultation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setName("");
        setPhone("");
      } else {
        setError(data.error || "Ошибка отправки");
      }
    } catch {
      setError("Сеть недоступна. Проверьте подключение.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-forest-900 py-20 noise-overlay sm:py-28"
    >
      {/* Background image overlay + decorations */}
      <div className="absolute inset-0 bg-leaves-pattern" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('https://sfile.chatglm.cn/images-ppt/18ea4fa5a6ca.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 via-forest-900/60 to-forest-900" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-forest-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left text */}
          <ScrollReveal direction="right" variant="slide-right">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-forest-300">
                Контакты
              </p>
              <h2 className="mb-6 text-3xl text-white sm:text-4xl lg:text-5xl">
                Получите консультацию
                <br />
                <span className="text-forest-300">и актуальные цены</span>
              </h2>
              <p className="mb-8 text-base leading-relaxed text-white/60 sm:text-lg">
                Оставьте заявку, и мы подберём участок и ответим на все
                вопросы. Работаем без выходных.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TreePine, text: "Чистый воздух и природа" },
                  { icon: Shield, text: "Безопасное тихое место" },
                  { icon: Zap, text: "Электричество и дороги" },
                  { icon: Leaf, text: "Участки от 350 000 ₽" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-400/15 text-forest-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-white/70">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="left" variant="slide-left">
            <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10 sm:p-10">
              {success ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest-400/20">
                    <CheckCircle2 className="h-8 w-8 text-forest-400" />
                  </div>
                  <h3 className="mb-2 text-xl text-white">
                    Спасибо!
                  </h3>
                  <p className="text-white/60">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-sm font-medium text-forest-300 hover:text-forest-200"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white/70"
                    >
                      Ваше имя
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Как к вам обращаться?"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-all focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-white/70"
                    >
                      Телефон
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-all focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20"
                    />
                  </div>

                  {error && (
                    <p className="text-sm font-medium text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-forest-400 py-4 text-base font-bold text-forest-950 transition-all hover:bg-forest-300 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Получить консультацию
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-white/30">
                    Мы не передаём ваши данные третьим лицам
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Telescope, GaugeCircle, Laugh } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const beats = [
  {
    title: "Gatilho doce",
    description:
      "Começamos com humor visual e cores vibrantes que abraçam a audiência imediatamente.",
    icon: Laugh,
    color: "from-joy-pink to-sunrise-yellow"
  },
  {
    title: "Conflito que importa",
    description:
      "Transformamos a mensagem bíblica em um desafio pessoal que conversa com o público atual.",
    icon: GaugeCircle,
    color: "from-sunrise-yellow to-hope-green"
  },
  {
    title: "Revelação com propósito",
    description:
      "Cada personagem tem um momento de vulnerabilidade que gera identificação real e esperança.",
    icon: HeartHandshake,
    color: "from-hope-green to-serenity-blue"
  },
  {
    title: "Cliffhanger de impacto",
    description:
      "Terminamos com uma pergunta visual, uma promessa ou uma cena congelada que pede replay.",
    icon: Telescope,
    color: "from-faith-purple to-joy-pink"
  }
];

export function EmotionalArc() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Jornada Emocional"
          title="Roteiros desenhados para literalmente segurar a audiência até o último segundo."
          lead="Aplicamos técnica de retenção usada por creators top 1% aliada ao poder transformador das Escrituras."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {beats.map((beat, index) => (
            <motion.article
              key={beat.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div
                className={`absolute inset-0 opacity-40 blur-[90px] transition-opacity duration-500 group-hover:opacity-70 bg-gradient-to-br ${beat.color}`}
              />
              <div className="relative flex flex-col gap-4">
                <div className="inline-flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${beat.color}`}
                  >
                    <beat.icon className="h-6 w-6 text-twilight" />
                  </div>
                  <span className="font-display text-xl text-white">{beat.title}</span>
                </div>
                <p className="text-base text-white/75">{beat.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

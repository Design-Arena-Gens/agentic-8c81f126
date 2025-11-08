"use client";

import { motion } from "framer-motion";
import { Cpu, Palette, Music4, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const pipeline = [
  {
    title: "Ideação & roteiro relâmpago",
    description:
      "Sala criativa semanal com roteiristas e teólogos para garantir fidelidade bíblica e hooks irresistíveis.",
    icon: Users
  },
  {
    title: "Visual look & feel",
    description:
      "Moodboards coloridos, personagens em 3D com texturas doces e cenários que brilham no mobile.",
    icon: Palette
  },
  {
    title: "Animação & motion",
    description:
      "Pipeline otimizado em Blender + Unreal para gerar cenas fluidas e assets reutilizáveis.",
    icon: Cpu
  },
  {
    title: "Som & viral moments",
    description:
      "Trilhas autorais, vozes carismáticas e sound design que marcam cada gancho e entrega final memorável.",
    icon: Music4
  }
];

export function BehindScenes() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Por Trás das Câmeras"
          title="Equipe completa para transformar histórias bíblicas em atrações viciantes e doces."
          lead="Planejamos tudo para viralizar com responsabilidade espiritual e excelência artística."
          alignment="left"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {pipeline.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <step.icon className="h-6 w-6 text-hope-green" />
                </div>
                <h3 className="font-display text-xl text-white">{step.title}</h3>
              </div>
              <p className="text-base text-white/70">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

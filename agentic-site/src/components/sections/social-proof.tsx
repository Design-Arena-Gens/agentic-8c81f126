"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    name: "Pr. Lucas Menezes",
    role: "Líder de Ministério de Crianças",
    quote:
      "As crianças começaram a repetir as frases dos episódios durante a semana. A retenção da sala dobrou e os pais pediram o link para assistir em casa."
  },
  {
    name: "Gabi Santos",
    role: "Creator Gospel, 1.2M seguidores",
    quote:
      "Os ganchos são geniais! Parece Marvel versão kids, só que com fé. Quero participar dos próximos episódios como voz convidada."
  },
  {
    name: "Marcelo Vieira",
    role: "Diretor de Marketing Digital",
    quote:
      "O storytelling curto com mensagem clara gerou uma conexão instantânea. A galera quer compartilhar porque se vê ali."
  }
];

export function SocialProof() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Reações Reais"
          title="Feedback de líderes, creators e marcas que já viveram a experiência Doce Aventuras."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <Sparkles className="absolute -top-10 -left-10 h-32 w-32 text-sunrise-yellow/30 blur-sm" />
              <Quote className="h-10 w-10 text-sunrise-yellow" />
              <p className="text-lg leading-relaxed text-white/80">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-display text-white">{testimonial.name}</p>
                <p className="text-sm text-white/60">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

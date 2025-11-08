"use client";

import { motion } from "framer-motion";
import { Smartphone, Youtube, Instagram } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const platforms = [
  {
    name: "TikTok",
    icon: Smartphone,
    format: "3 vídeos por semana | 9:16 | 20s",
    recipe: [
      "Hook cinematográfico e humor físico",
      "Legenda curta com call to action para playlist",
      "Sticker interativo pedindo continuação"
    ],
    metric: "+150% watch-through na semana de estreia"
  },
  {
    name: "Instagram Reels",
    icon: Instagram,
    format: "2 vídeos por semana | 9:16 | 30s",
    recipe: [
      "Mini trailer com texto animado",
      "Carrossel complementar com lições rápidas",
      "Call para seguir e receber bastidores"
    ],
    metric: "+32% nos salvamentos e compartilhamentos"
  },
  {
    name: "YouTube Shorts",
    icon: Youtube,
    format: "1 vídeo por semana | 9:16 | 45s",
    recipe: [
      "Edição com som espacial e transições 3D",
      "Legenda dinâmicas e emojis guia",
      "Cliffhanger reforçado com contagem regressiva"
    ],
    metric: "Retenção média de 78% em testes internos"
  }
];

export function PlatformStrategy() {
  return (
    <section id="parceria" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Plano de Distribuição"
          title="Uma cadência multicanal pensada para crescer comunidade e desejo por novos episódios."
          lead="Adaptamos a mesma história com cortes específicos para cada plataforma, mantendo mensagem consistente e impulsionando conversas."
          alignment="left"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <motion.article
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                  <platform.icon className="h-6 w-6 text-sunrise-yellow" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white">{platform.name}</h3>
                  <p className="text-sm text-white/60">{platform.format}</p>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-white/70">
                {platform.recipe.map((tip) => (
                  <li
                    key={tip}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 leading-relaxed"
                  >
                    {tip}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-4 py-3 text-sm font-semibold text-sunrise-yellow">
                {platform.metric}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Film, Sparkle, Flame } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const episodes = [
  {
    id: "EP01",
    title: "Noé e o Remix da Arca",
    hook: "3 segundos: gota gigante cai do céu, vibra a tela, arco-íris neon surge atrás de Noé dançando com pinguins rave.",
    middle: "Virada: chuva vira confete, animais entram na arca em fila sincronizada.",
    cliffhanger: "Clímax: trovão abre portal misterioso — Noé olha fixo pra câmera e pergunta: “Entramos ou confiamos?”"
  },
  {
    id: "EP02",
    title: "Davi vs Golias Beat Battle",
    hook: "Davi chama Golias pro microfone com loopstation, beat explode junto com luzes da arena.",
    middle: "Virada: Golias reage surpreendido e aceita, criando drop pesado com passos de gigante.",
    cliffhanger: "Clímax: pedra voa em slow motion, transiciona para próximo episódio com 'To be continued...'."
  },
  {
    id: "EP03",
    title: "Ester, a Influencer da Coragem",
    hook: "Flash de paparazzi, Ester aparece com vestido holográfico e mensagem 'Coragem viraliza'.",
    middle: "Virada: reels mostrando a preparação secreta dela com amigas e conselhos.",
    cliffhanger: "Clímax: ela entra no salão do rei, câmera congela nos olhos — “Será que ele vai ouvir?”"
  }
];

export function EpisodeHooks() {
  return (
    <section id="episodios" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Narrativas Viciantes"
          title="Estruturas que travam o scroll, distribuem doçura e deixam um gancho irresistível."
          lead="Cada episódio foi desenhado com um ritmo musical, humor leve e verdade bíblica para gerar identificação instantânea com crianças, jovens e famílias."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {episodes.map((episode, index) => (
            <motion.article
              key={episode.id}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between text-sm text-white/70">
                <div className="flex items-center gap-2 text-white/80">
                  <Film className="h-4 w-4 text-sunrise-yellow" />
                  {episode.id}
                </div>
                <span>#Em3Atos</span>
              </div>
              <h3 className="font-display text-2xl text-white">{episode.title}</h3>
              <div className="space-y-4 text-sm leading-relaxed text-white/70">
                <p className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Sparkle className="mt-0.5 h-4 w-4 shrink-0 text-joy-pink" />
                  <span>{episode.hook}</span>
                </p>
                <p className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Flame className="mt-0.5 h-4 w-4 shrink-0 text-hope-green" />
                  <span>{episode.middle}</span>
                </p>
                <p className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Sparkle className="mt-0.5 h-4 w-4 shrink-0 text-sunrise-yellow" />
                  <span>{episode.cliffhanger}</span>
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

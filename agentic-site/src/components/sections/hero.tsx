"use client";

import { motion } from "framer-motion";
import { Sparkles, Play, Share2, Clock } from "lucide-react";
import Link from "next/link";
import { CTAButton } from "@/components/ui/cta-button";

const heroEpisodes = [
  {
    title: "Noé e o Arco-Íris de Promessas",
    hook: "Começa com uma gota de chuva gigante caindo na lente!",
    gradient: "from-hope-green via-sunrise-yellow to-serenity-blue"
  },
  {
    title: "Davi x Golias Remix",
    hook: "Davi solta um beatbox antes da batalha...",
    gradient: "from-faith-purple via-joy-pink to-sunrise-yellow"
  },
  {
    title: "Ester, a Rainha Corajosa",
    hook: "Flash de câmera, paparazzi e Ester entrando confiante.",
    gradient: "from-serenity-blue via-white/60 to-faith-purple"
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-sunrise opacity-60 blur-[110px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.6 }}
          className="pointer-events-none absolute bottom-[-20%] left-1/3 h-[360px] w-[360px] rounded-full bg-hope-green/60 blur-[120px]"
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-medium text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4 text-sunrise-yellow" />
            <span>Histórias bíblicas em 3D para a nova geração</span>
          </div>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-[56px] md:leading-[1.1]">
            Doce Aventuras: episódios curtos, doces e inesquecíveis que ativam a fé com
            sorriso no rosto.
          </h1>
          <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
            Produzimos episódios semanais para TikTok, Instagram e YouTube Shorts que
            prendem a atenção nos 3 primeiros segundos e deixam o público pedindo “mais
            um!”. Visual vibrante, humor leve, mensagens profundas.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <CTAButton href="#episodios" glow>
              <Play className="mr-2 h-4 w-4" />
              Assistir Pitches de Episódios
            </CTAButton>
            <CTAButton href="#parceria">
              <Share2 className="mr-2 h-4 w-4" />
              Quero Distribuir
            </CTAButton>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-semibold text-sunrise-yellow">15s</p>
              <p className="mt-2 text-sm text-white/70">
                Gatilho inicial arrebatador para TikTok e Shorts.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-semibold text-hope-green">3 atos</p>
              <p className="mt-2 text-sm text-white/70">
                Estrutura narrativa que deixa cliffhanger delicioso.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-semibold text-joy-pink">+120%</p>
              <p className="mt-2 text-sm text-white/70">
                Expectativa de retenção versus vídeos tradicionais.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-1 flex-col gap-5"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
            <div className="relative flex flex-col gap-6 p-6">
              {heroEpisodes.map((episode) => (
                <motion.article
                  key={episode.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-twilight/60 p-4 shadow-spotlight"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`h-16 w-16 shrink-0 rounded-2xl border border-white/15 bg-gradient-to-br ${episode.gradient} shadow-spotlight`}
                    />
                    <div className="flex-1 space-y-1">
                      <h3 className="font-display text-lg text-white">{episode.title}</h3>
                      <p className="text-sm text-white/70">{episode.hook}</p>
                    </div>
                  </div>
                  <Link
                    href="#episodios"
                    className="inline-flex items-center text-sm font-semibold text-sunrise-yellow hover:text-white"
                  >
                    Ver storyboard →
                  </Link>
                </motion.article>
              ))}
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-white/75">
                  <Clock className="h-4 w-4 text-sunrise-yellow" />
                  Novos episódios toda semana
                </div>
                <div className="text-sm font-semibold text-white">#DoceAventuras</div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

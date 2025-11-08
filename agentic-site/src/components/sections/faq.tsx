"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    question: "Com que frequência novos episódios são lançados?",
    answer:
      "Publicamos episódios inéditos toda semana, com versões adaptadas para TikTok, Instagram Reels e YouTube Shorts. A cada mês lançamos um mini arco especial com 3 partes sequenciais."
  },
  {
    question: "Posso licenciar os episódios para minha igreja ou plataforma?",
    answer:
      "Sim! Oferecemos pacotes de licenciamento específicos para igrejas, escolas e plataformas de streaming. Inclui versões verticais e horizontais, roteiros de discussão e materiais complementares."
  },
  {
    question: "Como os roteiros garantem fidelidade bíblica?",
    answer:
      "Todo roteiro passa por revisão de consultores teológicos. Mantemos a essência do texto bíblico e contextualizamos em linguagem leve, com humor e elementos visuais modernos."
  },
  {
    question: "Quais formatos de parceria estão disponíveis?",
    answer:
      "Trabalhamos com patrocínio de temporadas, inserções de produtos alinhados, co-produções com creators e ativações presenciais. Há também oportunidades de licenciar personagens."
  }
];

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="Perguntas Frequentes"
          title="Tudo que você precisa saber para embarcar nesta aventura doce."
        />

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <button
                type="button"
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left text-lg font-medium text-white"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${active === index ? "rotate-180 text-sunrise-yellow" : "text-white/60"}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {active === index ? (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-6 text-base leading-relaxed text-white/70"
                  >
                    {faq.answer}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

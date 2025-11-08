import { SectionHeading } from "@/components/ui/section-heading";
import { Mail, ArrowRight } from "lucide-react";

export function LeadCapture() {
  return (
    <section className="px-6 pb-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl rounded-[40px] border border-white/15 bg-white/10 p-10 shadow-spotlight backdrop-blur-lg">
        <SectionHeading
          eyebrow="Collab & Licenciamento"
          title="Receba o press kit, calendário editorial e propostas de parceria."
          lead="Estamos abrindo espaço para marcas, igrejas e creators se unirem como parceiros oficiais desta jornada doce."
        />

        <form className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="text-sm text-white/70" htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              required
              placeholder="Seu nome completo"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-sunrise-yellow focus:outline-none focus:ring-2 focus:ring-sunrise-yellow/40"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm text-white/70" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="voce@email.com"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-sunrise-yellow focus:outline-none focus:ring-2 focus:ring-sunrise-yellow/40"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-white/70" htmlFor="interesse">
              Qual é o seu interesse?
            </label>
            <select
              id="interesse"
              name="interesse"
              required
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-sunrise-yellow focus:outline-none focus:ring-2 focus:ring-sunrise-yellow/40"
            >
              <option value="distribuicao" className="bg-twilight text-white">
                Distribuir em minha rede
              </option>
              <option value="licenciamento" className="bg-twilight text-white">
                Licenciar episódios
              </option>
              <option value="patrocinio" className="bg-twilight text-white">
                Patrocinar temporada
              </option>
              <option value="parceria" className="bg-twilight text-white">
                Colaborar como creator/voz
              </option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-white/70" htmlFor="mensagem">
              Conte um pouco sobre você
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              placeholder="Vamos construir algo doce juntos!"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-sunrise-yellow focus:outline-none focus:ring-2 focus:ring-sunrise-yellow/40"
            />
          </div>
          <button
            type="submit"
            className="group relative mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunrise px-8 py-4 text-base font-semibold text-twilight transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <Mail className="h-5 w-5" />
            Receber materiais exclusivos
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          * Ao enviar você recebe o planejamento da próxima temporada e acesso prioritário
          às sessões de brainstorming ao vivo.
        </p>
      </div>
    </section>
  );
}

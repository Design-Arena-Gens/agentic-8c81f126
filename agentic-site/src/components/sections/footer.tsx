import { Instagram, Youtube, Clapperboard, Mail } from "lucide-react";

const socials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@doceaventuras",
    icon: Clapperboard
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/doceaventuras",
    icon: Instagram
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@doceaventuras",
    icon: Youtube
  }
];

export function Footer() {
  return (
    <footer className="px-6 pb-16 pt-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-display text-2xl text-white">Doce Aventuras</h3>
            <p className="mt-2 max-w-xl text-sm text-white/60">
              Histórias bíblicas em 3D que abraçam o coração e prendem a atenção. Vamos
              criar impacto juntos?
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white transition hover:border-sunrise-yellow/50 hover:text-sunrise-yellow"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Doce Aventuras. Todos os direitos reservados.</p>
          <a
            href="mailto:contato@doceaventuras.com"
            className="inline-flex items-center gap-2 text-white hover:text-sunrise-yellow"
          >
            <Mail className="h-4 w-4" />
            contato@doceaventuras.com
          </a>
        </div>
      </div>
    </footer>
  );
}

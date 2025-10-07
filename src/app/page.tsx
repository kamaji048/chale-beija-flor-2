/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const WHATS = "5551999999999"; // troque pelo número real com DDI/DDD
const WHATS_URL = `https://wa.me/${WHATS}?text=Olá!%20Gostaria%20de%20saber%20disponibilidade%20do%20Chalé%20Beija-Flor.%20:)`;
const BOOKING_URL = "https://www.booking.com/"; // troque pelo link real do Booking

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="w-full">
        <div className="relative w-full h-[42vh] md:h-[56vh] overflow-hidden">
          <img
            src="/hero2.png"
            alt="Fachada do Chalé Beija-Flor"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 md:py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Aconchego em meio à natureza
          </h1>

          <p className="mt-3 text-lg text-[--muted] max-w-3xl">
            Chalé exclusivo com deck e banheira, cercado por árvores. Perfeito
            para descansar e curtir a dois — preço amigo e atendimento de perto.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={WHATS_URL} target="_blank" className="btn btn-primary">
              Reservar pelo WhatsApp
            </Link>

            <Link href={BOOKING_URL} target="_blank" className="btn btn-outline">
              Ver no Booking
            </Link>

            <div className="inline-flex items-center rounded-2xl border border-neutral-300 px-4 py-2 text-sm">
              a partir de <span className="font-semibold ml-2">R$ 364/noite</span>
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-xl font-bold">Destaques</h2>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Feature
              icon={
                <svg viewBox="0 0 24 24" className="h-8 w-8" stroke="currentColor" fill="none" strokeWidth="1.8">
                  <path d="M3 10h18v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5Z" />
                  <path d="M7 10V7a2 2 0 1 1 4 0v3" />
                </svg>
              }
              title="Banheira de imersão"
            />
            <Feature
              icon={
                <svg viewBox="0 0 24 24" className="h-8 w-8" stroke="currentColor" fill="none" strokeWidth="1.8">
                  <path d="M12 8a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Z" />
                  <path d="M12 3v2M4.22 5.22l1.42 1.42M19.78 5.22l-1.42 1.42" />
                </svg>
              }
              title="Clima aconchegante"
            />
            <Feature
              icon={
                <svg viewBox="0 0 24 24" className="h-8 w-8" stroke="currentColor" fill="none" strokeWidth="1.8">
                  <path d="M12 20v-6M8 20v-4M16 20v-8" />
                  <path d="M4 6h16v5H4z" />
                </svg>
              }
              title="Wi-Fi e estacionamento"
            />
            <Feature
              icon={
                <svg viewBox="0 0 24 24" className="h-8 w-8" stroke="currentColor" fill="none" strokeWidth="1.8">
                  <path d="M12 21c-4.418 0-8-3.582-8-8C4 7.134 8 3 12 3s8 4.134 8 10c0 4.418-3.582 8-8 8Z" />
                  <path d="M12 11v6M12 7v1" />
                </svg>
              }
              title="Natureza ao redor"
            />
          </div>
        </div>
      </section>

      {/* GRID DE FOTOS */}
      <section className="py-2">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <img src="/foto1.png" alt="Banheira" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <img src="/foto2.png" alt="Quarto romântico" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <img src="/foto3.png" alt="Caminho na propriedade" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <img src="/foto4.png" alt="Fachada do chalé" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA (degradê verde) */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl p-6 text-center bg-cta">
            <p className="text-lg md:text-xl font-semibold">
              Reserve sua estadia aconchegante!
            </p>

            {/* botão com texto ESCURO garantido */}
            <Link
              href={WHATS_URL}
              target="_blank"
              className="btn btn-cta mt-4"
            >
              RESERVAR PELO WHATSAPP
            </Link>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-xl font-bold">Localização</h2>
          <p className="text-center text-[--muted] mt-1">
            Região serrana — refúgio silencioso e romântico.
          </p>

          <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            {/* Substitua pelo iframe oficial do Maps do cliente */}
            <iframe
              className="w-full h-[300px] md:h-[380px]"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26244.807!2d-45.9!3d-22.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x000000!2sChal%C3%A9%20Beija-Flor!5e0!3m2!1spt-BR!2sBR!4v0000000000000"
            />
          </div>
        </div>
      </section>

      {/* FAB do WhatsApp */}
      <Link
        href={WHATS_URL}
        target="_blank"
        aria-label="Reservar pelo WhatsApp"
        className="whats-fab fixed bottom-4 right-4 md:bottom-6 md:right-6 rounded-full px-5 py-3 font-medium"
      >
        WhatsApp
      </Link>
    </main>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="text-[--charcoal]/90">{icon}</div>
      <p className="text-sm leading-tight">{title}</p>
    </div>
  );
}

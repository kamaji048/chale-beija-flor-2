"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Phone, Star, Bath, Flame, Wifi, Car, Trees, MapPin, Calendar, Instagram, ArrowRight
} from "lucide-react";

/** LINKS (ajuste) */
const WHATSAPP_NUMBER = "55XXXXXXXXXXX"; // ex.: 5531999999999
const BOOKING_URL = "https://www.booking.com/";
const INSTAGRAM_URL = "https://instagram.com/";
const waText = encodeURIComponent("Olá! Tenho interesse em reservar o Chalé Beija-Flor. Datas: __/__/__ a __/__/__.");
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

const photos = ["/hero.jpg","/banheira.jpg","/natureza.jpg","/interior.jpg"];

const Feature = ({ icon: Icon, title, desc }:{
  icon:any; title:string; desc:string;
}) => (
  <motion.div
    initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true }} transition={{ duration:.35 }}
    className="card-paper p-5 flex items-start gap-3"
  >
    <div className="rounded-xl p-2" style={{ background:"#eef4ef" }}>
      <Icon className="w-5 h-5" style={{ color:"var(--moss)" }} />
    </div>
    <div>
      <h3 className="font-semibold" style={{ color:"var(--charcoal)" }}>{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background:"var(--cream)" }}>
      {/* Topbar clara */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-neutral-200">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl grid place-items-center text-white font-bold shadow-soft"
                 style={{ background:"var(--moss)" }}>
              BF
            </div>
            <div>
              <p className="font-semibold leading-tight" style={{ color:"var(--charcoal)" }}>
                Chalé Beija-Flor
              </p>
              <p className="text-xs text-neutral-500 -mt-0.5">Refúgio na Mantiqueira</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#fotos" className="hover:underline">Fotos</a>
            <a href="#destaques" className="hover:underline">Destaques</a>
            <a href="#localizacao" className="hover:underline">Localização</a>
            <a href="#faq" className="hover:underline">Dúvidas</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn btn-outline hidden md:inline-flex">
              Reservar no Booking
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Phone className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO claro com foto e moldura madeira */}
      <section className="relative">
        <div className="container grid md:grid-cols-2 gap-10 items-center py-14 md:py-16">
          <div>
            <motion.h1
              initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} transition={{ duration:.45 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              style={{ color:"var(--charcoal)", fontFamily:"Playfair Display,serif" }}
            >
              Seu refúgio na Mantiqueira: simplicidade e aconchego
            </motion.h1>
            <p className="mt-4 text-neutral-700 md:text-lg">
              Chalé charmoso cercado de verde, com banheira de imersão e luz
              bem quentinha. Reserve direto no WhatsApp ou finalize pelo Booking.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
                <Phone className="w-4 h-4" /> Ver disponibilidade no WhatsApp
              </a>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn btn-outline">
                <Calendar className="w-4 h-4" /> Ver no Booking
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-neutral-700">
              <Star className="w-4 h-4" style={{ color:"#E6B653" }} />
              <span>Avaliado com 5.0 ★ no Google (exemplo)</span>
            </div>
          </div>

          <motion.figure
            initial={{ opacity:0, scale:.98 }} animate={{ opacity:1, scale:1 }} transition={{ duration:.45 }}
            className="rounded-[1.5rem] overflow-hidden shadow-soft ring-1 ring-neutral-200"
            style={{ background:"#fff" }}
          >
            {/* “moldura de madeira” */}
            <div className="p-2" style={{ background:"var(--wood)" }}>
              <img src={photos[0]} alt="Chalé Beija-Flor"
                   className="w-full h-[320px] md:h-[420px] object-cover rounded-[1.2rem]" />
            </div>
          </motion.figure>
        </div>
      </section>

      {/* Destaques em cartões “papel” */}
      <section id="destaques" className="py-14" style={{ background:"linear-gradient(#fff, #fff 70%, #faf7f2)" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily:"Playfair Display,serif" }}>
            Destaques do chalé
          </h2>
          <p className="text-neutral-700 mt-1">Conforto simples para quem busca desacelerar.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Feature icon={Bath}  title="Banheira de imersão"   desc="Ambiente de madeira, clima romântico." />
            <Feature icon={Flame} title="Iluminação quentinha"  desc="Luzes âmbar que pedem uma taça de vinho." />
            <Feature icon={Wifi}  title="Wi-Fi"                  desc="Para uma checada rápida nas mensagens." />
            <Feature icon={Car}   title="Estacionamento"         desc="Vaga ao lado do chalé." />
            <Feature icon={Trees} title="Natureza por perto"     desc="Trilhas, pássaros e céu estrelado." />
            <Feature icon={MapPin}title="Lugar tranquilo"        desc="Acesso por estrada local (enviaremos a rota)." />
          </div>
        </div>
      </section>

      {/* Galeria simples */}
      <section id="fotos" className="py-14">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily:"Playfair Display,serif" }}>
                Fotos
              </h2>
              <p className="text-neutral-700 mt-1">Um gostinho do que te espera.</p>
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="text-[var(--moss)] hover:underline flex items-center gap-2">
              Pedir mais fotos <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {photos.map((src,i)=>(
              <div key={i} className={`overflow-hidden rounded-2xl border border-neutral-200 shadow-soft ${i===0?"md:col-span-2 md:row-span-2":""}`}>
                <img src={src} alt={`Foto ${i+1}`} className="w-full h-40 md:h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada de reserva com terracota + musgo */}
      <section className="py-14" style={{ background:"#fff" }}>
        <div className="container">
          <div className="rounded-3xl p-8 md:p-10 shadow-soft border border-neutral-200"
               style={{ background:"linear-gradient(180deg,#fff, #fff 40%, #f8efe9)" }}>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold" style={{ color:"var(--wood)", fontFamily:"Playfair Display,serif" }}>
                  Pronto para relaxar?
                </h3>
                <p className="mt-2 text-neutral-700">
                  Fale no WhatsApp para combinar datas e detalhes ou finalize pelo Booking.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <Phone className="w-4 h-4" /> Ver disponibilidade
                </a>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn btn-outline">
                  <Calendar className="w-4 h-4" /> Ver no Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="py-14" style={{ background:"var(--cream)" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily:"Playfair Display,serif" }}>
            Localização
          </h2>
          <p className="text-neutral-700 mt-1">Abrir rota no Google Maps.</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Chal%C3%A9+Beija+Flor" target="_blank" rel="noreferrer"
             className="block mt-5 rounded-2xl overflow-hidden border border-neutral-200 shadow-soft">
            <img src="/mapa.jpg" alt="Mapa" className="w-full h-64 object-cover" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily:"Playfair Display,serif" }}>
            Perguntas frequentes
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="card-paper p-5">
              <p className="font-semibold">Como reservo?</p>
              <p className="text-neutral-700 mt-1">Chame no <b>WhatsApp</b> ou finalize no <b>Booking</b>.</p>
            </div>
            <div className="card-paper p-5">
              <p className="font-semibold">Tem banheira?</p>
              <p className="text-neutral-700 mt-1">Sim, de imersão (confirme disponibilidade).</p>
            </div>
            <div className="card-paper p-5">
              <p className="font-semibold">Tem Wi-Fi?</p>
              <p className="text-neutral-700 mt-1">Para necessidades básicas; qualidade pode variar.</p>
            </div>
            <div className="card-paper p-5">
              <p className="font-semibold">Como chegar?</p>
              <p className="text-neutral-700 mt-1">Após reservar, enviamos a rota detalhada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-10 border-t border-neutral-200 bg-white/90 backdrop-blur">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-700">
            © {new Date().getFullYear()} Chalé Beija-Flor — todos os direitos reservados.
          </div>
          <div className="flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
               className="badge border-neutral-300 text-neutral-800 hover:bg-neutral-50">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Phone className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

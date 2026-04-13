/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  MapPin, 
  Clock, 
  Music, 
  GlassWater, 
  Utensils, 
  Gift, 
  Users, 
  Container,
  ChevronRight,
  Star,
  Menu,
  X,
  Phone
} from "lucide-react";
import { useState, useEffect } from "react";

const LOGO_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU8eQN7NV99-b8lX0erHAV0WOKTiGyR1W8vWzwN5hacyyvlc1MS62VDwVIhzig7FJnuXa8-r8OFiS-sfznLKMbiMv3zj_MrieGpYBl_D0nR9hV8oJwESdAM1on-rP3Ip1yZXUZxn13iIym2ajSgzvECOq-fTYfhVw6LaR9IaV54MqdbNpXhqOmL9dLBIs/s320/logo%20bar%20fundo%20transparente%20e%20conteudo%20em%20vermelho%20e%20azul.png";
const ABOUT_IMAGE = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKVlSEmRFiDIMUWdghke5LWaVYYfE7lnhumt1UsUGsVCNW2q_T25ZkVLExlzcX-LX2jODWThbu7Wo06I5qlH8dXjC5xZhBowB21KPYYsPwmwCoPVvsVUptE5OUQDz02sqC0PMYB2CsKh9LhF7_HupqPN-ZD5LIfK6D-oyQDhYmSsYU6tBlkLQI5Qoru-U/s16000/historia.png";
const HERO_IMAGES = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc-WgcKhN37u2B36CBR26uWgnHDtpNGZDXJuHA_m7Fz5IhxcrQhHTuW3t3jKSDYlGBYFAF0UvvxtfaBmK8l1EhVHmqjGMmx2Z_6FG02MouOzvZ73z1fkvPwcW_Sw-7e1K252nxgHqf0zO4Lg0tv_zMi180zy4g88Sq5KWbpO0ORivZI1k8UMWRS34dOo8/s16000/hero%2001.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVTkCN4nePek3OO8B21YZ_DVFTVPVkJXfhN5bjq7lqpK7kHbrDzRcpZhjArGXj7ptZG5oqxHm00vitX7-M3ZGp1PSvM7reXgv57PF83X_BS43L0pP4pmC9UfgjwPPOgbyGUqh_OeCYyHs_MZR15tZt8R_xuqIw2DFPyMV0cdKpXrZAudXJkiDj0IK9F0I/s16000/hero%2003.jfif",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZl16rF4GSvl0nRptHTIdiOwrdQdfZ1gRaBj1EbNEa0PHR4ccR3r_TrCLnPB5B7gYfN3BuNpdR8U4S_FADtIMSHfeA6ebLAZbXmwuXyA4FWIa99IykP1LWm5eU3AlQPZVFN1nmK07_h52rFV2NAQJqYafN8flAIutV9Wnw6KiE8mJ-5UQy809nDR24cyw/s16000/hero%2004.jpg"
];

const WHATSAPP_LINK = "https://wa.me/5521967374965";
const INSTAGRAM_LINK = "https://www.instagram.com/americansportsbarni_";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Diferenciais", href: "#differentials" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <div className="min-h-screen selection:bg-usa-red selection:text-white overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
          scrolled ? "py-2 shadow-md border-b border-gray-100" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="relative h-12 sm:h-16 w-auto">
            <img 
              src={LOGO_URL} 
              alt="American Sport Bar Logo" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-industrial-dark hover:text-usa-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-usa-red hover:bg-usa-red/90 text-white px-6 py-2 rounded-none font-display uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95"
            >
              Reservar Agora
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-industrial-dark p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium uppercase tracking-widest text-industrial-dark hover:text-usa-red"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                className="bg-usa-red text-white px-6 py-3 text-center rounded-none font-display uppercase tracking-wider"
              >
                Reservar Agora
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]} 
              alt="Bar Interior" 
              initial={{ opacity: 0, filter: "blur(20px) grayscale(100%)" }}
              animate={{ opacity: 1, filter: "blur(0px) grayscale(0%)" }}
              exit={{ opacity: 0, filter: "blur(20px) grayscale(100%)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-industrial-dark/80 via-industrial-dark/40 to-industrial-dark" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1 bg-usa-blue text-white text-xs font-bold uppercase tracking-[0.3em] mb-10">
              Nova Iguaçu • RJ
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase leading-[1.1] mb-10 text-balance">
              O Bar mais <span className="text-usa-red">Temático</span> e <span className="text-usa-blue">Instagramável</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-14 font-light tracking-wide">
              Uma experiência industrial única construída em containers. O autêntico espírito dos Pubs Americanos no coração da Baixada.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                className="w-full sm:w-auto bg-usa-red hover:bg-usa-red/90 text-white px-10 py-4 rounded-none font-display text-xl uppercase tracking-widest transition-all transform hover:scale-105"
              >
                Quero Conhecer
              </a>
              <a 
                href="#about"
                className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-none font-display text-xl uppercase tracking-widest transition-all"
              >
                Nossa História
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority / Marquee */}
      <section className="py-12 bg-industrial-gray border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-4xl md:text-5xl font-display uppercase text-white/20 hover:text-usa-red transition-colors cursor-default">
                Música ao Vivo Todos os Dias
              </span>
              <Star className="mx-8 text-usa-blue fill-usa-blue" size={24} />
              <span className="text-4xl md:text-5xl font-display uppercase text-white/20 hover:text-usa-blue transition-colors cursor-default">
                Drinks Exclusivos
              </span>
              <Star className="mx-8 text-usa-red fill-usa-red" size={24} />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24 bg-industrial-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display uppercase mb-4">O que servimos</h2>
            <div className="w-24 h-1 bg-usa-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <GlassWater className="text-usa-red" size={40} />,
                title: "Drinks Exclusivos",
                desc: "Mixologia temática com ingredientes premium e apresentações surpreendentes.",
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivv0PUEHxBFUwG2EUlb9cPkzk7DLxogfqd0rf14q2smUQwoT4L6nyO1E89fSNg1-_9xWLer7QKXD6lDsjMT1Ham9V2t9LEousCuu0Phh8b-JmEEu6k-bJ3wFl6o88TU_DhdEV1gR8xZ4f1C9NIA60kpGWCSVgfWO3rNllsg4YMWj4HRfF8YC9BmKT4Sqs/w640-h640/drink.png"
              },
              {
                icon: <Utensils className="text-usa-blue" size={40} />,
                title: "Petiscos Deliciosos",
                desc: "O melhor da finger food americana: burgers, wings e porções generosas.",
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjAJmt48gwJd-S1zIX9yXvQMyZ5KsNzk0NMo9JRMqBeOQ4d9_410VUCF6npzFHzrfuC2NGUr2ZQFSNIgM64ShVorq31m3Mjs5lRTG-0fdMc0MJoQmg3rHtXB_BOaxEbl2A7eD9xYm6ibiRPd-ib_l9rb7AbJWYDQM8mfAriTv6RsE6V37HRqmYmHpHs5Y/w640-h640/petiscos.png"
              },
              {
                icon: <Music className="text-usa-red" size={40} />,
                title: "Música ao Vivo",
                desc: "Palco aberto para os melhores artistas da região todos os dias de funcionamento.",
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHhDaL1dOWaBA8ikb22MOi04bxwLkSypcxD9aEfAjfsxlA1HwdeHCY8W7mRxcMyVcnVWxWOaj4umoQ0io9PHG2xjEuP9u5Yz9oeY7VdAvK7UYNfc2PFDrkCpPHGH_orayWSenOH1GG4XwVu_uiC-P51KMWPGLTQ848o0P1hH7ICAQUVbU4H9UaZvCJPQA/w640-h640/musica.png"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative bg-industrial-gray container-border overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-display uppercase mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials - Bento Grid */}
      <section id="differentials" className="py-12 md:py-24 bg-star-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-dark/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-display uppercase mb-4">Por que somos únicos?</h2>
              <p className="text-gray-400">Não é apenas um bar, é um destino. Cada detalhe foi pensado para transportar você para os Estados Unidos.</p>
            </div>
            <div className="hidden md:block w-32 h-px bg-white/20 mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Main Feature */}
            <div className="md:col-span-2 md:row-span-2 bg-usa-blue/10 container-border p-8 flex flex-col justify-between overflow-hidden group">
              <div className="relative z-10">
                <Container className="text-usa-blue mb-6" size={48} />
                <h3 className="text-3xl font-display uppercase mb-4">Estrutura em Container</h3>
                <p className="text-gray-300 text-lg mb-6">Um design industrial autêntico e sustentável que cria uma atmosfera urbana e moderna, totalmente diferente de tudo o que você já viu.</p>
                <div className="w-full h-48 md:h-64 overflow-hidden rounded-sm border border-white/10">
                  <img 
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXsdEep0TSQai90Z9OKJxqkLZU8z1qPhFSEIRlIiI5MkZ2v3aXH8GM_9GQROKckuu5EPZE7i42xdEWUE1obwQjj7M82YyM7R-R_SkwDbh3UTN9nHJD1KkNzmeopaDU42dJPRRX_js1-8OyEUzzJTJ7we4W4PxmqF0ZreTECnZ4_1NbZ1ZsXcG1j3JUXNE/w640-h640/container.png" 
                    alt="Container Structure" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Birthday */}
            <div className="md:col-span-2 bg-usa-red container-border p-8 flex flex-col justify-center">
              <Gift className="text-white mb-4" size={32} />
              <h3 className="text-2xl font-display uppercase mb-2">Aniversários Especiais</h3>
              <p className="text-white/80">Brindes e ofertas exclusivas para quem escolhe celebrar seu dia com a gente.</p>
            </div>

            {/* Corporate */}
            <div className="bg-industrial-dark container-border p-8 flex flex-col justify-center">
              <Users className="text-usa-blue mb-4" size={32} />
              <h4 className="text-xl font-display uppercase mb-2">Eventos Corporativos</h4>
              <p className="text-sm text-gray-400">O espaço ideal para confraternizações e lançamentos.</p>
            </div>

            {/* Instagrammable */}
            <div className="bg-industrial-dark container-border p-8 flex flex-col justify-center">
              <Instagram className="text-usa-red mb-4" size={32} />
              <h4 className="text-xl font-display uppercase mb-2">100% Instagramável</h4>
              <p className="text-sm text-gray-400">Cada canto é um cenário perfeito para suas fotos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 bg-industrial-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-usa-blue font-mono text-sm tracking-[0.4em] uppercase mb-4 block">Nossa História</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-8 leading-tight">Um pedaço dos <span className="text-usa-red">EUA</span> em Nova Iguaçu</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  O American Sport Bar nasceu do desejo de criar algo verdadeiramente único na Baixada Fluminense. Inspirados pelos autênticos pubs industriais de Nova York e Chicago, decidimos construir nossa casa do zero, utilizando containers navais.
                </p>
                <p>
                  O resultado é um espaço que respira cultura norte-americana em cada detalhe: da iluminação neon aos petiscos clássicos, passando por uma curadoria musical que celebra o rock, blues e jazz.
                </p>
                <p className="font-medium text-white italic">
                  "Não somos apenas um bar, somos uma experiência imersiva feita para quem busca qualidade, estilo e boa música."
                </p>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 border-t border-white/10 pt-10">
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <h4 className="text-usa-red font-display text-3xl leading-none">19:00h</h4>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Abertura</p>
                  </div>
                  <Clock className="text-gray-600" size={24} />
                  <div>
                    <h4 className="text-usa-blue font-display text-3xl leading-none">02:00h</h4>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Fechamento</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:order-last order-first"
            >
              <div className="container-border p-2">
                <img 
                  src={ABOUT_IMAGE} 
                  alt="American Sport Bar Exterior" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-usa-red p-8 hidden md:block">
                <p className="font-display text-4xl uppercase leading-none">SINCE<br/>2017</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-24 bg-industrial-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display uppercase mb-4">Quem já viveu a experiência</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-usa-red fill-usa-red" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Silva",
                role: "Aniversariante",
                text: "Comemorei meu aniversário lá e foi sensacional! Os brindes são ótimos e o atendimento é nota 10. O ambiente é muito diferente de tudo."
              },
              {
                name: "Juliana Costa",
                role: "Influencer",
                text: "Melhor lugar para fotos em Nova Iguaçu! Cada container tem um detalhe especial. Os drinks são lindos e muito saborosos."
              },
              {
                name: "Marcos Oliveira",
                role: "Músico",
                text: "Tocar no American Sport Bar é um prazer. A acústica é boa e o público é muito animado. O clima de pub americano é real."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-industrial-dark p-8 container-border">
                <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-usa-blue/20 rounded-full flex items-center justify-center font-display text-usa-blue">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-usa-red uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contact" className="py-12 md:py-24 relative overflow-hidden border-y-8 border-industrial-border">
        <div className="absolute inset-0 bg-container-blue z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display uppercase mb-8">Pronto para a sua <span className="text-usa-red">American Night</span>?</h2>
          <p className="text-xl text-gray-300 mb-12">Reserve sua mesa ou fale com nossa equipe para eventos corporativos e apresentações artísticas.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-usa-red hover:bg-usa-red/90 text-white px-12 py-5 rounded-none font-display text-2xl uppercase tracking-widest transition-all transform hover:scale-105"
            >
              <Phone size={24} />
              WhatsApp
            </a>
            <a 
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-3 border-2 border-white hover:bg-white hover:text-industrial-dark text-white px-12 py-5 rounded-none font-display text-2xl uppercase tracking-widest transition-all"
            >
              <Instagram size={24} />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-dark border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <img 
                src={LOGO_URL} 
                alt="American Sport Bar" 
                className="h-20 mb-6 object-contain"
                referrerPolicy="no-referrer"
              />
              <p className="text-gray-500 max-w-sm">
                O bar mais temático e instagramável de Nova Iguaçu. Uma experiência industrial única em containers.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-display uppercase text-lg mb-6 text-usa-red">Onde estamos</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <MapPin size={18} className="text-usa-blue shrink-0" />
                  <span>Rua Juiz Alberto Nader, 100 - Luz, Nova Iguaçu - RJ, 26255-291</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Phone size={18} className="text-usa-blue shrink-0" />
                  <span>(21) 96737-4965</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-display uppercase text-lg mb-6 text-usa-blue">Horários</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Clock size={18} className="text-usa-red shrink-0" />
                  <span>4ª, 6ª e Sábado: 19:00h às 02:00h</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Instagram size={18} className="text-usa-red shrink-0" />
                  <span>Siga @americansportsbarni_</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex justify-center items-center text-gray-600 text-xs uppercase tracking-widest text-center">
            <p>© 2026 American Sport Bar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Marquee CSS Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 26s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 13s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}

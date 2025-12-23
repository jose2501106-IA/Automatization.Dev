import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Bot, Workflow, Zap, 
  Database, Terminal, Code, CheckCircle, ExternalLink, 
  Mail, Calendar, Linkedin, Github, Instagram, Youtube, Layers, Sparkles,
  Loader, Cpu, Play, BrainCircuit, FileText, ShieldCheck, 
  MessageSquareText, Network, Server, Lock, CreditCard, 
  BarChart, RefreshCw, Sliders, Activity, Stethoscope, ArrowDown, TrendingUp
} from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- CONFIGURACIÓN DE TUS REDES SOCIALES ---
const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/TU_USUARIO",
  github: "https://github.com/TU_USUARIO",
  instagram: "https://instagram.com/TU_USUARIO",
  tiktok: "https://tiktok.com/@TU_USUARIO",
  youtube: "https://youtube.com/@TU_CANAL",
  whatsapp: "https://wa.me/5215500000000", 
  email: "mailto:project.manager@systemicworld.tech"
};

// Icono personalizado de TikTok
const TikTokIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Icono personalizado de WhatsApp
const WhatsAppIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#E5E7EB] font-sans selection:bg-[#EA4B71] selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO PRINCIPAL (IMAGEN PNG COMPLETA) */}
          <div className="cursor-pointer flex items-center" onClick={() => scrollToSection('home')}>
             {/* Ajusta h-12 o h-14 según el tamaño de tu imagen para que se vea bien */}
             <img 
               src="/logo.png" 
               alt="Systemic World Logo" 
               className="h-14 w-auto object-contain" 
             />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Soluciones', 'Lab', 'Filosofía'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'soluciones' ? 'services' : item.toLowerCase() === 'lab' ? 'playground' : item.toLowerCase() === 'filosofía' ? 'about' : item.toLowerCase())}
                className="text-sm font-medium text-gray-300 hover:text-[#EA4B71] transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 bg-[#EA4B71] hover:bg-[#D43A5A] text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(234,75,113,0.3)]"
            >
              Consultoría
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F19] border-b border-gray-800 p-6 flex flex-col gap-6 shadow-2xl">
            {['Home', 'Soluciones', 'Lab', 'Filosofía'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'soluciones' ? 'services' : item.toLowerCase() === 'lab' ? 'playground' : item.toLowerCase() === 'filosofía' ? 'about' : item.toLowerCase())}
                className="text-left text-lg font-medium text-gray-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#EA4B71]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#3776AB]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-[#EA4B71] text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#EA4B71] animate-pulse"></span>
                Automation Lab
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Transforma el caos en un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4B71] to-[#FF6D5A]">Sistema Inteligente</span>.
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                No poemos parches. Diseñamos ecosistemas de automatización con <strong>n8n, Python y LLMs</strong> que leen documentos, toman decisiones y ejecutan procesos complejos, permitiendo que tu negocio funcione como un reloj suizo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('playground')} className="px-8 py-4 bg-[#EA4B71] hover:bg-[#D43A5A] text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] shadow-[0_0_20px_rgba(234,75,113,0.3)]">
                  <BrainCircuit className="w-4 h-4" /> Diseñar Sistema
                </button>
                <button onClick={() => scrollToSection('services')} className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-white font-medium rounded-lg transition-all hover:bg-white/5">
                  Explorar Soluciones
                </button>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
               <div className="relative w-full h-full border border-gray-800/50 rounded-2xl bg-[#0F172A]/30 backdrop-blur-sm p-8 overflow-hidden group">
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-700/50 -z-10"></div>
                  
                  <div className="flex flex-col gap-4 h-full justify-center relative z-10">
                    <div className="flex items-center gap-4 self-start animate-in slide-in-from-left duration-1000">
                      <div className="bg-[#1A202C] border border-gray-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                        <FileText className="text-gray-400" />
                      </div>
                      <div className="h-[2px] w-12 bg-gray-600"></div>
                      <div className="bg-[#1A202C] border border-[#EA4B71] p-4 rounded-lg w-48 shadow-[0_0_15px_rgba(234,75,113,0.2)]">
                        <div className="text-xs font-bold text-[#EA4B71] mb-1">INPUT NO ESTRUCTURADO</div>
                        <div className="text-[10px] text-gray-400">PDFs, Emails, WhatsApps</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-center ml-12 animate-in slide-in-from-left duration-1000 delay-300">
                       <div className="bg-[#1A202C] border border-[#3776AB] p-6 rounded-xl w-64 shadow-[0_0_20px_rgba(55,118,171,0.2)] relative">
                          <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#EA4B71] rounded-full flex items-center justify-center text-[10px] font-bold text-white border-4 border-[#0B0F19]">LAB</div>
                          <div className="flex items-center gap-2 mb-2">
                            <Network className="w-5 h-5 text-[#3776AB]" />
                            <span className="text-sm font-bold text-white">Systemic Core</span>
                          </div>
                          <div className="text-[10px] text-gray-400 font-mono bg-black/30 p-2 rounded mb-2">
                            Processing Logic & AI Decisions...
                          </div>
                          <div className="flex gap-1">
                            <div className="w-full h-1 bg-green-500 rounded animate-pulse"></div>
                            <div className="w-2/3 h-1 bg-green-500 rounded animate-pulse delay-75"></div>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-center gap-4 self-end animate-in slide-in-from-left duration-1000 delay-500">
                      <div className="bg-[#1A202C] border border-green-500 p-4 rounded-lg w-48 shadow-[0_0_15px_rgba(34,197,94,0.2)] text-right">
                        <div className="text-xs font-bold text-green-500 mb-1">RESULTADO DE NEGOCIO</div>
                        <div className="text-[10px] text-gray-400">Ejecución & Reportes</div>
                      </div>
                      <div className="h-[2px] w-12 bg-green-500"></div>
                       <div className="bg-[#1A202C] border border-green-500 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                        <CheckCircle className="text-green-500" />
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-16 mb-4">
             <p className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center max-w-5xl leading-tight mx-auto">
               Automatizaciones con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-extrabold text-5xl md:text-6xl">IA</span> Personalizada
             </p>
          </div>

        </div>
      </section>

      {/* --- STACK --- */}
      <section className="py-10 border-y border-gray-800 bg-[#0F172A]/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
            Systemic Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 opacity-90">
             <StackBadge color="bg-[#EA4B71]" text="n8n" />
             <StackBadge color="bg-[#3776AB]" text="Python" />
             <StackBadge color="bg-green-500" text="Supabase" />
             <StackBadge color="bg-purple-500" text="Stripe" />
             <StackBadge color="bg-blue-500" text="Looker Studio" />
             <StackBadge color="bg-yellow-500" text="OpenAI" />
          </div>
        </div>
      </section>

      {/* --- SERVICES (VISUAL & EMOCIONAL) --- */}
      <section id="services" className="py-24 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0B0F19] to-[#0F172A] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Tecnología que te <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4B71] to-[#FF6D5A]">Devuelve el Control</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Deja de luchar contra el caos. Implementamos soluciones diseñadas para eliminar tu estrés operativo y multiplicar tus ingresos de forma automática.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<MessageSquareText />}
              title="Atención al Cliente 24/7"
              quote="Deja de ser esclavo de tu celular y asegura cada venta."
              desc="Convertimos tu WhatsApp en un vendedor incansable que atiende, califica y guía a tus prospectos al cierre en segundos."
              accentColor="green-500"
            />
            <ServiceCard 
              icon={<FileText />}
              title="Facturación Fiscal 4.0"
              quote="Elimina el terror y la burocracia de los cierres de mes."
              desc="Automatizamos tu emisión de facturas al momento exacto de la compra, garantizando cumplimiento fiscal perfecto ante el SAT."
              accentColor="blue-500"
            />
            <ServiceCard 
              icon={<RefreshCw />}
              title="Inventarios Omnicanal"
              quote="Vende en todas partes sin miedo a quedar mal."
              desc="Conectamos tu tienda física, web y MercadoLibre en un solo cerebro digital que actualiza tu stock en tiempo real."
              accentColor="orange-500"
            />
            <ServiceCard 
              icon={<BarChart />}
              title="Inteligencia de Negocios"
              quote="Sustituye la intuición por certeza y toma el control real."
              desc="Recibe cada mañana un reporte claro y directo en tu celular que te dice exactamente cuánto ganaste, cuánto gastaste y qué está funcionando."
              accentColor="purple-500"
            />
            <ServiceCard 
              icon={<CreditCard />}
              title="Automatización de Cobranza"
              quote="Recupera tu liquidez sin conversaciones incómodas."
              desc="Nuestro sistema gestiona tus cuentas por cobrar enviando recordatorios puntuales y profesionales, acelerando tu flujo de efectivo."
              accentColor="red-500"
            />
            <ServiceCard 
              icon={<Zap />}
              title="Reactivación de Clientes"
              quote="Genera ingresos inmediatos con los clientes que ya tienes."
              desc="Reactivamos automáticamente a tu base de datos 'dormida' con ofertas hiper-personalizadas, transformando contactos olvidados en ventas."
              accentColor="yellow-500"
            />
          </div>
        </div>
      </section>

      {/* --- AI PLAYGROUND (CLÍNICA DE PROCESOS 2.0) --- */}
      <WorkflowGenerator />

      {/* --- PHILOSOPHY (VISUAL & EMOCIONAL) --- */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-[#3776AB]/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#EA4B71]/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Col: Text & Values */}
          <div className="order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3776AB]/10 border border-[#3776AB]/30 text-[#3776AB] text-xs font-bold uppercase tracking-widest mb-6">
              <Network className="w-3 h-3" />
              Manifiesto Systemic
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
               No construimos software. <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Construimos Libertad.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
               <p>
                 La mayoría de las agencias te venden "parches digitales" que se rompen en un mes. Nosotros somos <span className="text-white font-semibold">Arquitectos de Sistemas</span>.
               </p>
               <p>
                 Creemos que una empresa eficiente es un <strong>organismo vivo</strong>. Conectamos tus herramientas aisladas (CRM, Bancos, Ads) en un sistema nervioso central usando <span className="text-[#EA4B71] font-medium">n8n</span> y <span className="text-[#3776AB] font-medium">Python</span>.
               </p>
               <p>
                 El resultado no es solo "ahorrar tiempo". Es devolverte la capacidad de dirigir tu negocio sin estar atrapado en la operación diaria.
               </p>
            </div>

            {/* Value Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
               <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-[#EA4B71]/50 transition-all group">
                  <div className="w-10 h-10 bg-[#EA4B71]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <Layers className="w-5 h-5 text-[#EA4B71]" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Visión Holística</h4>
                  <p className="text-sm text-gray-500">No arreglamos síntomas. Curamos la raíz del caos operativo.</p>
               </div>
               
               <div className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-[#3776AB]/50 transition-all group">
                  <div className="w-10 h-10 bg-[#3776AB]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <TrendingUp className="w-5 h-5 text-[#3776AB]" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Escalabilidad Real</h4>
                  <p className="text-sm text-gray-500">Sistemas robustos diseñados para soportar 10x tu volumen actual.</p>
               </div>
            </div>
          </div>

          {/* Right Col: Visual Impact */}
          <div className="order-1 lg:order-2 relative">
             {/* Decorative Elements around image */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#EA4B71] to-[#3776AB] rounded-full blur-[60px] opacity-40"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#3776AB] to-purple-600 rounded-full blur-[80px] opacity-30"></div>
             
             <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl group">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10"></div>
                 <div className="absolute inset-0 bg-[#EA4B71] mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                 
                 <img 
                    src="/profile-systemic.jpg" 
                    alt="Fundador de Systemic World" 
                    className="w-full h-[600px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                 />
                 
                 {/* Floating Badge */}
                 <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-5 transform translate-y-0 transition-transform duration-500 hover:-translate-y-2">
                        {/* CÍRCULO CON LA IMAGEN DE TU LOGO */}
                        <div className="w-12 h-12 bg-gradient-to-br from-[#EA4B71] to-[#D43A5A] rounded-full flex items-center justify-center shadow-lg shrink-0 overflow-hidden p-1">
                             <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                             <h3 className="text-xl font-bold text-white tracking-tight">Systemic World</h3>
                             <p className="text-gray-300 text-xs uppercase tracking-wider mt-1">Partners en Automatización</p>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT / CTA --- */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#0B0F19] to-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#EA4B71] to-[#FF6D5A] mb-8 leading-tight">
            Automatiza lo aburrido.<br/>Escala lo importante.
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            ¿Listo para poner orden en tu caos operativo? Entra al Automation Lab.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
             <button className="w-full md:w-auto px-8 py-4 bg-[#EA4B71] hover:bg-[#D43A5A] text-white text-lg font-bold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(234,75,113,0.4)] flex items-center justify-center gap-3">
               <Calendar className="w-5 h-5" />
               Agendar Sesión de Diagnóstico
             </button>
             <a href={SOCIAL_LINKS.email} className="w-full md:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white text-lg font-medium rounded-lg transition-all flex items-center justify-center gap-3 border border-gray-700">
               <Mail className="w-5 h-5" />
               Email
             </a>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-[#0077B5] hover:text-white text-gray-400 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-black hover:text-white text-gray-400 transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:text-white text-gray-400 transition-all">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-black hover:text-white text-gray-400 transition-all">
              <TikTokIcon className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-red-600 hover:text-white text-gray-400 transition-all">
              <Youtube className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-green-500 hover:text-white text-gray-400 transition-all">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Systemic World | Automation Lab.</p>
        </div>
      </footer>
    </div>
  );
};

// --- SUBCOMPONENTS ---

const ServiceCard = ({ icon, title, quote, desc, accentColor }) => {
  const colorMap = {
    'green-500': { text: 'text-green-500', bg: 'bg-green-500', border: 'hover:border-green-500', glow: 'group-hover:bg-green-500/20' },
    'blue-500': { text: 'text-blue-500', bg: 'bg-blue-500', border: 'hover:border-blue-500', glow: 'group-hover:bg-blue-500/20' },
    'orange-500': { text: 'text-orange-500', bg: 'bg-orange-500', border: 'hover:border-orange-500', glow: 'group-hover:bg-orange-500/20' },
    'purple-500': { text: 'text-purple-500', bg: 'bg-purple-500', border: 'hover:border-purple-500', glow: 'group-hover:bg-purple-500/20' },
    'red-500': { text: 'text-red-500', bg: 'bg-red-500', border: 'hover:border-red-500', glow: 'group-hover:bg-red-500/20' },
    'yellow-500': { text: 'text-yellow-500', bg: 'bg-yellow-500', border: 'hover:border-yellow-500', glow: 'group-hover:bg-yellow-500/20' },
  };

  const colors = colorMap[accentColor] || colorMap['blue-500'];

  return (
    <div className={`bg-[#0F172A] border border-gray-800 p-8 rounded-2xl ${colors.border} transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col relative overflow-hidden`}>
      <div className={`absolute -right-10 -top-10 w-32 h-32 ${colors.bg} opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity`}></div>
      
      <div className={`w-16 h-16 bg-gray-800/80 rounded-xl flex items-center justify-center mb-6 ${colors.glow} transition-colors duration-300`}>
        <div className={`${colors.text} group-hover:text-white transition-colors duration-300`}>
          {React.cloneElement(icon, { size: 32 })}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      
      <div className={`mb-4 pl-3 border-l-2 ${colors.text.replace('text', 'border')} italic text-gray-300 text-sm`}>
        "{quote}"
      </div>
      
      <p className="text-gray-400 leading-relaxed text-sm flex-grow">
        {desc}
      </p>
    </div>
  );
};

const StackBadge = ({ color, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-white/30 transition-all cursor-default">
    <span className={`w-3 h-3 rounded-full ${color}`}></span>
    <span className="text-lg font-bold text-white">{text}</span>
  </div>
);

// WORKFLOW GENERATOR ACTUALIZADO (ESTILO CONSOLA DIAGNÓSTICO)
const WorkflowGenerator = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [blueprint, setBlueprint] = useState(null);
  const [error, setError] = useState(null);
  const [loadingText, setLoadingText] = useState('Analizando sistemas...');

  // Efecto de carga tipo "Hacker"
  useEffect(() => {
    if (loading) {
      const texts = ['Conectando con el núcleo...', 'Analizando cuellos de botella...', 'Diseñando arquitectura...', 'Optimizando flujos...', 'Generando reporte...'];
      let i = 0;
      const interval = setInterval(() => {
        setLoadingText(texts[i % texts.length]);
        i++;
      }, 800);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const generateBlueprint = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setBlueprint(null);

    const apiKey = ""; // API Key here
    
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });

      const prompt = `
        Actúa como un Consultor Senior de Operaciones IA y n8n.
        El usuario tiene este dolor de cabeza operativo: "${input}".
        
        Dame una solución directa y realista.
        Devuelve SOLO un objeto JSON válido (sin markdown) con esta estructura:
        {
          "diagnosis": "Breve frase empática que valide el problema (ej: 'Entiendo, perder leads por tardar en responder quema dinero.')",
          "input_stage": "Qué datos entran (ej: WhatsApp, Email, Excel)",
          "process_stage": "Qué hace la IA (ej: Clasifica, Extrae, Calcula)",
          "output_stage": "Qué recibe el humano (ej: Alerta, Reporte, Pago)",
          "impact": "El resultado final de alivio (ej: 'Tu equipo recupera 10h semanales y las ventas suben 20%')."
        }
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();
      text = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const data = JSON.parse(text);
      setBlueprint(data);

    } catch (err) {
      console.error(err);
      setError("Conectando con el Núcleo de Diagnóstico... (Verifica tu API Key)"); 
      setBlueprint({
        diagnosis: "Entiendo perfecto. La gestión manual de facturas es el cuello de botella número 1 en administración.",
        input_stage: "PDFs de Facturas (Email/Drive)",
        process_stage: "IA extrae RFC, Monto y Fecha -> Python valida en el SAT",
        output_stage: "Datos limpios en tu ERP y alerta de discrepancias",
        impact: "Cero errores de dedo y facturación en tiempo real sin intervención humana."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSelect = (text) => {
    setInput(text);
  };

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    // Usa el número definido en SOCIAL_LINKS pero limpio de caracteres
    const phoneNumber = SOCIAL_LINKS.whatsapp.replace('https://wa.me/', '');
    const message = encodeURIComponent("Hola! Estoy interesado en iniciar un protocolo de construcción de automatización con IA personalizada para mi organización");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="playground" className="py-24 px-6 bg-gradient-to-br from-[#0F172A] to-[#1e1b4b] border-y border-gray-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA4B71]/10 border border-[#EA4B71]/30 text-[#EA4B71] text-xs font-semibold uppercase tracking-wider mb-4">
            <Stethoscope className="w-3 h-3" />
            Clínica de Procesos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Cuál es el Mayor Dolor de Cabeza en tu organización?</h2>
          <p className="text-gray-400">
            Cuéntame qué proceso te quita el sueño. Diseñemos la mejor solución.
          </p>
        </div>

        {/* CONTENEDOR CONSOLA FUTURISTA */}
        <div className="bg-[#0B0F19]/90 backdrop-blur-xl border border-gray-700/50 p-6 md:p-10 rounded-3xl shadow-[0_0_60px_-15px_rgba(234,75,113,0.15)] relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_80px_-10px_rgba(234,75,113,0.25)]">
          
          {/* Bordes brillantes decorativos */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#EA4B71] to-transparent opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3776AB] to-transparent opacity-20"></div>

          {/* Chips de Selección Rápida */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
             {['Odio pasar datos a Excel', 'Pierdo ventas en WhatsApp', 'Mi inventario no cuadra', 'Tardo años facturando'].map((item) => (
                <button 
                  key={item}
                  onClick={() => handleQuickSelect(item)}
                  className="px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 text-xs text-gray-400 hover:text-white hover:border-[#EA4B71] hover:bg-[#EA4B71]/10 transition-all cursor-pointer"
                >
                  {item}
                </button>
             ))}
          </div>

          {/* Input Area */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 relative z-10">
            <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Activity className="w-5 h-5 text-gray-500" />
                </div>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && generateBlueprint()}
                  placeholder="Escribe tu problema aquí..."
                  className="w-full bg-black/40 border border-gray-700 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#EA4B71] focus:ring-1 focus:ring-[#EA4B71] placeholder-gray-600 transition-all font-mono text-sm shadow-inner"
                />
            </div>
            <button 
              onClick={generateBlueprint}
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-[#EA4B71] to-[#D43A5A] hover:from-[#FF6D5A] hover:to-[#EA4B71] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all min-w-[160px] shadow-lg shadow-[#EA4B71]/20 hover:shadow-[#EA4B71]/40 transform hover:-translate-y-0.5"
            >
              {loading ? <Loader className="w-5 h-5 animate-spin" /> : <><Sparkles className="w-5 h-5" /> DIAGNOSTICAR</>}
            </button>
          </div>
          
          {/* Mensaje de carga animado */}
          {loading && (
             <div className="text-center text-[#EA4B71] font-mono text-sm animate-pulse mb-4">
               {`> ${loadingText}`}
             </div>
          )}

          {/* Results Area (Holographic Card) */}
          {blueprint && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
               {error && <p className="text-gray-400 text-sm mb-4 text-center italic font-mono">&gt; {error}</p>}
               
               <div className="bg-[#1A202C]/80 border-l-4 border-l-[#EA4B71] border-y border-r border-gray-700/50 rounded-r-xl p-8 relative overflow-hidden backdrop-blur-md">
                 
                 <div className="relative z-10">
                   <div className="text-[#EA4B71] text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                       <span className="w-2 h-[1px] bg-[#EA4B71]"></span> REPORTE DE SISTEMAS
                   </div>
                   
                   <div className="mb-8">
                     <h3 className="text-xl font-bold text-white mb-2">Diagnóstico</h3>
                     <p className="text-gray-300 italic">"{blueprint.diagnosis}"</p>
                   </div>
                   
                   {/* DIAGRAMA DE FLUJO VERTICAL */}
                   <div className="flex flex-col gap-0 mb-8 relative">
                      {/* Linea conectora */}
                      <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gray-700 -z-10"></div>

                      <div className="flex items-start gap-4 mb-6">
                         <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center shrink-0 text-gray-400">
                            <FileText size={18} />
                         </div>
                         <div>
                            <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">Input (El Caos)</span>
                            <p className="text-gray-300 text-sm">{blueprint.input_stage}</p>
                         </div>
                      </div>

                      <div className="flex items-start gap-4 mb-6">
                         <div className="w-10 h-10 rounded-full bg-[#3776AB]/20 border border-[#3776AB] flex items-center justify-center shrink-0 text-[#3776AB]">
                            <Cpu size={18} />
                         </div>
                         <div>
                            <span className="text-[#3776AB] text-xs uppercase font-bold tracking-wider">Systemic Core</span>
                            <p className="text-white text-sm font-medium">{blueprint.process_stage}</p>
                         </div>
                      </div>

                      <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center shrink-0 text-green-500">
                            <CheckCircle size={18} />
                         </div>
                         <div>
                            <span className="text-green-500 text-xs uppercase font-bold tracking-wider">Output (El Orden)</span>
                            <p className="text-white text-sm">{blueprint.output_stage}</p>
                         </div>
                      </div>
                   </div>

                   <div className="bg-gradient-to-r from-[#EA4B71]/10 to-transparent border border-[#EA4B71]/20 p-4 rounded-lg flex items-center gap-4">
                      <div className="p-2 bg-[#EA4B71]/20 rounded-full">
                          <Zap className="text-[#EA4B71] w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[#EA4B71] text-xs font-bold uppercase tracking-wide">Impacto Proyectado</span>
                        <p className="text-white font-medium text-lg">{blueprint.impact}</p>
                      </div>
                   </div>

                 </div>
               </div>

               <div className="mt-8 text-center animate-bounce">
                 <ArrowDown className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                 <button onClick={openWhatsApp} className="text-sm text-gray-400 hover:text-white hover:underline decoration-[#EA4B71] underline-offset-4 transition-colors font-mono">
                   &gt; INICIAR PROTOCOLO DE CONSTRUCCIÓN
                 </button>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default App;

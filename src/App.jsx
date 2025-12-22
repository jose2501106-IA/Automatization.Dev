import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Bot, Workflow, Zap, 
  Database, Terminal, Code, CheckCircle, ExternalLink, 
  Mail, Calendar, Linkedin, Github, Instagram, Youtube, Layers, Sparkles,
  Loader, Cpu, Play, BrainCircuit, FileText, ShieldCheck, 
  MessageSquareText, Network, Server, Lock, CreditCard, 
  BarChart, RefreshCw, Sliders
} from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            
            {/* --- LOGO --- */}
            <div className="w-10 h-10 bg-[#EA4B71]/20 border border-[#EA4B71] rounded-lg flex items-center justify-center">
               <span className="text-[10px] text-[#EA4B71] font-bold">LOGO</span>
            </div>

            <span className="tracking-tight">Systemic World</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Soluciones', 'Lab', 'Casos', 'Filosofía'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'soluciones' ? 'services' : item.toLowerCase() === 'lab' ? 'playground' : item.toLowerCase() === 'casos' ? 'workflows' : item.toLowerCase() === 'filosofía' ? 'about' : item.toLowerCase())}
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
            {['Home', 'Soluciones', 'Lab', 'Casos'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'soluciones' ? 'services' : item.toLowerCase() === 'lab' ? 'playground' : item.toLowerCase() === 'casos' ? 'workflows' : item.toLowerCase())}
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

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-[#EA4B71] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#EA4B71] animate-pulse"></span>
              Automation Lab
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Transformo el caos en un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4B71] to-[#FF6D5A]">Sistema Inteligente</span>.
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              No pongo parches. Diseño ecosistemas de automatización con <strong>n8n, Python y LLMs</strong> que leen documentos, toman decisiones y ejecutan procesos complejos, permitiendo que tu negocio funcione como un reloj suizo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('playground')} className="px-8 py-4 bg-[#EA4B71] hover:bg-[#D43A5A] text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] shadow-[0_0_20px_rgba(234,75,113,0.3)]">
                <BrainCircuit className="w-4 h-4" /> Diseñar Sistema
              </button>
              <button onClick={() => scrollToSection('workflows')} className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-white font-medium rounded-lg transition-all hover:bg-white/5">
                Ver Casos de Uso
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

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Soluciones Sistémicas</h2>
            <p className="text-gray-400 max-w-2xl">
              No vendo configuraciones básicas. Construyo infraestructura digital que escala con tu negocio y elimina el error humano.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<Workflow />}
              title="n8n Workflow Design"
              desc="Arquitectura de flujos de trabajo avanzados. No solo conecto aplicaciones; diseño la lógica de negocio completa para que opere de forma autónoma y resiliente a errores."
            />
            <ServiceCard 
              icon={<Network />}
              title="API Integrations"
              desc="Conecto lo imposible. Si tiene una API, puedo integrarlo. Unifico tu CRM, ERP, Pasarelas de Pago (Stripe) y Herramientas de Marketing en un solo ecosistema."
            />
            <ServiceCard 
              icon={<RefreshCw />}
              title="Data Transformation (ETL)"
              desc="Tus datos están sucios y desordenados. Uso Python para extraerlos, limpiarlos, transformarlos y cargarlos en bases de datos modernas como Supabase."
            />
            <ServiceCard 
              icon={<Sliders />}
              title="Process Optimization"
              desc="Consultoría operativa. Antes de automatizar, optimizo. Analizo tus procesos actuales para eliminar cuellos de botella y redundancias."
            />
            <ServiceCard 
              icon={<Bot />}
              title="AI Agents & Chatbots"
              desc="Asistentes inteligentes que no solo responden, sino que ejecutan. Conecto LLMs a tu WhatsApp para calificar leads, agendar citas en Calendly y sincronizar tu CRM."
            />
            <ServiceCard 
              icon={<BarChart />}
              title="Business Intelligence (BI)"
              desc="Visualiza tu éxito. Conecto tus fuentes de datos a Looker Studio para crear Dashboards en tiempo real que te permiten tomar decisiones basadas en datos."
            />
          </div>
        </div>
      </section>

      {/* --- AI PLAYGROUND --- */}
      <WorkflowGenerator />

      {/* --- PROJECTS / WORKFLOWS --- */}
      <section id="workflows" className="py-24 px-6 bg-[#0F172A]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sistemas en Producción</h2>
              <p className="text-gray-400">Casos reales de eficiencia sistémica.</p>
            </div>
            <button className="text-[#EA4B71] font-semibold flex items-center gap-2 hover:text-white transition-colors">
              Ver Demos en GitHub <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-20">
            <ProjectCase 
              title="Dashboard de Ventas en Tiempo Real"
              category="BI & Data Transformation"
              problem="El director comercial esperaba al cierre de mes para ver las ventas. Los datos estaban dispersos en Stripe, CRM y Excel."
              solution="Pipeline ETL en n8n que extrae datos de Stripe y HubSpot cada hora, los limpia con Python y los guarda en Supabase. Looker Studio visualiza los KPIs en vivo."
              result="Visibilidad total del negocio 24/7 y toma de decisiones inmediata."
              tags={['Looker Studio', 'Stripe API', 'Supabase', 'Python Pandas']}
              imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            />
            <ProjectCase 
              title="Cualificación de Leads con IA (Lead Scoring)"
              category="Sales Automation"
              problem="El equipo de ventas perdía horas contactando leads de baja calidad o 'curiosos', mientras los clientes potenciales reales se enfriaban."
              solution="Flujo en n8n que recibe el lead, usa GPT-4 para analizar el perfil y clasificarlo. Los 'Hot Leads' reciben WhatsApp inmediato y alerta en Slack al vendedor."
              result="Respuesta en < 60 segundos y aumento del 25% en conversión."
              tags={['n8n', 'OpenAI', 'WhatsApp API', 'HubSpot']}
              imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            />
            <ProjectCase 
              title="Motor de Reactivación de Clientes"
              category="Customer Retention (SQL + AI)"
              problem="Una cadena de clínicas en CDMX tenía 15,000 ex-pacientes en su base de datos sin actividad reciente, perdiendo ingresos potenciales."
              solution="Query SQL identifica pacientes 'Top Tier' inactivos por >90 días. Python genera una oferta personalizada basada en su historial. n8n envía el mensaje vía WhatsApp."
              result="Recuperación del 18% de la base inactiva y $450k MXN generados en 1 mes."
              tags={['PostgreSQL', 'Python Analytics', 'n8n', 'WhatsApp']}
              imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">El Enfoque "Systemic World"</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                No soy un simple implementador de herramientas. Soy un <span className="text-white font-semibold">Arquitecto de Sistemas</span>.
              </p>
              <p>
                En <strong>Systemic World</strong>, creo que una empresa eficiente no es una colección de herramientas sueltas, sino un organismo integrado.
              </p>
              <p>
                Uso <strong>n8n</strong> como el sistema nervioso central y <strong>Python</strong> para la inteligencia compleja, creando soluciones que no solo ahorran tiempo, sino que transforman la cultura operativa de tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                <h4 className="text-white font-bold mb-1">Visión Holística</h4>
                <p className="text-sm text-gray-500">Todo está conectado.</p>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                <h4 className="text-white font-bold mb-1">Escalabilidad</h4>
                <p className="text-sm text-gray-500">Sistemas listos para crecer.</p>
              </div>
            </div>
          </div>
           
           <div className="relative order-2 md:order-1 h-full min-h-[400px] rounded-2xl overflow-hidden border border-gray-700 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10"></div>
              
              {/* TU FOTO DE PERFIL */}
              <img 
                src="/profile-systemic.jpg" 
                alt="José Hugo - Fundador de Systemic World" 
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              <div className="absolute bottom-0 left-0 p-8 z-20">
                 <div className="inline-block p-2 bg-[#EA4B71] rounded-lg mb-3">
                    <span className="text-white font-bold text-xs">SW</span>
                 </div>
                 <h3 className="text-2xl font-bold text-white tracking-tight">Systemic World</h3>
                 <p className="text-gray-300 text-sm mt-1">Tu Socio de Automatización</p>
              </div>
           </div>
        </div>
      </section>

      {/* --- CONTACT / CTA --- */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#0B0F19] to-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Automatiza lo aburrido. Escala lo importante.
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            ¿Listo para poner orden en tu caos operativo? Entra al Automation Lab.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
             <button className="w-full md:w-auto px-8 py-4 bg-[#EA4B71] hover:bg-[#D43A5A] text-white text-lg font-bold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(234,75,113,0.4)] flex items-center justify-center gap-3">
               <Calendar className="w-5 h-5" />
               Agendar Sesión de Diagnóstico
             </button>
             <a href="mailto:project.manager@systemicworld.tech" className="w-full md:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white text-lg font-medium rounded-lg transition-all flex items-center justify-center gap-3 border border-gray-700">
               <Mail className="w-5 h-5" />
               Email
             </a>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-[#0077B5] hover:text-white text-gray-400 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-black hover:text-white text-gray-400 transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:text-white text-gray-400 transition-all">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://tiktok.com/@tu-usuario" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-black hover:text-white text-gray-400 transition-all">
              <TikTokIcon className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/@tu-canal" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-red-600 hover:text-white text-gray-400 transition-all">
              <Youtube className="w-6 h-6" />
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

const StackBadge = ({ color, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-white/30 transition-all cursor-default">
    <span className={`w-3 h-3 rounded-full ${color}`}></span>
    <span className="text-lg font-bold text-white">{text}</span>
  </div>
);

const WorkflowGenerator = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [blueprint, setBlueprint] = useState(null);
  const [error, setError] = useState(null);

  const generateBlueprint = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setBlueprint(null);

    const apiKey = ""; 
    
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });

      const prompt = `
        Actúa como un Arquitecto de Sistemas en 'Systemic World'.
        El usuario tiene este problema/tarea manual: "${input}".
        
        Diseña una solución sistémica usando n8n, Python y Agentes de IA.
        Devuelve SOLO un objeto JSON válido (sin markdown) con esta estructura:
        {
          "agent_name": "Nombre del Sistema (ej: 'InvoiceGuard AI System', 'LeadHunter Core')",
          "trigger": "Evento disparador",
          "workflow_steps": "Describe 3 pasos clave técnicos (ej: 'Ingesta vectorial', 'Script de Python de limpieza', 'Human-in-the-loop approval').",
          "outcome": "Resultado de negocio (ej: 'Reducción del 90% en errores manuales')."
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
      setError("Conectando con el Systemic Core... (Verifica tu API Key)"); 
      setBlueprint({
        agent_name: "DocuBrain System",
        trigger: "Nuevo documento en Drive",
        workflow_steps: "1. OCR y limpieza con Python. 2. Vectorización (Pinecone). 3. Agente QA valida datos críticos.",
        outcome: "Datos extraídos con 99% de precisión y subidos al ERP."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="playground" className="py-24 px-6 bg-gradient-to-br from-[#0F172A] to-[#1e1b4b] border-y border-gray-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA4B71]/10 border border-[#EA4B71]/30 text-[#EA4B71] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            Systemic World Lab
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Diseña tu Sistema</h2>
          <p className="text-gray-400">
            Describe un cuello de botella en tu operación. Diseñaré la arquitectura de un sistema autónomo para resolverlo.
          </p>
        </div>

        <div className="bg-[#0B0F19] border border-gray-700 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Input Area */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 relative z-10">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && generateBlueprint()}
              placeholder="Ej: Necesito leer contratos legales y extraer las cláusulas de riesgo..."
              className="flex-1 bg-gray-800/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#EA4B71] focus:ring-1 focus:ring-[#EA4B71] placeholder-gray-500 transition-all"
            />
            <button 
              onClick={generateBlueprint}
              disabled={loading || !input.trim()}
              className="bg-[#EA4B71] hover:bg-[#D43A5A] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all min-w-[160px]"
            >
              {loading ? <Loader className="w-5 h-5 animate-spin" /> : <><BrainCircuit className="w-5 h-5" /> Generar</>}
            </button>
          </div>

          {/* Results Area */}
          {blueprint && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
               {error && <p className="text-gray-400 text-sm mb-4 text-center italic">{error}</p>}
               
               <div className="bg-[#1A202C] border border-[#EA4B71]/30 rounded-xl p-6 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Bot size={100} className="text-[#EA4B71]" />
                 </div>
                 
                 <div className="relative z-10">
                   <div className="text-[#EA4B71] text-xs font-bold uppercase tracking-widest mb-2">Arquitectura Propuesta</div>
                   <h3 className="text-2xl font-bold text-white mb-6">{blueprint.agent_name}</h3>
                   
                   <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <span className="text-gray-500 text-xs uppercase font-bold">Disparador</span>
                        <p className="text-gray-300 mt-1">{blueprint.trigger}</p>
                      </div>
                      <div className="md:col-span-2">
                        <span className="text-gray-500 text-xs uppercase font-bold">Lógica del Sistema</span>
                        <p className="text-gray-300 mt-1">{blueprint.workflow_steps}</p>
                      </div>
                   </div>

                   <div className="bg-[#EA4B71]/10 border border-[#EA4B71]/20 p-4 rounded-lg flex items-center gap-3">
                      <Zap className="text-[#EA4B71] w-5 h-5 shrink-0" />
                      <div>
                        <span className="text-[#EA4B71] text-xs font-bold uppercase">Impacto de Negocio</span>
                        <p className="text-white font-medium text-sm">{blueprint.outcome}</p>
                      </div>
                   </div>
                 </div>
               </div>

               <div className="mt-6 text-center">
                 <button onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} className="text-sm text-gray-400 hover:text-white underline decoration-[#EA4B71] underline-offset-4 transition-colors">
                   Quiero que construyas este sistema para mí
                 </button>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-[#0F172A] border border-gray-800 p-8 rounded-xl hover:border-[#EA4B71]/50 transition-all group hover:-translate-y-1 hover:shadow-lg">
    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#EA4B71] transition-colors">
      <div className="text-[#EA4B71] group-hover:text-white transition-colors">
        {React.cloneElement(icon, { size: 24 })}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

const ProjectCase = ({ title, category, problem, solution, result, tags, imageUrl }) => (
  <div className="group relative overflow-hidden bg-[#0F172A] border border-gray-800 rounded-2xl hover:border-[#EA4B71]/50 transition-all duration-300">
    {imageUrl && (
        <div className="w-full h-48 bg-gray-800 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent z-10"></div>
            <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
        </div>
    )}
    <div className="p-8 grid md:grid-cols-[1fr_2fr] gap-8">
      <div>
        <div className="text-[#EA4B71] font-medium text-sm mb-2">{category}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Problema Operativo
          </h4>
          <p className="text-gray-400">{problem}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-[#EA4B71] rounded-full"></div> Solución n8n + AI
          </h4>
          <p className="text-gray-400">{solution}</p>
        </div>
        <div className="bg-[#EA4B71]/10 border border-[#EA4B71]/20 p-4 rounded-lg">
          <h4 className="text-[#EA4B71] font-bold flex items-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4" /> ROI (Retorno de Inversión)
          </h4>
          <p className="text-gray-300 font-medium">{result}</p>
        </div>
      </div>
    </div>
  </div>
);

export default App;

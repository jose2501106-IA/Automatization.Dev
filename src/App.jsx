import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Bot, Workflow, Zap, 
  Database, Terminal, Code, CheckCircle, ExternalLink, 
  Mail, Calendar, Linkedin, Github, Layers, Sparkles,
  Loader, Cpu, Play
} from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

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
          <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-8 h-8 bg-gradient-to-br from-[#EA4B71] to-[#FF6D5A] rounded-lg flex items-center justify-center">
              <Workflow className="w-5 h-5 text-white" />
            </div>
            <span>Automation.Dev</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Playground', 'Workflows', 'About'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-gray-300 hover:text-[#EA4B71] transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 bg-[#EA4B71] hover:bg-[#D43A5A] text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(234,75,113,0.3)]"
            >
              Hablemos
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F19] border-b border-gray-800 p-6 flex flex-col gap-6 shadow-2xl">
            {['Home', 'Services', 'Playground', 'Workflows', 'About'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-medium text-gray-300"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 bg-[#EA4B71] text-white font-semibold rounded-lg"
            >
              Hablemos
            </button>
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
              Especialista en n8n & Python
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Automatización inteligente con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4B71] to-[#FF6D5A]">n8n</span> y <span className="text-[#3776AB]">Python</span>.
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Conecto tus aplicaciones, elimino tareas repetitivas y creo flujos de trabajo inteligentes que escalan contigo. La potencia del Low-Code con la flexibilidad del código puro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('playground')} className="px-8 py-4 bg-[#EA4B71] hover:bg-[#D43A5A] text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] shadow-[0_0_20px_rgba(234,75,113,0.3)]">
                <Sparkles className="w-4 h-4" /> Pruébalo Ahora
              </button>
              <button onClick={() => scrollToSection('workflows')} className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-white font-medium rounded-lg transition-all hover:bg-white/5">
                Ver Automatizaciones
              </button>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
             <div className="relative w-full h-full border border-gray-800/50 rounded-2xl bg-[#0F172A]/30 backdrop-blur-sm p-8 overflow-hidden group">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-700/50 -z-10"></div>
                <div className="flex flex-col gap-6 h-full justify-center relative z-10">
                  <div className="bg-[#1A202C] border border-[#EA4B71] p-4 rounded-lg w-48 shadow-[0_0_15px_rgba(234,75,113,0.2)] ml-0 self-start">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-[#EA4B71]" />
                      <span className="text-xs font-bold text-white uppercase">Webhook Trigger</span>
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono bg-black/30 p-2 rounded">POST /lead-signup</div>
                  </div>

                  <div className="bg-[#1A202C] border border-[#3776AB] p-4 rounded-lg w-72 shadow-[0_0_15px_rgba(55,118,171,0.2)] self-center relative">
                    <div className="absolute -top-6 left-1/2 w-[2px] h-6 bg-gray-500"></div>
                    <div className="absolute -bottom-6 left-1/2 w-[2px] h-6 bg-gray-500"></div>
                    <div className="flex items-center gap-2 mb-2 justify-between">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[#3776AB]" />
                        <span className="text-xs font-bold text-white uppercase">Python Code Node</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <div className="text-[10px] text-gray-300 font-mono bg-[#0B0F19] p-2 rounded border-l-2 border-[#3776AB]">
                      <span className="text-[#EA4B71]">for</span> item <span className="text-[#EA4B71]">in</span> items:<br/>
                      &nbsp;&nbsp;data = json.loads(item.json)<br/>
                      &nbsp;&nbsp;score = <span className="text-yellow-400">calculate_lead_score</span>(data)<br/>
                      &nbsp;&nbsp;<span className="text-[#EA4B71]">return</span> &#123;"score": score&#125;
                    </div>
                  </div>

                  <div className="bg-[#1A202C] border border-green-500 p-4 rounded-lg w-48 shadow-[0_0_15px_rgba(34,197,94,0.2)] ml-auto self-end">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-bold text-white uppercase">Update CRM</span>
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono bg-black/30 p-2 rounded">Action: Upsert Row</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- EXPERTISE / STACK --- */}
      <section className="py-10 border-y border-gray-800 bg-[#0F172A]/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
            Herramientas & Tecnologías
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-80">
             <div className="flex items-center gap-2">
               <span className="w-3 h-3 rounded-full bg-[#EA4B71]"></span>
               <span className="text-xl font-bold text-white">n8n</span>
             </div>
             <div className="flex items-center gap-2">
               <span className="w-3 h-3 rounded-full bg-[#3776AB]"></span>
               <span className="text-xl font-bold text-white">Python</span>
             </div>
             {['OpenAI API', 'Webhooks', 'REST APIs', 'JSON', 'PostgreSQL', 'Google Workspace'].map((tech) => (
               <span key={tech} className="text-lg font-medium text-gray-400 hover:text-white transition-all cursor-default">
                 {tech}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Servicios de Automatización</h2>
            <p className="text-gray-400 max-w-2xl">
              Me especializo en crear puentes entre tus aplicaciones. Si tiene una API, puedo automatizarlo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<Workflow />}
              title="n8n Workflow Design"
              desc="Diseño e implementación de flujos de trabajo complejos en n8n. Desde sincronización de datos simple hasta orquestación de procesos multi-etapa."
            />
            <ServiceCard 
              icon={<Code />}
              title="Python Scripting"
              desc="Creación de nodos personalizados en Python dentro de n8n para manipulación de datos avanzada, cálculos matemáticos o lógica que las herramientas no-code no pueden manejar."
            />
            <ServiceCard 
              icon={<Bot />}
              title="AI Agents & Chatbots"
              desc="Integración de LLMs (GPT-4, Claude) en tus flujos de n8n para analizar correos, resumir textos o crear asistentes inteligentes conectados a tus datos."
            />
            <ServiceCard 
              icon={<Database />}
              title="API Integrations"
              desc="Conecto herramientas que 'no se hablan' entre sí. CRM, Google Sheets, Slack, Airtable, Shopify y sistemas legacy mediante APIs REST/GraphQL."
            />
            <ServiceCard 
              icon={<Layers />}
              title="Data Transformation"
              desc="Limpieza y formateo automático de datos (ETL ligero) usando Python antes de enviarlos a tu base de datos o dashboard."
            />
            <ServiceCard 
              icon={<Zap />}
              title="Process Optimization"
              desc="Auditoría de tus procesos actuales para detectar cuellos de botella y reemplazarlos por automatizaciones eficientes que trabajan 24/7."
            />
          </div>
        </div>
      </section>

      {/* --- AI PLAYGROUND: Workflow Blueprint --- */}
      <WorkflowGenerator />

      {/* --- PROJECTS / WORKFLOWS --- */}
      <section id="workflows" className="py-24 px-6 bg-[#0F172A]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Automatizaciones Destacadas</h2>
              <p className="text-gray-400">Ejemplos de cómo n8n + Python resuelven problemas reales.</p>
            </div>
            <button className="text-[#EA4B71] font-semibold flex items-center gap-2 hover:text-white transition-colors">
              Ver Repo en GitHub <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-20">
            <ProjectCase 
              title="Lead Scoring & Enrichment Automático"
              category="Sales Automation"
              problem="El equipo de ventas perdía tiempo investigando leads que llegaban desde formularios web, muchos de baja calidad."
              solution="Workflow en n8n que: 1. Detecta nuevo lead. 2. Usa Python para limpiar el email. 3. Consulta API de LinkedIn/Clearbit para enriquecer datos. 4. Usa GPT-4 para calificar el lead (Hot/Cold). 5. Envía alerta a Slack."
              result="Ahorro de 15 horas semanales al equipo de ventas y respuesta inmediata a leads calificados."
              tags={['n8n', 'Python Code Node', 'OpenAI', 'Slack API', 'HubSpot']}
            />
            <ProjectCase 
              title="Generador de Contenido Social IA"
              category="Marketing Ops"
              problem="Mantener las redes sociales activas requería demasiado esfuerzo manual de redacción y diseño básico."
              solution="Sistema automatizado donde una idea en Notion dispara un flujo en n8n. Usa OpenAI para escribir el copy y Python para generar una imagen base (o conectar con DALL-E), programando el post automáticamente."
              result="Incremento del 200% en la frecuencia de publicación sin intervención humana extra."
              tags={['n8n', 'Notion Webhooks', 'OpenAI API', 'Python Image Lib']}
            />
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 relative z-10">
               <div className="w-full h-full bg-gradient-to-br from-[#0B0F19] to-[#1A202C] flex items-center justify-center border-2 border-[#EA4B71]/30 p-8">
                 <div className="text-center">
                   <Workflow className="w-16 h-16 text-[#EA4B71] mx-auto mb-4" />
                   <span className="text-gray-500 font-medium block">Estudiante & Maker</span>
                   <span className="text-xs text-gray-600">Enfocado en eficiencia</span>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sobre mí</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hola, soy un <span className="text-white font-semibold">Desarrollador de Automatizaciones</span> en formación.
              </p>
              <p>
                Mientras muchos se enfocan solo en aprender teoría, yo me he obsesionado con una cosa: <span className="text-[#EA4B71]">hacer que las cosas funcionen solas</span>. Utilizo <strong>n8n</strong> como mi centro de mando y <strong>Python</strong> como mi navaja suiza para resolver lo que las herramientas estándar no pueden.
              </p>
              <p>
                Mi filosofía es simple: si tienes que hacerlo más de tres veces, merece ser automatizado. Ayudo a pequeños negocios y emprendedores a recuperar su tiempo integrando sistemas inteligentes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                <h4 className="text-white font-bold mb-1">Low-Code First</h4>
                <p className="text-sm text-gray-500">Velocidad de desarrollo.</p>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                <h4 className="text-white font-bold mb-1">Code Second</h4>
                <p className="text-sm text-gray-500">Python para complejidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT / CTA --- */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#0B0F19] to-[#0F172A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Tienes una tarea repetitiva?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Déjame construir un robot que la haga por ti. Automatiza tus procesos hoy mismo con n8n.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
             <button className="w-full md:w-auto px-8 py-4 bg-[#EA4B71] hover:bg-[#D43A5A] text-white text-lg font-bold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(234,75,113,0.4)] flex items-center justify-center gap-3">
               <Calendar className="w-5 h-5" />
               Agendar Demo
             </button>
             <button className="w-full md:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white text-lg font-medium rounded-lg transition-all flex items-center justify-center gap-3 border border-gray-700">
               <Mail className="w-5 h-5" />
               Contactar por Email
             </button>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="p-3 bg-gray-800/50 rounded-full hover:bg-[#0077B5] hover:text-white text-gray-400 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-gray-800/50 rounded-full hover:bg-black hover:text-white text-gray-400 transition-all">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Automation Engineer. Powered by n8n & React.</p>
        </div>
      </footer>
    </div>
  );
};

// --- SUBCOMPONENTS ---

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

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ""; 
    
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });

      const prompt = `
        Actúa como un Ingeniero Senior de Automatización experto en n8n y Python.
        El usuario tiene este problema/tarea manual: "${input}".
        
        Diseña una solución técnica breve y concreta usando n8n.
        Devuelve SOLO un objeto JSON válido (sin markdown, sin bloques de código) con esta estructura exacta:
        {
          "trigger": "Nombre del nodo Trigger (ej: Google Sheets Trigger, Webhook, Schedule)",
          "trigger_desc": "Breve explicación de cuándo se activa.",
          "python_logic": "Descripción de qué haría el script de Python (ej: Limpieza de datos con Pandas, Regex para extraer emails)",
          "action": "Nombre del nodo de Acción final (ej: Slack, Hubspot, Email)",
          "action_desc": "Qué sucede al final.",
          "benefit": "Una frase corta sobre el tiempo ahorrado o impacto."
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
      setError("No pude conectar con mi cerebro digital en este momento (verifica tu API Key), pero aquí tienes un ejemplo:");
      setBlueprint({
        trigger: "Webhook / Form Submission",
        trigger_desc: "Se activa cuando recibes los datos desordenados.",
        python_logic: "Script de Python para normalizar texto y eliminar duplicados.",
        action: "Google Sheets / CRM",
        action_desc: "Guarda los datos limpios automáticamente.",
        benefit: "Ahorro estimado de 5 horas manuales al mes."
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
            Powered by Gemini AI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Arquitecto de Workflows</h2>
          <p className="text-gray-400">
            Cuéntame una tarea aburrida que hagas manualmente. Diseñaré una solución técnica con n8n y Python para ti en tiempo real.
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
              placeholder="Ej: Tengo que descargar facturas del correo y subirlas a Drive..."
              className="flex-1 bg-gray-800/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#EA4B71] focus:ring-1 focus:ring-[#EA4B71] placeholder-gray-500 transition-all"
            />
            <button 
              onClick={generateBlueprint}
              disabled={loading || !input.trim()}
              className="bg-[#EA4B71] hover:bg-[#D43A5A] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all min-w-[160px]"
            >
              {loading ? <Loader className="w-5 h-5 animate-spin" /> : <><Cpu className="w-5 h-5" /> Diseñar</>}
            </button>
          </div>

          {/* Results Area */}
          {blueprint && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
               {error && <p className="text-yellow-500 text-sm mb-4 text-center">{error}</p>}
               
               <div className="grid md:grid-cols-3 gap-4 relative">
                 <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-[#EA4B71] via-[#3776AB] to-green-500 -z-0"></div>

                 {/* Step 1: Trigger */}
                 <div className="bg-[#1A202C] border border-[#EA4B71]/50 p-5 rounded-xl relative z-10 flex flex-col items-center text-center hover:border-[#EA4B71] transition-colors">
                   <div className="w-10 h-10 bg-[#EA4B71]/20 rounded-full flex items-center justify-center mb-3 text-[#EA4B71] border border-[#EA4B71]">
                     <Zap className="w-5 h-5" />
                   </div>
                   <h4 className="text-white font-bold mb-1">{blueprint.trigger}</h4>
                   <p className="text-xs text-gray-400">{blueprint.trigger_desc}</p>
                 </div>

                 {/* Step 2: Logic */}
                 <div className="bg-[#1A202C] border border-[#3776AB]/50 p-5 rounded-xl relative z-10 flex flex-col items-center text-center hover:border-[#3776AB] transition-colors shadow-[0_0_20px_rgba(55,118,171,0.1)]">
                   <div className="w-10 h-10 bg-[#3776AB]/20 rounded-full flex items-center justify-center mb-3 text-[#3776AB] border border-[#3776AB]">
                     <Code className="w-5 h-5" />
                   </div>
                   <h4 className="text-white font-bold mb-1">Python Logic</h4>
                   <p className="text-xs text-gray-400">{blueprint.python_logic}</p>
                 </div>

                 {/* Step 3: Action */}
                 <div className="bg-[#1A202C] border border-green-500/50 p-5 rounded-xl relative z-10 flex flex-col items-center text-center hover:border-green-500 transition-colors">
                   <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mb-3 text-green-500 border border-green-500">
                     <CheckCircle className="w-5 h-5" />
                   </div>
                   <h4 className="text-white font-bold mb-1">{blueprint.action}</h4>
                   <p className="text-xs text-gray-400">{blueprint.action_desc}</p>
                 </div>
               </div>

               <div className="mt-8 bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between gap-4">
                 <div>
                   <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Impacto Estimado</span>
                   <p className="text-[#EA4B71] font-bold text-lg">{blueprint.benefit}</p>
                 </div>
                 <button onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})} className="shrink-0 text-sm bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition-colors">
                   Construir esto
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

const ProjectCase = ({ title, category, problem, solution, result, tags }) => (
  <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 border-l-2 border-gray-800 pl-6 md:pl-12 hover:border-[#EA4B71] transition-colors py-2">
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
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> El Desafío
        </h4>
        <p className="text-gray-400">{problem}</p>
      </div>
      <div>
        <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 bg-[#EA4B71] rounded-full"></div> Workflow n8n
        </h4>
        <p className="text-gray-400">{solution}</p>
      </div>
      <div className="bg-[#EA4B71]/10 border border-[#EA4B71]/20 p-4 rounded-lg">
        <h4 className="text-[#EA4B71] font-bold flex items-center gap-2 mb-1">
          <CheckCircle className="w-4 h-4" /> Impacto
        </h4>
        <p className="text-gray-300 font-medium">{result}</p>
      </div>
    </div>
  </div>
);

export default App;

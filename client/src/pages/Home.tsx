import { useState } from 'react';
import {
  CONTACT_INFO,
  WHATSAPP_MESSAGES,
  GOOGLE_MAPS,
  SERVICES,
  HOW_IT_WORKS,
  TESTIMONIALS,
  SERVICE_AREAS,
  STATS,
} from '@/lib/constants';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  Star,
  MapPin,
  CheckCircle2,
  Truck,
  Clock,
  Shield,
  Send,
  Phone,
  Mail,
  ChevronDown,
  Users,
  Calendar,
} from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}. Telefone: ${formData.phone}. Email: ${formData.email}. Mensagem: ${formData.message}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`, '_blank');
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const statIcons: Record<string, React.ReactNode> = {
    MapPin: <MapPin size={40} />,
    Users: <Users size={40} />,
    Truck: <Truck size={40} />,
    Calendar: <Calendar size={40} />,
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/hero-cacamba.jpg"
            alt="GS Caçambas - Entrega de Caçamba"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
        </div>

        {/* Animated background blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />

        <div className="container relative z-10 px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/40 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Truck size={16} className="text-primary animate-bounce-slow" />
              <p className="text-xs md:text-sm font-black text-primary uppercase tracking-widest">
                Jacareí · São José dos Campos · Guararema
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.05] text-white mb-6 animate-in fade-in slide-in-from-left-10 duration-1000">
              Caçamba no local,{' '}
              <span className="text-gradient-yellow">
                no mesmo dia.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-4 animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
              Aluguel de caçambas para entulho, reforma, construção e demolição. Entrega rápida, retirada no prazo e atendimento direto com quem resolve.
            </p>

            <p className="text-base text-white/60 leading-relaxed max-w-xl mb-10 animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
              Empresa regularizada, com frota própria e mais de 500 clientes satisfeitos no Vale do Paraíba.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              <button
                onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.orcamento)}
                className="group relative px-8 py-5 bg-primary text-primary-foreground rounded-2xl font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  <MessageCircle size={22} />
                  Solicitar Orçamento
                </span>
              </button>
              <button
                onClick={() => scrollTo('servicos')}
                className="px-8 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-2xl font-black text-lg hover:bg-white/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                Ver Serviços
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 animate-in fade-in duration-1000 delay-700">
              {[
                { icon: <CheckCircle2 size={16} />, label: 'Empresa Regularizada' },
                { icon: <Clock size={16} />, label: 'Entrega no Mesmo Dia' },
                { icon: <Shield size={16} />, label: 'Sem Burocracia' },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70">
                  <span className="text-primary">{badge.icon}</span>
                  <span className="text-sm font-bold">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce-slow">
          <span className="text-xs font-bold uppercase tracking-widest">Role para baixo</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-secondary relative overflow-hidden">
        <div className="h-1 construction-stripe w-full absolute top-0 left-0" />
        <div className="container relative z-10 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="group p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover-lift text-center">
                <div className="text-primary mx-auto mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {statIcons[stat.icon]}
                </div>
                <div className="text-4xl md:text-5xl font-black mb-1 text-white">{stat.val}</div>
                <p className="text-sm font-bold text-white/50 uppercase tracking-tighter">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-1 construction-stripe w-full absolute bottom-0 left-0" />
      </section>

      {/* ═══════════════════════════════════════════════════════
          SOBRE SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="sobre" className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-[3rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border-4 border-card shadow-2xl bg-muted">
                <img
                  src="/assets/images/sobre-empresa.jpg"
                  alt="GS Caçambas - Sobre a Empresa"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 glass-effect rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <Shield className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-primary uppercase">Empresa Regularizada</p>
                      <p className="font-bold text-sm">Licenciada e com frota própria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Shield size={16} className="text-primary" />
                <span className="text-xs font-black text-primary uppercase tracking-widest">Sobre a GS Caçambas</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                Tradição e confiança no{' '}
                <span className="text-gradient-yellow">Vale do Paraíba</span>
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p className="text-lg font-medium">
                  A GS Caçambas é uma empresa especializada em locação de caçambas para entulho e resíduos de construção civil, atendendo Jacareí, São José dos Campos e Guararema.
                </p>
                <p>
                  Com frota própria e equipe comprometida, oferecemos um serviço ágil, confiável e sem complicação. Nosso diferencial está no atendimento direto com quem resolve — sem intermediários, sem burocracia.
                </p>
                <p>
                  Somos uma empresa regularizada, com todas as licenças necessárias para operar na região, garantindo que o descarte do seu entulho seja feito de forma legal e ambientalmente responsável.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Truck size={20} />, label: 'Frota Própria' },
                  { icon: <Clock size={20} />, label: 'Entrega Rápida' },
                  { icon: <Shield size={20} />, label: 'Empresa Regularizada' },
                  { icon: <CheckCircle2 size={20} />, label: 'Sem Burocracia' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-card border border-border rounded-2xl hover-lift">
                    <span className="text-primary">{item.icon}</span>
                    <span className="font-bold text-sm">{item.label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.orcamento)}
                className="group relative px-8 py-5 bg-primary text-primary-foreground rounded-2xl font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <MessageCircle size={22} className="relative z-10" />
                <span className="relative z-10">Falar com a GS Caçambas</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          GALLERY SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-muted/20 overflow-hidden">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto mb-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Star size={16} className="text-primary fill-primary" />
              <span className="text-xs font-black text-primary uppercase tracking-widest">Nossos Trabalhos</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Obras Atendidas</h2>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Veja alguns dos trabalhos realizados pela GS Caçambas na região do Vale do Paraíba.
            </p>
          </div>
        </div>
        <Gallery />
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="servicos" className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Truck size={16} className="text-primary" />
                <span className="text-xs font-black text-primary uppercase tracking-widest">Nossos Serviços</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                Para cada obra,{' '}
                <span className="text-gradient-yellow">uma solução</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Atendemos todos os tipos de obra com agilidade e eficiência.
              </p>
            </div>
            <button
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.orcamento)}
              className="text-primary font-black flex items-center gap-2 group text-lg hover:gap-4 transition-all"
            >
              Solicitar orçamento
              <span className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className="group p-8 sm:p-10 bg-card border border-border rounded-[2.5rem] hover-lift hover-glow cursor-pointer shadow-sm"
                onClick={() => handleWhatsApp(service.message)}
              >
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed text-lg mb-8">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-black group-hover:gap-4 transition-all">
                  <MessageCircle size={18} />
                  <span className="text-sm">Solicitar via WhatsApp</span>
                  <span className="w-6 h-[2px] bg-primary group-hover:w-10 transition-all" />
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="group p-8 sm:p-10 bg-primary rounded-[2.5rem] hover-lift cursor-pointer shadow-xl shadow-primary/20 sm:col-span-2 lg:col-span-1 flex flex-col justify-between"
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.orcamento)}>
              <div>
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform inline-block">🚛</div>
                <h3 className="text-2xl font-black mb-4 text-primary-foreground">Não encontrou o que precisa?</h3>
                <p className="text-primary-foreground/80 font-medium leading-relaxed text-lg mb-8">
                  Entre em contato e vamos encontrar a melhor solução para a sua obra.
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white/20 rounded-2xl p-4 group-hover:bg-white/30 transition-all">
                <MessageCircle size={22} className="text-primary-foreground" />
                <span className="font-black text-primary-foreground">Falar no WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW IT WORKS SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="como-funciona" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
        <div className="h-1 construction-stripe w-full absolute top-0 left-0" />
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />

        <div className="container relative z-10 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6">
              <Clock size={16} className="text-primary" />
              <span className="text-xs font-black text-primary uppercase tracking-widest">Processo Simples</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
              Como funciona?
            </h2>
            <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto">
              Em apenas 4 passos simples, você tem a caçamba no local e o entulho resolvido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="relative group">
                {/* Connector line */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%+0px)] w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}

                <div className="relative z-10 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover-lift group-hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black text-primary/30 leading-none">{step.step}</span>
                    <span className="text-4xl group-hover:scale-110 transition-transform">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.orcamento)}
              className="group relative px-12 py-6 bg-primary text-primary-foreground rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30 inline-flex items-center gap-4"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <MessageCircle size={26} className="relative z-10" />
              <span className="relative z-10">Solicitar Caçamba Agora</span>
            </button>
          </div>
        </div>
        <div className="h-1 construction-stripe w-full absolute bottom-0 left-0" />
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICE AREAS SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-muted/10">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-xs font-black text-primary uppercase tracking-widest">Área de Cobertura</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                  Onde Atendemos
                </h2>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                  Cobrimos toda a região do Vale do Paraíba com entrega rápida e pontual.
                </p>
              </div>

              <div className="space-y-4">
                {SERVICE_AREAS.map((area, i) => (
                  <div key={i} className="flex items-start gap-5 p-6 bg-card border border-border rounded-2xl hover-lift group">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <MapPin size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-black text-xl">{area.city}, {area.state}</p>
                      <p className="text-muted-foreground font-medium">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.open(GOOGLE_MAPS.mapsLink, '_blank')}
                className="w-full md:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-3"
              >
                <MapPin size={22} />
                Ver no Google Maps
              </button>
            </div>

            <div className="h-[500px] rounded-[4rem] overflow-hidden border-8 border-card shadow-2xl relative group">
              <iframe
                src={GOOGLE_MAPS.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-700"
                title="Área de atendimento GS Caçambas"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="avaliacoes" className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Star size={16} className="text-primary fill-primary" />
              <span className="text-xs font-black text-primary uppercase tracking-widest">Avaliações</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Mais de 500 clientes satisfeitos em toda a região do Vale do Paraíba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="group p-8 bg-card border border-border rounded-[2.5rem] hover-lift hover-glow shadow-sm flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={18} className="text-primary fill-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground font-medium leading-relaxed text-lg flex-1 mb-8">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-black text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-black">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={12} className="text-primary" />
                      <span className="text-xs text-primary font-bold">{testimonial.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="relative p-16 md:p-24 bg-secondary rounded-[4rem] overflow-hidden text-center shadow-2xl border border-primary/20">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,179,0,0.1),transparent)]" />
          <div className="absolute top-0 left-0 right-0 h-1.5 construction-stripe" />
          <div className="absolute bottom-0 left-0 right-0 h-1.5 construction-stripe" />

          <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
            <div className="text-6xl animate-float">🚛</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
              Precisa de uma caçamba?{' '}
              <span className="text-gradient-yellow">Fala com a gente!</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-medium">
              Atendimento rápido, preço justo e entrega no mesmo dia. Sem enrolação.
            </p>
            <button
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.orcamento)}
              className="group relative px-16 py-8 bg-primary text-primary-foreground rounded-3xl font-black text-2xl overflow-hidden transition-all hover:scale-110 active:scale-95 shadow-2xl shadow-primary/30 inline-flex items-center gap-4"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <MessageCircle size={30} className="relative z-10" />
              <span className="relative z-10">Solicitar via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="contato" className="py-24 md:py-32 bg-muted/10">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Mail size={16} className="text-primary" />
              <span className="text-xs font-black text-primary uppercase tracking-widest">Entre em Contato</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              Fale com a{' '}
              <span className="text-gradient-yellow">GS Caçambas</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Escolha o canal que preferir. Estamos prontos para atender você.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <MessageCircle size={40} />,
                title: 'WhatsApp',
                val: CONTACT_INFO.phone,
                link: `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.contact)}`,
                label: 'Enviar mensagem',
                color: 'text-green-500',
                bg: 'bg-green-500/10',
                hoverBg: 'hover:bg-green-500',
              },
              {
                icon: <Phone size={40} />,
                title: 'Telefone',
                val: CONTACT_INFO.phone,
                link: `tel:${CONTACT_INFO.phone}`,
                label: 'Ligar agora',
                color: 'text-primary',
                bg: 'bg-primary/10',
                hoverBg: 'hover:bg-primary',
              },
              {
                icon: <Mail size={40} />,
                title: 'Email',
                val: CONTACT_INFO.email,
                link: `mailto:${CONTACT_INFO.email}`,
                label: 'Enviar email',
                color: 'text-primary',
                bg: 'bg-primary/10',
                hoverBg: 'hover:bg-primary',
              },
            ].map((item, i) => (
              <div key={i} className="p-10 bg-card border border-border rounded-[3rem] shadow-2xl hover-lift text-center group">
                <div className={`w-20 h-20 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-lg text-muted-foreground font-medium mb-8 break-all">{item.val}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block w-full py-4 bg-muted ${item.hoverBg} hover:text-white rounded-2xl font-black text-lg transition-all`}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div className="p-12 md:p-16 bg-card border border-border rounded-[4rem] shadow-2xl">
              <div className="mb-12">
                <h2 className="text-4xl font-black tracking-tighter mb-4">Envie uma Mensagem</h2>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  Preencha os dados e fale diretamente com a GS Caçambas.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">Nome</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Seu nome completo"
                      className="h-16 rounded-2xl bg-muted/50 border-none focus:ring-2 ring-primary/20 text-lg px-6"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">Telefone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="(12) 99999-9999"
                      className="h-16 rounded-2xl bg-muted/50 border-none focus:ring-2 ring-primary/20 text-lg px-6"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="seu@email.com"
                    className="h-16 rounded-2xl bg-muted/50 border-none focus:ring-2 ring-primary/20 text-lg px-6"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-2">Mensagem</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Descreva sua necessidade: tipo de obra, localização, prazo..."
                    className="rounded-3xl bg-muted/50 border-none focus:ring-2 ring-primary/20 min-h-[180px] text-lg p-6"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-20 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 flex gap-4"
                >
                  <Send size={24} />
                  Enviar via WhatsApp
                </Button>
                {submitted && (
                  <p className="text-lg text-green-500 font-black text-center animate-bounce">
                    ✓ Mensagem enviada! Aguarde nosso retorno.
                  </p>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-8">
              <div className="flex-1 min-h-[400px] rounded-[4rem] overflow-hidden border-8 border-card shadow-2xl">
                <iframe
                  src={GOOGLE_MAPS.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                  title="Localização GS Caçambas"
                />
              </div>

              {/* Quick CTA */}
              <div className="p-8 bg-card border border-border rounded-[3rem] shadow-xl">
                <h3 className="text-2xl font-black mb-3">Atendimento Rápido</h3>
                <p className="text-muted-foreground font-medium mb-6">
                  Prefere falar diretamente? Clique abaixo e fale agora pelo WhatsApp.
                </p>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
                  className="w-full py-5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-green-500/20"
                >
                  <MessageCircle size={22} />
                  Falar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

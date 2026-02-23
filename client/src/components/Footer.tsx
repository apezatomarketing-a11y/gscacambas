import { useState } from 'react';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, Phone, Truck } from 'lucide-react';
import { FOOTER_LINKS, POLICY_LINKS, SOCIAL_MEDIA, COMPANY_INFO, CONTACT_INFO, SERVICE_AREAS } from '@/lib/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Footer() {
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const policyContent = {
    privacidade: `Política de Privacidade

Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.

1. Coleta de Informações
Coletamos informações que você nos fornece voluntariamente através de formulários de contato, como nome, email e telefone.

2. Uso das Informações
Usamos suas informações para:
- Responder suas consultas e orçamentos
- Agendar entregas de caçambas
- Enviar informações sobre nossos serviços
- Melhorar nossa experiência de atendimento

3. Proteção de Dados
Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado.

4. Compartilhamento de Dados
Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem o seu consentimento.

5. Contato
Para questões sobre privacidade, entre em contato conosco através do WhatsApp ou email.`,

    termos: `Termos de Uso

Bem-vindo ao site da GS Caçambas. Ao acessar este site, você concorda com os seguintes termos:

1. Uso Autorizado
Este site é fornecido apenas para fins informativos e comerciais. Você concorda em usar este site apenas para fins legais.

2. Serviços
A GS Caçambas oferece serviços de locação de caçambas para entulho e resíduos de construção civil na região do Vale do Paraíba.

3. Responsabilidades do Cliente
O cliente é responsável pelo correto uso da caçamba, respeitando as normas municipais e ambientais vigentes.

4. Isenção de Responsabilidade
A GS Caçambas não será responsável por danos causados pelo uso inadequado das caçambas locadas.

5. Modificações
Reservamos o direito de modificar estes termos a qualquer momento.

6. Lei Aplicável
Estes termos são regidos pelas leis do Brasil.`,

    cookies: `Política de Cookies

Este site utiliza cookies para melhorar sua experiência.

1. O que são Cookies?
Cookies são pequenos arquivos de texto armazenados no seu dispositivo que ajudam a personalizar sua experiência.

2. Tipos de Cookies
- Cookies Essenciais: Necessários para o funcionamento do site
- Cookies de Preferência: Lembram suas preferências de navegação
- Cookies de Análise: Ajudam a entender como você usa o site

3. Controle de Cookies
Você pode controlar cookies através das configurações do seu navegador.

4. Cookies de Terceiros
Este site pode conter links para serviços de terceiros que usam seus próprios cookies.`,
  };

  return (
    <>
      <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Top accent stripe */}
        <div className="h-1.5 construction-stripe w-full" />

        <div className="container py-16 px-6 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <div className="flex flex-col items-start group">
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 bg-white p-1">
                <img src="/assets/images/logo-gs.png" alt="GS Caçambas" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-black text-xl mb-2 text-primary">{COMPANY_INFO.name}</h3>
              <p className="text-sm text-secondary-foreground/70 font-medium max-w-[200px] leading-relaxed">{COMPANY_INFO.tagline}</p>
              <div className="flex gap-3 mt-6">
                <a
                  href={SOCIAL_MEDIA.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-xl transition-all duration-300 hover:-translate-y-1"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={SOCIAL_MEDIA.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-xl transition-all duration-300 hover:-translate-y-1"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="p-3 bg-white/10 hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-xl transition-all duration-300 hover:-translate-y-1"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black text-primary mb-6 uppercase tracking-wider text-xs">Navegação</h4>
              <nav className="space-y-3">
                {FOOTER_LINKS.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="block text-sm text-secondary-foreground/70 hover:text-primary hover:pl-2 transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="font-black text-primary mb-6 uppercase tracking-wider text-xs">Áreas de Atendimento</h4>
              <div className="space-y-4">
                {SERVICE_AREAS.map((area, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-secondary-foreground">{area.city}, {area.state}</p>
                      <p className="text-xs text-secondary-foreground/60">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-black text-primary mb-6 uppercase tracking-wider text-xs">Contato</h4>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <MessageCircle size={16} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-foreground/60 font-bold uppercase">WhatsApp</p>
                    <p className="text-sm font-bold text-secondary-foreground">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-foreground/60 font-bold uppercase">Telefone</p>
                    <p className="text-sm font-bold text-secondary-foreground">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-foreground/60 font-bold uppercase">Email</p>
                    <p className="text-sm font-bold text-secondary-foreground break-all">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Truck size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-foreground/60 font-bold uppercase">Permanência</p>
                    <p className="text-sm font-bold text-secondary-foreground">Até 7 dias por locação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="border-t border-white/10 pt-10 mb-10">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              {POLICY_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const key = link.label.toLowerCase().includes('privacidade') ? 'privacidade'
                      : link.label.toLowerCase().includes('termos') ? 'termos' : 'cookies';
                    setOpenPolicy(key);
                  }}
                  className="text-secondary-foreground/50 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-[10px] sm:text-xs text-secondary-foreground/40 font-medium px-4">
            <p className="mb-3">
              © {COMPANY_INFO.year} {COMPANY_INFO.name}. Todos os direitos reservados.
            </p>
            <p>
              Design & Desenvolvimento por{' '}
              <a
                href={COMPANY_INFO.developedByUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary hover:underline transition-colors"
              >
                {COMPANY_INFO.developedBy}
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Policy Dialogs */}
      <Dialog open={openPolicy !== null} onOpenChange={(open) => !open && setOpenPolicy(null)}>
        <DialogContent className="max-w-[90vw] sm:max-w-lg max-h-[80vh] overflow-y-auto glass-effect border-primary/20 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-black text-primary">
              {openPolicy === 'privacidade' ? 'Política de Privacidade'
                : openPolicy === 'termos' ? 'Termos de Uso'
                : 'Política de Cookies'}
            </DialogTitle>
          </DialogHeader>
          <div className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed">
            {openPolicy && policyContent[openPolicy as keyof typeof policyContent]}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

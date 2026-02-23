import { useState, useEffect } from 'react';
import { Moon, Sun, MessageCircle, Home, Info, Truck, HelpCircle, Star, Mail, Menu, X } from 'lucide-react';
import { useTheme } from '@/_core/hooks/useTheme';
import { CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

const NAVIGATION_ITEMS = [
  { label: 'Início', href: '#inicio', icon: Home },
  { label: 'Sobre', href: '#sobre', icon: Info },
  { label: 'Serviços', href: '#servicos', icon: Truck },
  { label: 'Como Funciona', href: '#como-funciona', icon: HelpCircle },
  { label: 'Avaliações', href: '#avaliacoes', icon: Star },
  { label: 'Contato', href: '#contato', icon: Mail },
];

export default function SidebarMenu() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);

      // Detect active section
      const sections = NAVIGATION_ITEMS.map(item => item.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.floatingButton);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(url, '_blank');
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isActive = (href: string) => activeSection === href.replace('#', '');

  const glassClasses = "backdrop-blur-md bg-card/70 border-border shadow-xl";

  return (
    <>
      {/* Mobile Header */}
      <header className={`fixed top-0 left-0 right-0 h-16 ${glassClasses} border-b z-50 flex items-center justify-between px-4 md:hidden`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
            <img src="/assets/images/logo-gs.png" alt="GS Caçambas" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-black text-foreground text-sm leading-none block">GS Caçambas</span>
            <span className="text-xs text-primary font-bold">Aluguel de Caçambas</span>
          </div>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-foreground hover:bg-primary/10 rounded-lg transition-colors"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`
        fixed top-16 left-0 right-0 bottom-0 ${glassClasses} border-t z-50 md:hidden
        transition-transform duration-300 ease-in-out overflow-y-auto
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <nav className="p-4 space-y-2">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`
                  w-full px-4 py-3 flex items-center gap-3 rounded-xl transition-all duration-300
                  ${active
                    ? 'bg-primary/20 text-primary font-bold'
                    : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'}
                `}
              >
                <Icon size={20} className={`flex-shrink-0 transition-transform duration-300 ${active ? 'scale-110' : ''}`} />
                <span className="text-base font-medium">{item.label}</span>
              </button>
            );
          })}

          <div className="pt-6 grid grid-cols-2 gap-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all active:scale-95"
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-slate-600" />}
              <span className="text-sm font-medium">{theme === 'dark' ? 'Claro' : 'Escuro'}</span>
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-all active:scale-95"
            >
              <MessageCircle size={20} className="text-green-500" />
              <span className="text-sm font-medium">WhatsApp</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen z-[100] hidden md:flex flex-col
          ${glassClasses} border-r transition-all duration-500 ease-in-out
          ${isExpanded ? 'w-64' : 'w-20'}
        `}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Logo */}
        <div className="p-4 border-b border-border/50 flex items-center justify-center overflow-hidden h-20">
          <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-lg bg-secondary flex items-center justify-center">
            <img src="/assets/images/logo-gs.png" alt="GS Caçambas" className="w-full h-full object-contain" />
          </div>
          {isExpanded && (
            <div className="ml-3 flex-1 animate-in fade-in slide-in-from-left-4 duration-300 overflow-hidden">
              <p className="text-sm font-black text-foreground truncate leading-tight">GS Caçambas</p>
              <p className="text-xs text-primary truncate font-bold">Aluguel de Caçambas</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 space-y-1 px-2">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`
                  w-full p-3 flex items-center gap-4 rounded-xl transition-all duration-300 group
                  ${active ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'}
                  ${!isExpanded && 'justify-center'}
                `}
                title={!isExpanded ? item.label : undefined}
              >
                <Icon
                  size={22}
                  className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${active ? 'scale-110' : ''}`}
                />
                {isExpanded && (
                  <span className="text-sm font-semibold truncate">{item.label}</span>
                )}
                {active && !isExpanded && (
                  <span className="absolute left-[72px] w-1.5 h-1.5 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 space-y-3 border-t border-border/50">
          <button
            onClick={toggleTheme}
            className={`
              w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300
              bg-primary/5 hover:bg-primary/15 active:scale-95
              ${!isExpanded && 'justify-center'}
            `}
            title={`Modo ${theme === 'dark' ? 'Claro' : 'Escuro'}`}
          >
            {theme === 'dark'
              ? <Sun size={20} className="text-yellow-400 flex-shrink-0" />
              : <Moon size={20} className="text-slate-500 flex-shrink-0" />
            }
            {isExpanded && (
              <span className="text-xs font-bold truncate">
                {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
              </span>
            )}
          </button>

          <button
            onClick={handleWhatsAppClick}
            className={`
              w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300
              bg-green-500/10 hover:bg-green-500/20 active:scale-95
              ${!isExpanded && 'justify-center'}
            `}
            title="WhatsApp"
          >
            <MessageCircle size={20} className="text-green-500 flex-shrink-0" />
            {isExpanded && (
              <span className="text-xs font-bold text-green-600 dark:text-green-400 truncate">
                WhatsApp
              </span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}

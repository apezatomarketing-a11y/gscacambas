// Contact Information
export const CONTACT_INFO = {
  whatsapp: '5512988509555',
  phone: '(12) 98850-9555',
  email: 'jacareentulho@gmail.com',
  address: 'Jacareí, SP',
  addressShort: 'Jacareí, SP',
  city: 'Jacareí',
  state: 'SP',
} as const;

// Social Media Links
export const SOCIAL_MEDIA = {
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  whatsapp: 'https://wa.me/5512988509555',
} as const;

// Google Maps
export const GOOGLE_MAPS = {
  // Foco principal em São José dos Campos
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117917.26!2d-45.9272!3d-23.1791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a3a3a3a3a3a%3A0x3a3a3a3a3a3a3a3a!2sS%C3%A3o%20Jos%C3%A9%20dos%20Campos%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000',
  mapsLink: 'https://www.google.com/maps/place/S%C3%A3o+Jos%C3%A9+dos+Campos,+SP',
} as const;

// WhatsApp Messages
export const WHATSAPP_MESSAGES = {
  floatingButton: 'Olá! Vim do site da Jacaré Entulhos e gostaria de solicitar um orçamento!',
  orcamento: 'Olá! Gostaria de solicitar um orçamento para aluguel de caçamba.',
  residencial: 'Olá! Preciso de uma caçamba para obra residencial. Podem me ajudar?',
  comercial: 'Olá! Preciso de caçambas para obra comercial. Quais são as condições?',
  empresas: 'Olá! Tenho interesse no Plano Empresas Jacaré. Podem me informar sobre as condições?',
  condominio: 'Olá! Preciso de caçambas para condomínio. Quais são as condições?',
  engenheiro: 'Olá! Sou engenheiro/empreiteiro e gostaria de conhecer as condições para parceria.',
  contact: 'Olá! Entrei em contato através do formulário do site da Jacaré Entulhos.',
} as const;

// Navigation Items (Single Page Anchors)
export const NAVIGATION_ITEMS = [
  { label: 'Início', href: '#inicio', icon: 'Home' },
  { label: 'Sobre', href: '#sobre', icon: 'Info' },
  { label: 'Serviços', href: '#servicos', icon: 'Truck' },
  { label: 'Como Funciona', href: '#como-funciona', icon: 'HelpCircle' },
  { label: 'Avaliações', href: '#avaliacoes', icon: 'Star' },
  { label: 'Contato', href: '#contato', icon: 'Mail' },
] as const;

// Services
export const SERVICES = [
  {
    id: 'residencial',
    title: 'Obras Residenciais',
    description: 'Reforma, construção ou demolição na sua casa? Temos a caçamba certa para o seu projeto.',
    icon: '🏠',
    message: 'Olá! Preciso de uma caçamba para obra residencial. Podem me ajudar?',
  },
  {
    id: 'comercial',
    title: 'Construções Comerciais',
    description: 'Atendemos obras comerciais de todos os portes com agilidade e eficiência.',
    icon: '🏢',
    message: 'Olá! Preciso de caçambas para obra comercial. Quais são as condições?',
  },
  {
    id: 'industrial',
    title: 'Empresas e Indústrias',
    description: 'Soluções completas de descarte de resíduos para empresas e indústrias da região.',
    icon: '🏭',
    message: 'Olá! Tenho interesse no Plano Empresas Jacaré. Podem me informar sobre as condições?',
  },
  {
    id: 'condominio',
    title: 'Condomínios',
    description: 'Serviço especializado para condomínios com contratos flexíveis e atendimento prioritário.',
    icon: '🏗️',
    message: 'Olá! Preciso de caçambas para condomínio. Quais são as condições?',
  },
  {
    id: 'engenheiros',
    title: 'Engenheiros e Empreiteiros',
    description: 'Parcerias especiais para profissionais da construção civil com condições diferenciadas.',
    icon: '👷',
    message: 'Olá! Sou engenheiro/empreiteiro e gostaria de conhecer as condições para parceria.',
  },
] as const;

// Company Info
export const COMPANY_INFO = {
  name: 'Jacaré Entulhos',
  title: 'Aluguel de Caçambas',
  tagline: 'A solução certa para o seu entulho',
  year: new Date().getFullYear(),
  developedBy: 'Apezato Marketing',
  developedByUrl: 'https://www.apezatomarketing.com.br',
} as const;

// Animation Timings (in ms)
export const ANIMATION_TIMINGS = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
  stagger: 80,
} as const;

// Gallery Images
export const GALLERY_IMAGES = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/assets/images/galeria-${i + 1}.jpg`,
  alt: `Jacaré Entulhos - Obra ${i + 1}`,
}));

// Featured Images
export const FEATURED_IMAGES = {
  hero: '/assets/images/hero-cacamba.jpg',
  sobre: '/assets/images/sobre-empresa.jpg',
  residencial: '/assets/images/servico-residencial.jpg',
  comercial: '/assets/images/servico-comercial.jpg',
  industrial: '/assets/images/servico-industrial.jpg',
} as const;

// Footer Links
export const FOOTER_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
] as const;

// Policy Links
export const POLICY_LINKS = [
  { label: 'Política de Privacidade', href: '#privacy' },
  { label: 'Termos de Uso', href: '#terms' },
  { label: 'Política de Cookies', href: '#cookies' },
] as const;

// Service Areas
export const SERVICE_AREAS = [
  { city: 'Jacareí', state: 'SP', description: 'Atendimento completo em toda a cidade e região' },
  { city: 'São José dos Campos', state: 'SP', description: 'Cobertura em todos os bairros da cidade' },
  { city: 'Guararema', state: 'SP', description: 'Atendimento regional com entrega rápida' },
] as const;

// How it Works Steps
export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Solicite pelo WhatsApp',
    description: 'Entre em contato diretamente conosco e informe o endereço e tipo de obra.',
    icon: '📱',
  },
  {
    step: '02',
    title: 'Agendamos a Entrega',
    description: 'Confirmamos o horário e entregamos a caçamba no local combinado com agilidade.',
    icon: '📅',
  },
  {
    step: '03',
    title: 'Use por até 7 Dias',
    description: 'Você tem até 7 dias para usar a caçamba e descartar todo o entulho da obra.',
    icon: '🏗️',
  },
  {
    step: '04',
    title: 'Retiramos no Local',
    description: 'No prazo combinado, buscamos a caçamba sem complicação. Simples e sem dor de cabeça.',
    icon: '🚛',
  },
] as const;

// Stats
export const STATS = [
  { label: 'Cidades Atendidas', val: '3+', icon: 'MapPin' },
  { label: 'Clientes Satisfeitos', val: '500+', icon: 'Users' },
  { label: 'Caçambas Entregues', val: '2.000+', icon: 'Truck' },
  { label: 'Anos de Experiência', val: '5+', icon: 'Calendar' },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    name: 'Carlos Eduardo',
    role: 'Proprietário - Reforma Residencial',
    text: 'A entrega foi super rápida e o atendimento da Jacaré Entulhos foi excelente. Caçamba no local no mesmo dia que liguei!',
    rating: 5,
    city: 'Jacareí',
  },
  {
    name: 'Ana Paula',
    role: 'Arquiteta',
    text: 'Empresa séria, cumpriu o prazo combinado para retirada. Já indico para todos os meus clientes de obra.',
    rating: 5,
    city: 'São José dos Campos',
  },
  {
    name: 'Roberto Mendes',
    role: 'Engenheiro Civil',
    text: 'Já salvamos o contato para próximas obras. Serviço confiável e preço justo para a região.',
    rating: 5,
    city: 'Guararema',
  },
  {
    name: 'Fernanda Costa',
    role: 'Síndica de Condomínio',
    text: 'Atendimento direto com quem resolve. Sem burocracia, sem enrolação. Recomendo demais!',
    rating: 5,
    city: 'São José dos Campos',
  },
  {
    name: 'Marcos Oliveira',
    role: 'Empreiteiro',
    text: 'Parceria de longa data. Empresa regularizada, confiança e compromisso em cada entrega.',
    rating: 5,
    city: 'Jacareí',
  },
] as const;

import React, { useState, useId } from 'react';
import {
  ShoppingCart,
  Package,
  BookOpen,
  Users,
  Truck,
  Building2,
  FileText,
  Calculator,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Store,
  Search,
  Receipt,
  ChevronRight,
  X,
  DollarSign,
  AlertTriangle,
  BadgeCheck,
  Percent,
  TrendingUp,
  Shield,
  Laptop,
  MessageSquare,
  HelpCircle,
  Menu,
  Sliders,
  Send,
  Zap,
} from 'lucide-react';

// Assets
import heroImage from './assets/images/hero_retail_pos_system_1791470552018.jpg';
import ownerImage from './assets/images/modern_store_owner_tablet_1791470561989.jpg';

// Modules Data
interface ServiceModule {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  highlights: string[];
  badge: string;
}

const MODULES: ServiceModule[] = [
  {
    id: 'pos',
    number: '01',
    title: 'Ventas POS',
    shortDesc: 'Punto de venta ultra rápido para registrar compras en menos de 3 segundos.',
    fullDesc: 'Diseñado específicamente para el ritmo ágil del mostrador. Compatible con lectores de código de barras USB/Bluetooth, pantallas táctiles y teclado rápido. Permite pagos combinados en efectivo, tarjetas Transbank/Getnet, transferencias y cuenta corriente de fiados.',
    icon: ShoppingCart,
    highlights: ['Registro de venta en 3 clics', 'Pagos mixtos y cálculo de vuelto', 'Lector de pistola de código de barras', 'Tickets térmicos 58mm y 80mm'],
    badge: 'Velocidad de Mostrador'
  },
  {
    id: 'productos',
    number: '02',
    title: 'Productos y Catálogo',
    shortDesc: 'Gestión de catálogo, stock inicial, códigos SKU/EAN y calculadora de precios y margen.',
    fullDesc: 'Centraliza miles de productos con variantes, control de stock crítico y fecha de vencimiento. Incluye calculadora automática de margen neto e IVA (19%) para nunca vender bajo costo ni perder rentabilidad.',
    icon: Package,
    highlights: ['Códigos de barra EAN-13 y SKU', 'Calculadora de margen de ganancia', 'Alertas de stock mínimo y reposición', 'Importación masiva desde Excel'],
    badge: 'Margen Inteligente'
  },
  {
    id: 'fiados',
    number: '03',
    title: 'Clientes Fiados',
    shortDesc: 'Adiós al cuaderno de fiados: control de cuentas pendientes, créditos y abonos.',
    fullDesc: 'Digitaliza la confianza de tu barrio sin riesgos de pérdidas. Cada cliente cuenta con su libreta digital con historial detallado de compras, saldo al día, límite de crédito personalizado y comprobantes de abono por WhatsApp.',
    icon: BookOpen,
    highlights: ['Libreta digital por cliente', 'Registro de abonos parciales o totales', 'Límites de crédito configurables', 'Comprobante de deuda imprimible'],
    badge: 'Cero Pérdidas'
  },
  {
    id: 'personal',
    number: '04',
    title: 'Control de Personal',
    shortDesc: 'Gestión de usuarios, turnos del equipo y accesos seguros por PIN de 4 dígitos.',
    fullDesc: 'Otorga a cada cajero o bodeguero un acceso rápido y seguro mediante su PIN personal. Controla horas de entrada y salida, bloquea permisos sensibles (como anular boletas o hacer descuentos) y audita cada venta.',
    icon: Users,
    highlights: ['Ingreso rápido con PIN de 4 dígitos', 'Roles: Administrador, Supervisor, Cajero', 'Auditoría completa por vendedor', 'Control de inicio y fin de turno'],
    badge: 'Seguridad Total'
  },
  {
    id: 'proveedores',
    number: '05',
    title: 'Proveedores y Compras',
    shortDesc: 'Gestión de compras, facturas recibidas e identidad comercial de proveedores.',
    fullDesc: 'Registra tus facturas de compra para actualizar automáticamente el stock disponible y recalcular los costos promedio. Mantén el directorio telefónico y comercial de tus distribuidores siempre a mano.',
    icon: Truck,
    highlights: ['Registro de facturas de compra', 'Historial de variación de costos', 'Directorio de repartidores y contactos', 'Sugerencias de reposición de stock'],
    badge: 'Control de Compras'
  },
  {
    id: 'cajas',
    number: '06',
    title: 'Centro de Cajas',
    shortDesc: 'Aperturas de turno, arqueos diarios ciegos, cierres de caja y flujo de dinero.',
    fullDesc: 'Control estricto del efectivo en caja. Configura arqueos de caja ciegos para que el cajero cuente sin ver el sistema, eliminando descuadres inexplicables. Registra retiros para pagar a proveedores o gastos menores.',
    icon: Building2,
    highlights: ['Arqueos ciegos antibaches', 'Reportes de corte X y corte Z', 'Registro de retiros y gastos menores', 'Diferencial exacto por forma de pago'],
    badge: 'Cero Descuadres'
  },
  {
    id: 'sii',
    number: '07',
    title: 'Empresas e Integración SII',
    shortDesc: 'Emisión de boletas electrónicas y documentos DTE tributarios al instante.',
    fullDesc: 'Conexión oficial y directa con el Servicio de Impuestos Internos (SII de Chile). Emite boletas electrónicas afectas y exentas con timbre electrónico PDF417 válido. Olvídate de la página lenta del SII y atiende de corrido.',
    icon: FileText,
    highlights: ['Boleta electrónica DTE automática', 'Timbre digital oficial PDF417', 'Integración sin intermediarios lentos', 'Reporte mensual de ventas RCV'],
    badge: '100% Legal SII Chile'
  }
];

export default function App() {
  const marginCostId = useId();
  const marginProfitId = useId();
  const marginVatId = useId();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<ServiceModule | null>(null);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'dueno' | 'calculadora' | 'sii' | 'catalogo'>('dueno');

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactBusiness, setContactBusiness] = useState('Almacén / Minimarket');
  const [contactRegisters, setContactRegisters] = useState('1 caja');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  // Demo Modal Form State
  const [demoName, setDemoName] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [demoBusiness, setDemoBusiness] = useState('');
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // Interactive Margin Calculator inside Gallery
  const [calcCost, setCalcCost] = useState<number>(1200);
  const [calcMargin, setCalcMargin] = useState<number>(35);
  const [calcIncludeIva, setCalcIncludeIva] = useState<boolean>(true);

  // Calculated values
  const vatRate = 0.19;
  const netSellPrice = calcMargin < 100 ? Math.round(calcCost / (1 - calcMargin / 100)) : calcCost * 2;
  const finalPriceWithIva = calcIncludeIva ? Math.round(netSellPrice * (1 + vatRate)) : netSellPrice;
  const grossProfitPerUnit = finalPriceWithIva - calcCost - (calcIncludeIva ? Math.round(netSellPrice * vatRate) : 0);
  const profitPercentageReal = calcCost > 0 ? ((grossProfitPerUnit / calcCost) * 100).toFixed(1) : '0';

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    setTimeout(() => {
      setContactLoading(false);
      setContactSubmitted(true);
    }, 800);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-800 font-sans selection:bg-[#1E4334] selection:text-[#E8F0EC]">
      
      {/* 1. TOP NAVBAR (Strict 3-zone Top Bar Contract) */}
      <header className="sticky top-0 z-40 bg-[#F8FAF9]/95 backdrop-blur-md border-b border-[#E8F0EC] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#1E4334] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <Store className="w-5 h-5 text-[#D8F3DC]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#1E4334]">
                mister<span className="text-[#40916C]">.</span> <span className="font-semibold text-slate-700 tracking-wider text-base">INVENTARIO</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean text, subtle hover, no pills) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#problema" className="text-rose-700 hover:text-rose-900 font-semibold transition-colors py-1 border-b-2 border-transparent hover:border-rose-700">
              ¿Por qué ordenar?
            </a>
            <a href="#servicios" className="hover:text-[#1E4334] transition-colors py-1 border-b-2 border-transparent hover:border-[#1E4334]">
              Servicios
            </a>
            <a href="#demostracion" className="hover:text-[#1E4334] transition-colors py-1 border-b-2 border-transparent hover:border-[#1E4334]">
              Galería & Demo
            </a>
            <a href="#nosotros" className="hover:text-[#1E4334] transition-colors py-1 border-b-2 border-transparent hover:border-[#1E4334]">
              Quiénes Somos
            </a>
            <a href="#faq" className="hover:text-[#1E4334] transition-colors py-1 border-b-2 border-transparent hover:border-[#1E4334]">
              Preguntas
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/56965481126?text=Hola%20Debbie,%20me%20interesa%20conocer%20el%20software%20Mister%20Inventario"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span className="font-mono">+56 9 6548 1126</span>
            </a>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#1E4334] text-[#1E4334] hover:bg-[#E8F0EC] transition-colors whitespace-nowrap cursor-pointer"
            >
              Demo en Vivo
            </button>
            <a
              href="#contacto"
              className="text-xs font-semibold px-5 py-2.5 rounded-lg bg-[#1E4334] text-white hover:bg-[#163428] shadow-sm transition-all hover:shadow-md whitespace-nowrap"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="text-xs font-semibold px-3 py-2 rounded-lg bg-[#1E4334] text-white"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-[#E8F0EC]"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <a
              href="#problema"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-rose-700 hover:bg-rose-50"
            >
              ¿Por qué ordenar? (El problema del WhatsApp)
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-[#F8FAF9] hover:text-[#1E4334]"
            >
              Servicios y Módulos
            </a>
            <a
              href="#demostracion"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-[#F8FAF9] hover:text-[#1E4334]"
            >
              Galería & Demostración
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-[#F8FAF9] hover:text-[#1E4334]"
            >
              Quiénes Somos
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-[#F8FAF9] hover:text-[#1E4334]"
            >
              Preguntas Frecuentes
            </a>
            <div className="pt-2">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 rounded-lg bg-[#1E4334] text-white font-semibold text-sm"
              >
                Contáctanos Ahora
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E8F0EC]">
        {/* Soft background radial subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#E8F0EC]/80 to-transparent pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition & Copy */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Metadata Line (Zero-pill discipline, quiet unboxed text) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#1E4334]">
                <span>POS & Gestión Comercial</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Conexión Oficial SII Chile</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-emerald-700">Para Almacenes y Comercios</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E4334] tracking-tight leading-[1.12]" style={{ textWrap: 'balance' }}>
                El mejor sistema POS y de control de inventario del mundo
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Gestiona ventas, productos, clientes fiados y emisión de boletas electrónicas SII en una sola vista ágil, pensada para atender sin filas y proteger tus ganancias.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-[#1E4334] text-white text-base font-semibold hover:bg-[#163428] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer"
                >
                  <span>Solicitar Demo Gratis</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D8F3DC]" />
                </button>

                <a
                  href="#demostracion"
                  className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-base font-medium hover:bg-[#E8F0EC] hover:border-[#1E4334] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Laptop className="w-4 h-4 text-[#1E4334]" />
                  <span>Ver Software en Acción</span>
                </a>
              </div>

              {/* Quantitative Signals Adjacent to Hero CTA */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E8F0EC] max-w-xl">
                <div>
                  <div className="text-2xl font-bold font-mono tabular-nums text-[#1E4334]">&lt; 3 seg</div>
                  <div className="text-xs text-slate-500 font-medium">Por venta de mostrador</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono tabular-nums text-[#1E4334]">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Boletas DTE con SII</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono tabular-nums text-[#1E4334]">0 baches</div>
                  <div className="text-xs text-slate-500 font-medium">Arqueo de caja ciego</div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Focal Carrier with Actual Generated Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#C4D7CE] bg-white shadow-xl">
                
                {/* Hero Asset */}
                <div className="aspect-[16/10] sm:aspect-[16/11] relative overflow-hidden bg-slate-100">
                  <img
                    src={heroImage}
                    alt="Mister Inventario terminal POS en mostrador de tienda moderna"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle contrast gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E4334]/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Live Badge inside image */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-sm flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>POS en Mostrador Activo</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-medium text-emerald-200">Terminal de Venta Rápida</div>
                    <div className="text-sm font-semibold tracking-wide">Compatible con pantalla táctil, lector de pistola y gaveta</div>
                  </div>
                </div>

                {/* Live Real-time Simulation Widget underneath image */}
                <div className="p-4 bg-[#F8FAF9] border-t border-[#E8F0EC] space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Flujo de Caja Hoy (Turno Mañana)</span>
                    <span className="font-mono tabular-nums text-emerald-700 font-semibold">Caja Cuadrada $0 dif</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                      <div className="text-slate-500 text-[11px]">Ventas Acumuladas</div>
                      <div className="text-base font-bold font-mono text-[#1E4334] tabular-nums">$684.250 CLP</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                      <div className="text-slate-500 text-[11px]">Boletas SII Emitidas</div>
                      <div className="text-base font-bold font-mono text-[#1E4334] tabular-nums">114 documentos</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Corner Stamp */}
              <div className="absolute -bottom-4 -right-3 hidden sm:flex items-center gap-2 bg-[#1E4334] text-white px-4 py-2 rounded-xl shadow-lg text-xs font-medium border border-emerald-800">
                <BadgeCheck className="w-4 h-4 text-emerald-400" />
                <span>Instalación guiada en 15 minutos</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA: EL PROBLEMA REAL (WhatsApp vs Sistema Ordenado) */}
      <section id="problema" className="py-20 bg-white border-b border-[#E8F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>La Realidad del Almacén sin Sistema Centralizado</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4334] tracking-tight" style={{ textWrap: 'balance' }}>
              ¿Tus cajeros te llaman a cada rato para preguntar los precios?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Al conversar con dueños de comercios, descubrimos el mismo problema diario: <strong>tienen los precios y datos repartidos en fotos de WhatsApp</strong>, notas en cuadernos o en la memoria del dueño, obligándolo a estar pegado al teléfono 24/7.
            </p>
          </div>

          {/* Comparativa Lado a Lado: Caos de WhatsApp vs Mister Inventario */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
            
            {/* LADO 1: El Caos de WhatsApp y Llamadas */}
            <div className="lg:col-span-6 bg-[#FFF9F9] rounded-2xl border-2 border-rose-200 p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span>Sin Sistema: Negocio Esclavo de WhatsApp</span>
                  </div>
                  <span className="text-[11px] font-mono text-rose-600 bg-rose-100 px-2 py-0.5 rounded font-semibold">
                    12 min de demora
                  </span>
                </div>

                {/* Simulación del Chat de WhatsApp Real */}
                <div className="bg-[#EFEAE2] rounded-xl p-4 space-y-3 font-sans text-xs shadow-inner">
                  
                  {/* Mensaje Cajero 1 */}
                  <div className="flex flex-col items-start max-w-[85%]">
                    <div className="bg-white text-slate-800 p-2.5 rounded-xl rounded-tl-none shadow-xs space-y-1">
                      <p className="font-semibold text-[11px] text-emerald-800">Cajero Rodrigo (En mostrador)</p>
                      <p>Don Juan, ¿a cuánto está el aceite Belmont de 900ml? Hay una vecina en la fila y no tiene precio pegado 😰</p>
                      <span className="text-[9px] text-slate-400 block text-right">11:42 AM</span>
                    </div>
                  </div>

                  {/* Mensaje Cajero 2 */}
                  <div className="flex flex-col items-start max-w-[85%]">
                    <div className="bg-white text-slate-800 p-2.5 rounded-xl rounded-tl-none shadow-xs space-y-1">
                      <p>¿Y el queso mantecoso por kilo? Tampoco me acuerdo cuánto costaba</p>
                      <span className="text-[9px] text-slate-400 block text-right">11:46 AM</span>
                    </div>
                  </div>

                  {/* Audio o Llamada Perdida del Dueño */}
                  <div className="flex flex-col items-end max-w-[85%] ml-auto">
                    <div className="bg-[#DCF8C6] text-slate-800 p-2.5 rounded-xl rounded-tr-none shadow-xs space-y-1">
                      <p className="font-semibold text-[11px] text-slate-600">Don Juan (Dueño)</p>
                      <p>Iba manejando al banco... cobra $1.900 el aceite creo, y el queso $6.500 no me acuerdo si el repartidor me lo subió ayer.</p>
                      <span className="text-[9px] text-slate-400 block text-right">11:53 AM</span>
                    </div>
                  </div>

                  {/* Desenlace con Pérdida */}
                  <div className="flex flex-col items-start max-w-[85%]">
                    <div className="bg-white text-slate-800 p-2.5 rounded-xl rounded-tl-none shadow-xs space-y-1 border-l-4 border-rose-500">
                      <p className="text-rose-700 font-medium">Uff Don Juan, el distribuidor lo subió a $1.850 la semana pasada. Con $1.900 perdimos plata y la fila se armó hasta la puerta.</p>
                      <span className="text-[9px] text-slate-400 block text-right">11:55 AM</span>
                    </div>
                  </div>

                </div>

                {/* Síntomas Críticos */}
                <ul className="space-y-2 pt-2 text-xs text-rose-900">
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>El dueño no puede desconectarse, almorzar en paz ni salir del negocio.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Se venden productos bajo costo porque nadie recuerda la última factura.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Clientes molestos esperando que el cajero reciba la respuesta por WhatsApp.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-rose-200 text-xs font-semibold text-rose-700">
                Resultado: Pérdida silenciosa de hasta 15% de rentabilidad mensual.
              </div>
            </div>

            {/* LADO 2: Con Mister Inventario */}
            <div className="lg:col-span-6 bg-[#F8FAF9] rounded-2xl border-2 border-[#1E4334] p-6 sm:p-7 flex flex-col justify-between shadow-sm relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8F0EC]">
                  <div className="flex items-center gap-2 text-[#1E4334] font-bold text-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Con Mister Inventario: Control Automatizado</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                    0.5 segundos por escaneo
                  </span>
                </div>

                {/* Simulación del Terminal POS */}
                <div className="bg-white rounded-xl p-4 border border-[#C4D7CE] shadow-sm space-y-3 text-xs">
                  
                  <div className="flex items-center justify-between bg-[#1E4334] text-white p-2.5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-300" />
                      <span className="font-semibold text-xs">Lectura con Pistola de Barras</span>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-200">¡Bip! 78016100045</span>
                  </div>

                  <div className="p-3 bg-[#F8FAF9] rounded-lg border border-slate-200 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Aceite Vegetal Belmont 900ml</div>
                        <div className="text-[11px] text-slate-500">Categoría: Abarrotes · Stock: 24 un</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold font-mono text-[#1E4334] tabular-nums">$2.190</div>
                        <div className="text-[10px] text-emerald-600 font-semibold">Margen asegurado +35%</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex justify-between text-[11px] text-slate-600">
                      <span>Costo de compra actualizado: <strong>$1.550</strong></span>
                      <span className="text-emerald-700 font-medium">Boleta SII lista en 1 clic</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 text-emerald-900 rounded-lg text-xs font-semibold">
                    <span>El cajero atiende solo sin molestar a nadie</span>
                    <span className="font-mono text-emerald-700">0 llamadas al dueño</span>
                  </div>

                </div>

                {/* Beneficios Comprobados */}
                <ul className="space-y-2 pt-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Precios siempre al día:</strong> El cajero no adivina ni llama, el sistema muestra el valor exacto.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Dueño libre y tranquilo:</strong> Puedes salir a comprar mercadería o descansar sin que el local se detenga.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Márgenes protegidos:</strong> Cada producto tiene su margen calculado para no vender a pérdida jamás.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8F0EC] flex items-center justify-between">
                <span className="text-xs font-bold text-[#1E4334]">
                  Tranquilidad total para ti y tu equipo
                </span>
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#1E4334] text-white hover:bg-[#163428] transition-colors cursor-pointer"
                >
                  Probar Solución
                </button>
              </div>
            </div>

          </div>

          {/* 4 Grandes Dolores que Resolvemos de Raíz */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Cero llamadas al dueño</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tus cajeros tienen todo el catálogo en pantalla. No necesitan enviar fotos de productos por WhatsApp para saber qué cobrar.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Protección de margen real</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cuando sube el precio de la harina, el aceite o los lácteos, el sistema actualiza el precio público al instante para no perder dinero.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Fiados digitales sin pérdidas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se acabaron las hojas perdidas del cuaderno y los cobros olvidados. El saldo de cada vecino queda registrado con fecha y hora.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAF9] border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Cajas cuadradas al centavo</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Arqueos ciegos donde el cajero cuenta el dinero sin ver el total del sistema, evitando diferencias y plata faltante al final del día.
              </p>
            </div>
          </div>

          {/* Banner de Contacto Inmediato */}
          <div className="mt-10 p-6 rounded-2xl bg-[#E8F0EC] border border-[#C4D7CE] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-bold text-[#1E4334] text-base">
                ¿Te pasa esto actualmente en tu almacén o botillería?
              </h4>
              <p className="text-xs text-slate-600">
                Debbie Sepúlveda te muestra en 15 minutos cómo ordenar tus precios e inventario para liberar tu WhatsApp de una vez por todas.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://wa.me/56965481126?text=Hola%20Debbie,%20tengo%20mis%20precios%20en%20WhatsApp%20y%20me%20llaman%20siempre.%20Quiero%20ordenar%20mi%20almac%C3%A9n."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Hablar con Debbie (+56 9 6548 1126)</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECCIÓN DE SERVICIOS (7 Key Interactive Modules) */}
      <section id="servicios" className="py-20 bg-white border-b border-[#E8F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1E4334]">
              Módulos Integrados
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4334] tracking-tight" style={{ textWrap: 'balance' }}>
              Todo lo que tu comercio necesita para funcionar sin dolores de cabeza
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Siete módulos diseñados a la medida de la realidad comercial chilena. Haz clic en cada tarjeta para conocer sus funciones operativas.
            </p>
          </div>

          {/* Grid of 7 Service Modules */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((module) => {
              const IconComp = module.icon;
              return (
                <div
                  key={module.id}
                  onClick={() => setSelectedModule(module)}
                  className="group relative bg-[#F8FAF9] rounded-2xl p-6 border border-[#E8F0EC] hover:border-[#1E4334] transition-all hover:shadow-md cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Editorial numbering & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#1E4334] transition-colors">
                        MÓDULO {module.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#C4D7CE] text-[#1E4334] flex items-center justify-center group-hover:bg-[#1E4334] group-hover:text-white transition-all shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1E4334] mb-2 group-hover:text-[#163428] transition-colors">
                      {module.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                      {module.shortDesc}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 mb-6">
                      {module.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <ChevronRight className="w-3.5 h-3.5 text-[#40916C] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer: Detail Link */}
                  <div className="pt-4 border-t border-[#E8F0EC] flex items-center justify-between text-xs font-semibold text-[#1E4334]">
                    <span>Ver detalles operativos</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}

            {/* Bonus 8th Card: Resumen de Beneficios / Solicitud */}
            <div className="bg-[#1E4334] text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  ¿Tienes dudas sobre la compatibilidad de tu hardware?
                </h3>
                <p className="text-sm text-emerald-100 leading-relaxed">
                  Mister Inventario funciona en computadores con Windows, Mac, notebooks económicos y tablets Android. Conectamos tus lectoras térmicas y pistolas existentes.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full py-3 px-4 rounded-xl bg-white text-[#1E4334] hover:bg-[#E8F0EC] font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Consultar con un Especialista</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECCIÓN DEMOSTRACIÓN / GALERÍA INTERACTIVA */}
      <section id="demostracion" className="py-20 bg-[#F8FAF9] border-b border-[#E8F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1E4334]">
              Demostración en Vivo
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4334] tracking-tight" style={{ textWrap: 'balance' }}>
              Experimenta la interfaz real de Mister Inventario
            </h2>
            <p className="text-base text-slate-600">
              Navega entre las vistas operativas más solicitadas por dueños y administradores de negocios en Chile.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-[#E8F0EC] rounded-xl max-w-3xl mx-auto mb-10">
            <button
              onClick={() => setActiveGalleryTab('dueno')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeGalleryTab === 'dueno'
                  ? 'bg-[#1E4334] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#1E4334] hover:bg-white/60'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Panel del Dueño</span>
            </button>

            <button
              onClick={() => setActiveGalleryTab('calculadora')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeGalleryTab === 'calculadora'
                  ? 'bg-[#1E4334] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#1E4334] hover:bg-white/60'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Calculadora de Márgenes</span>
            </button>

            <button
              onClick={() => setActiveGalleryTab('sii')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeGalleryTab === 'sii'
                  ? 'bg-[#1E4334] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#1E4334] hover:bg-white/60'
              }`}
            >
              <Receipt className="w-4 h-4" />
              <span>Integración SII (DTE)</span>
            </button>

            <button
              onClick={() => setActiveGalleryTab('catalogo')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeGalleryTab === 'catalogo'
                  ? 'bg-[#1E4334] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#1E4334] hover:bg-white/60'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Catálogo Inteligente</span>
            </button>
          </div>

          {/* Interactive Viewport Container */}
          <div className="bg-white rounded-2xl border border-[#C4D7CE] shadow-lg overflow-hidden max-w-5xl mx-auto">
            
            {/* Screen Top Bar Mockup */}
            <div className="bg-[#1E4334] text-white px-5 py-3.5 flex items-center justify-between border-b border-emerald-900">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-medium text-emerald-100 hidden sm:inline">
                  Mister Inventario v3.4 · Almacén Central Santa Isabel
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-emerald-200">
                <span>Cajero: Rodrigo (PIN #4021)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* TAB 1: Panel del Dueño */}
            {activeGalleryTab === 'dueno' && (
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Resumen Ejecutivo del Negocio</h3>
                    <p className="text-xs text-slate-500">Métricas consolidadas de hoy (Jornada continua)</p>
                  </div>
                  <div className="text-xs font-semibold text-[#1E4334] bg-[#E8F0EC] px-3 py-1.5 rounded-lg">
                    Turno Mañana + Tarde
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">Venta Total Hoy</div>
                    <div className="text-2xl font-bold font-mono text-[#1E4334] tabular-nums">$482.350</div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-1">↑ +14.2% vs jueves pasado</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">Ticket Promedio</div>
                    <div className="text-2xl font-bold font-mono text-slate-800 tabular-nums">$6.890</div>
                    <div className="text-[11px] text-slate-500 mt-1">70 tickets generados</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">Margen Bruto Estimado</div>
                    <div className="text-2xl font-bold font-mono text-emerald-700 tabular-nums">38.4%</div>
                    <div className="text-[11px] text-slate-500 mt-1">Ganancia neta: $185.220</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAF9] border border-slate-200">
                    <div className="text-xs text-slate-500 mb-1">Alerta Stock Crítico</div>
                    <div className="text-2xl font-bold font-mono text-amber-600 tabular-nums">4 ítems</div>
                    <div className="text-[11px] text-amber-700 font-medium mt-1">Requiere pedido hoy</div>
                  </div>
                </div>

                {/* Sales Hourly Bar Chart Simulation */}
                <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">Horas Pico de Venta (Hoy)</span>
                    <span className="text-slate-500">Pico máximo: 13:00 hrs y 19:30 hrs</span>
                  </div>

                  <div className="grid grid-cols-8 gap-2 items-end h-28 pt-4">
                    {[
                      { hour: '09h', val: 25, amount: '$32.000' },
                      { hour: '11h', val: 55, amount: '$68.000' },
                      { hour: '13h', val: 95, amount: '$124.000' },
                      { hour: '15h', val: 40, amount: '$49.000' },
                      { hour: '17h', val: 60, amount: '$75.000' },
                      { hour: '19h', val: 100, amount: '$141.000' },
                      { hour: '21h', val: 45, amount: '$58.000' },
                      { hour: '22h', val: 15, amount: '$18.000' },
                    ].map((bar, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5 h-full justify-end group relative">
                        <div
                          className="w-full bg-[#1E4334] rounded-t-md transition-all group-hover:bg-[#40916C]"
                          style={{ height: `${bar.val}%` }}
                        />
                        <span className="text-[10px] text-slate-500 font-mono">{bar.hour}</span>
                        {/* Hover Tooltip */}
                        <div className="absolute -top-7 hidden group-hover:block bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-10">
                          {bar.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Products Sold */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="px-4 py-2.5 bg-slate-50 text-xs font-bold text-slate-700 flex justify-between">
                    <span>Últimas ventas en caja</span>
                    <span>Medio de Pago</span>
                  </div>
                  <div className="divide-y divide-slate-100 text-xs">
                    <div className="px-4 py-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-800">Bebida Coca-Cola 1.5L Original</span>
                        <span className="text-slate-400">× 2 un</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono font-semibold text-slate-800 tabular-nums">$3.980</span>
                        <span className="text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Tarjeta Transbank</span>
                      </div>
                    </div>
                    <div className="px-4 py-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-800">Pan Batido Granel (0.85 kg) + Queso Gauda</span>
                        <span className="text-slate-400">× 1 un</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono font-semibold text-slate-800 tabular-nums">$4.750</span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">Efectivo ($5.000)</span>
                      </div>
                    </div>
                    <div className="px-4 py-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-800">Aceite Vegetal Belmont 900ml</span>
                        <span className="text-slate-400">× 1 un</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono font-semibold text-slate-800 tabular-nums">$2.190</span>
                        <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-medium">Cuenta Fiado (Don Carlos)</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: Calculadora de Márgenes Real e Interactiva */}
            {activeGalleryTab === 'calculadora' && (
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Calculadora de Márgenes y Fijación de Precios</h3>
                  <p className="text-xs text-slate-500">Herramienta en vivo: ajusta el costo de tu distribuidor y el margen que deseas ganar para ver el precio final recomendado.</p>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-center bg-[#F8FAF9] p-6 rounded-xl border border-slate-200">
                  
                  {/* Left Controls */}
                  <div className="md:col-span-7 space-y-5">
                    <div>
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1.5">
                        <label htmlFor={marginCostId}>Costo Neto de Compra (Proveedor)</label>
                        <span className="font-mono font-bold text-[#1E4334]">${calcCost.toLocaleString('es-CL')} CLP</span>
                      </div>
                      <input
                        id={marginCostId}
                        type="range"
                        min="200"
                        max="15000"
                        step="100"
                        value={calcCost}
                        onChange={(e) => setCalcCost(Number(e.target.value))}
                        className="w-full accent-[#1E4334] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                        <span>$200</span>
                        <span>$7.500</span>
                        <span>$15.000</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1.5">
                        <label htmlFor={marginProfitId}>Margen de Ganancia Deseado</label>
                        <span className="font-mono font-bold text-[#1E4334]">{calcMargin}%</span>
                      </div>
                      <input
                        id={marginProfitId}
                        type="range"
                        min="10"
                        max="70"
                        step="1"
                        value={calcMargin}
                        onChange={(e) => setCalcMargin(Number(e.target.value))}
                        className="w-full accent-[#1E4334] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                        <span>10% (Bajo)</span>
                        <span>35% (Común almacén)</span>
                        <span>70% (Alto)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <input
                        type="checkbox"
                        id={marginVatId}
                        checked={calcIncludeIva}
                        onChange={(e) => setCalcIncludeIva(e.target.checked)}
                        className="w-4 h-4 rounded text-[#1E4334] accent-[#1E4334]"
                      />
                      <label htmlFor={marginVatId} className="text-xs font-medium text-slate-700 cursor-pointer">
                        Calcular con IVA 19% chileno para precio a público
                      </label>
                    </div>
                  </div>

                  {/* Right Real-time Outcome Card */}
                  <div className="md:col-span-5 bg-white p-5 rounded-xl border border-[#C4D7CE] shadow-sm space-y-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Resultado Sugerido
                    </div>

                    <div>
                      <div className="text-xs text-slate-500">Precio Público Recomendado:</div>
                      <div className="text-3xl font-extrabold font-mono text-[#1E4334] tabular-nums">
                        ${finalPriceWithIva.toLocaleString('es-CL')}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {calcIncludeIva ? 'IVA 19% incluido en el ticket' : 'Precio Neto'}
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-3 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Ganancia líquida por unidad:</span>
                        <span className="font-mono font-bold text-emerald-700 tabular-nums">
                          +${grossProfitPerUnit.toLocaleString('es-CL')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Retorno sobre costo:</span>
                        <span className="font-mono font-bold text-slate-800 tabular-nums">
                          {profitPercentageReal}%
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 bg-[#E8F0EC] p-2.5 rounded-lg">
                      Mister Inventario actualiza estos márgenes automáticamente al ingresar cada factura de tu distribuidor.
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 3: Integración SII (Boleta DTE chilena) */}
            {activeGalleryTab === 'sii' && (
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Emisión Inmediata de Boleta Electrónica SII</h3>
                  <p className="text-xs text-slate-500">Cumplimiento tributario sin retrasos. La boleta se timbra y se imprime en menos de 2 segundos.</p>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Chilean Thermal Receipt Mockup */}
                  <div className="md:col-span-6 bg-white border border-dashed border-slate-300 rounded-lg p-5 font-mono text-xs shadow-sm max-w-sm mx-auto w-full">
                    <div className="text-center space-y-1 pb-3 border-b border-dashed border-slate-300">
                      <div className="font-bold text-sm tracking-wider">COMERCIAL LOS NOGALES SpA</div>
                      <div>R.U.T.: 77.412.980-4</div>
                      <div className="text-[11px]">GIRO: VENTA AL POR MENOR MINIMARKET</div>
                      <div className="text-[10px] text-slate-500">Av. Providencia 1420, Santiago</div>
                    </div>

                    <div className="text-center py-2 border-b border-dashed border-slate-300 font-bold text-slate-800">
                      BOLETA ELECTRÓNICA<br />
                      <span className="text-sm">N° 00049210</span>
                    </div>

                    <div className="py-2 text-[10px] text-slate-600 space-y-1">
                      <div>FECHA: 08-10-2026  14:32:18</div>
                      <div>CAJA: 01 · CAJERO: RODRIGO M.</div>
                    </div>

                    <div className="py-2 border-y border-dashed border-slate-300 space-y-1 text-[11px]">
                      <div className="flex justify-between">
                        <span>1 × ACEITE VEGETAL 900ML</span>
                        <span>$2.190</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2 × LECHE ENTERA 1L COLUN</span>
                        <span>$2.380</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1 × HARINA SELECTA 1KG</span>
                        <span>$1.450</span>
                      </div>
                    </div>

                    <div className="py-2 space-y-1 text-xs">
                      <div className="flex justify-between font-bold text-sm">
                        <span>TOTAL</span>
                        <span>$6.020</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>El IVA de esta boleta es:</span>
                        <span>$961</span>
                      </div>
                    </div>

                    {/* PDF417 Barcode simulation */}
                    <div className="pt-3 border-t border-dashed border-slate-300 text-center space-y-1">
                      <div className="h-10 bg-slate-800 rounded flex items-center justify-center text-[10px] text-white tracking-widest px-2">
                        ||||| | |||| || |||||| | ||||| ||||| || |||
                      </div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-wider">
                        Timbre Electrónico SII · Res. 80 de 2014
                      </div>
                      <div className="text-[9px] text-slate-400">
                        Verifique documento en www.sii.cl
                      </div>
                    </div>
                  </div>

                  {/* Right: Technical Highlights */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="p-4 rounded-xl bg-[#E8F0EC] border border-[#C4D7CE] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#1E4334]">
                        <BadgeCheck className="w-4 h-4 text-emerald-700" />
                        <span>Estado: Conectado en Directo con SII</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Cada venta emite automáticamente el XML firmado con tu certificado digital de empresa y genera el ticket con su folio correlativo.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-3 text-xs">
                        <div className="w-5 h-5 rounded-full bg-[#1E4334] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">1</div>
                        <div>
                          <span className="font-semibold text-slate-800">Cero uso de la web manual del SII:</span>
                          <p className="text-slate-600">Ya no tienes que ingresar con clave única en la web lenta del SII mientras el cliente espera en la fila.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 text-xs">
                        <div className="w-5 h-5 rounded-full bg-[#1E4334] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">2</div>
                        <div>
                          <span className="font-semibold text-slate-800">Formato Térmico Ahorrador:</span>
                          <p className="text-slate-600">Optimizado para rollos de 58mm y 80mm con corte automático. También puedes enviar el comprobante por WhatsApp o correo.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 text-xs">
                        <div className="w-5 h-5 rounded-full bg-[#1E4334] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">3</div>
                        <div>
                          <span className="font-semibold text-slate-800">Libro RCV Siempre al Día:</span>
                          <p className="text-slate-600">Tu contador descarga el resumen mensual en 1 clic para la declaración del Formulario F29.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 4: Catálogo Inteligente */}
            {activeGalleryTab === 'catalogo' && (
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Catálogo con Alertas de Stock Inteligentes</h3>
                    <p className="text-xs text-slate-500">Búsqueda rápida por nombre, código EAN o SKU interno</p>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs text-slate-500">Buscar producto...</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F8FAF9] text-slate-600 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Código / SKU</th>
                        <th className="py-3 px-4">Producto</th>
                        <th className="py-3 px-4">Categoría</th>
                        <th className="py-3 px-4 text-right">Costo</th>
                        <th className="py-3 px-4 text-right">PVP</th>
                        <th className="py-3 px-4 text-center">Stock Actual</th>
                        <th className="py-3 px-4 text-center">Estado</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-mono text-slate-400">78021000124</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">Arroz Grado 1 Miraflores 1kg</td>
                        <td className="py-3 px-4 text-slate-500">Abarrotes</td>
                        <td className="py-3 px-4 text-right font-mono tabular-nums">$980</td>
                        <td className="py-3 px-4 text-right font-mono font-bold tabular-nums text-[#1E4334]">$1.490</td>
                        <td className="py-3 px-4 text-center font-mono font-bold tabular-nums">48 un</td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">Óptimo</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-mono text-slate-400">78016100045</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">Aceite Vegetal Belmont 900ml</td>
                        <td className="py-3 px-4 text-slate-500">Abarrotes</td>
                        <td className="py-3 px-4 text-right font-mono tabular-nums">$1.550</td>
                        <td className="py-3 px-4 text-right font-mono font-bold tabular-nums text-[#1E4334]">$2.190</td>
                        <td className="py-3 px-4 text-center font-mono font-bold tabular-nums text-amber-600">5 un</td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">Mínimo (Alerta)</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-mono text-slate-400">78028000088</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">Bebida Coca-Cola 1.5L Original</td>
                        <td className="py-3 px-4 text-slate-500">Bebidas</td>
                        <td className="py-3 px-4 text-right font-mono tabular-nums">$1.320</td>
                        <td className="py-3 px-4 text-right font-mono font-bold tabular-nums text-[#1E4334]">$1.990</td>
                        <td className="py-3 px-4 text-center font-mono font-bold tabular-nums">26 un</td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">Óptimo</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-mono text-slate-400">78046100012</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">Huevos Grandes Extra (Bandeja 30)</td>
                        <td className="py-3 px-4 text-slate-500">Frescos</td>
                        <td className="py-3 px-4 text-right font-mono tabular-nums">$5.800</td>
                        <td className="py-3 px-4 text-right font-mono font-bold tabular-nums text-[#1E4334]">$7.990</td>
                        <td className="py-3 px-4 text-center font-mono font-bold tabular-nums text-red-600">2 un</td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-[11px] text-red-700 bg-red-50 px-2 py-0.5 rounded font-medium">Crítico</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span>Mostrando 4 de 1.420 productos activos</span>
                  <span className="text-[#1E4334] font-medium cursor-pointer hover:underline">Exportar inventario a Excel</span>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 5. SECCIÓN QUIÉNES SOMOS */}
      <section id="nosotros" className="py-20 bg-white border-b border-[#E8F0EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Asset */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#C4D7CE] bg-white shadow-xl aspect-[4/3] sm:aspect-[4/3]">
                <img
                  src={ownerImage}
                  alt="Dueña de comercio gestionando inventario con tablet"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat card on top of image */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-4 rounded-xl border border-slate-200 shadow-lg max-w-xs">
                <div className="text-2xl font-bold font-mono text-[#1E4334] tabular-nums">+1.200</div>
                <div className="text-xs text-slate-600 font-medium">Comercios y almacenes gestionando su negocio en todo Chile</div>
              </div>
            </div>

            {/* Right Story & Mission */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6 pt-6 lg:pt-0">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1E4334]">
                Quiénes Somos
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E4334] tracking-tight" style={{ textWrap: 'balance' }}>
                Tecnología ágil y sin complicaciones para los almacenes de verdad
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Nacimos con una convicción clara: <strong>el comercio de barrio es el corazón de nuestras comunidades</strong>. Durante años, los almacenes, minimarkets y botillerías se vieron atrapados entre el engorroso cuaderno de papel o sistemas informáticos anticuados, caros e incomprensibles.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                En <strong>Mister Inventario</strong> creamos una plataforma moderna, veloz y amigable que le devuelve la tranquilidad al dueño: control de inventario en tiempo real, arqueos de caja sin fugas, digitalización de fiados y boletas del SII en segundos, todo respaldado por soporte humano por WhatsApp.
              </p>

              {/* 3 Core Values */}
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E8F0EC]">
                  <div className="font-bold text-slate-900 text-sm mb-1">Cero Enredos</div>
                  <div className="text-xs text-slate-500">Cualquier cajero aprende a usarlo en menos de 10 minutos.</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E8F0EC]">
                  <div className="font-bold text-slate-900 text-sm mb-1">Soporte Cercano</div>
                  <div className="text-xs text-slate-500">Equipo en Chile disponible por WhatsApp para ayudarte siempre.</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E8F0EC]">
                  <div className="font-bold text-slate-900 text-sm mb-1">Sin Servidores Caros</div>
                  <div className="text-xs text-slate-500">Funciona en tu propio PC o tablet sin costos ocultos de mantención.</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-20 bg-[#F8FAF9] border-b border-[#E8F0EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1E4334]">
              Resolución de Dudas
            </div>
            <h2 className="text-3xl font-extrabold text-[#1E4334] tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-sm text-slate-600">
              Respuestas directas a las dudas comunes de comerciantes.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: '¿Qué necesito para empezar a usar Mister Inventario en mi local?',
                a: 'Solo necesitas un computador convencional (con Windows o Mac) o una tablet con navegador web y conexión a internet. Si ya tienes pistola lectora de código de barras o impresora térmica (58mm u 80mm), se conectan de inmediato.'
              },
              {
                q: '¿Cómo funciona la emisión de boletas con el SII?',
                a: 'Nosotros configuramos tu certificado digital tributario en el sistema. A partir de ese momento, cada venta que cobres genera automáticamente la boleta electrónica válida ante el SII con su respectivo timbre PDF417, sin ingresar a la web del SII.'
              },
              {
                q: '¿Cómo paso los fiados de mi cuaderno al sistema?',
                a: 'En el módulo de Clientes Fiados puedes crear a tus vecinos y clientes frecuentes en 30 segundos, asignándoles su saldo actual y un límite de crédito si lo deseas. Luego, cada compra o abono queda registrado cronológicamente.'
              },
              {
                q: '¿Qué pasa si tengo más de una caja o varios cajeros?',
                a: 'Mister Inventario soporta múltiples cajas simultáneas y cajeros con su propio PIN de 4 dígitos. Cada cajero abre y cierra su turno con su propio arqueo ciego para que las cuentas siempre sean claras.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <HelpCircle className="w-4 h-4 text-[#40916C] shrink-0" />
                  <span>{item.q}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FORMULARIO DE CONTACTO (Darker elegant green tone #1E4334) */}
      <section id="contacto" className="py-20 bg-[#1E4334] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Ponte en Contacto
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
                Moderniza tu almacén hoy mismo
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Cuéntanos sobre tu negocio y te mostraremos una demostración personalizada sin compromiso. Te respondemos por WhatsApp en menos de 15 minutos hábiles.
              </p>

              <div className="space-y-4 pt-4 text-xs sm:text-sm text-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Atención Especializada</div>
                    <div className="text-emerald-200">Debbie Sepúlveda · Asesora de Software</div>
                  </div>
                </div>

                <a
                  href="https://wa.me/56965481126?text=Hola%20Debbie,%20quisiera%20saber%20m%C3%A1s%20sobre%20el%20software%20Mister%20Inventario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white flex items-center gap-1.5">
                      <span>WhatsApp & Llamadas Directas</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-emerald-200 font-mono text-sm font-bold">+56 9 6548 1126</div>
                  </div>
                </a>

                <a
                  href="mailto:debbie.sepulveda2026@soymas.cl?subject=Consulta%20Software%20Mister%20Inventario"
                  className="flex items-center gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white flex items-center gap-1.5">
                      <span>Correo Electrónico Directo</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-emerald-200 font-mono text-xs">debbie.sepulveda2026@soymas.cl</div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Cobertura e Implementación</div>
                    <div className="text-emerald-200">Santiago y Regiones · Todo Chile</div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2">
                <div className="font-bold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-300" />
                  <span>Garantía de Satisfacción</span>
                </div>
                <p className="text-emerald-200/80">
                  Prueba Mister Inventario gratis durante 14 días con tu propio catálogo antes de tomar cualquier decisión.
                </p>
              </div>

            </div>

            {/* Right Contact Form Card (Elegant Dark Container) */}
            <div className="lg:col-span-7 bg-[#163428] rounded-2xl p-6 sm:p-8 border border-emerald-800/60 shadow-2xl">
              
              {contactSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <BadgeCheck className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Mensaje Recibido!</h3>
                  <p className="text-sm text-emerald-100 max-w-md mx-auto leading-relaxed">
                    Gracias por tu interés, <strong>{contactName || 'Comerciante'}</strong>. Tu consulta sobre el software ha sido enviada a <strong>Debbie Sepúlveda</strong> (<span className="text-emerald-300 font-mono text-xs">debbie.sepulveda2026@soymas.cl</span>).
                  </p>
                  
                  {/* Direct WhatsApp button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/56965481126?text=${encodeURIComponent(
                        `Hola Debbie, soy ${contactName || 'un comerciante'} (${contactBusiness}). Te escribo para consultar por el software Mister Inventario (${contactRegisters}). ${contactMessage ? `Mensaje: ${contactMessage}` : ''}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#163428] text-xs font-bold transition-all shadow-md flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Abrir Chat de WhatsApp con Debbie (+56 9 6548 1126)</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setContactSubmitted(false);
                      setContactName('');
                      setContactPhone('');
                      setContactEmail('');
                      setContactMessage('');
                    }}
                    className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors mt-3 cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white pb-1">
                    Solicita Información y Cotización
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-emerald-200 mb-1">
                        Tu Nombre o Nombre de tu Almacén *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Juan Pérez / Minimarket El Roble"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E4334] border border-emerald-700/80 text-white placeholder-emerald-400/60 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-emerald-200 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+56 9 1234 5678"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E4334] border border-emerald-700/80 text-white placeholder-emerald-400/60 text-xs focus:outline-none focus:border-emerald-400 font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-emerald-200 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu-correo@ejemplo.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E4334] border border-emerald-700/80 text-white placeholder-emerald-400/60 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-emerald-200 mb-1">
                        Tipo de Negocio
                      </label>
                      <select
                        value={contactBusiness}
                        onChange={(e) => setContactBusiness(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E4334] border border-emerald-700/80 text-white text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                      >
                        <option value="Almacén de barrio">Almacén de barrio</option>
                        <option value="Minimarket">Minimarket</option>
                        <option value="Botillería">Botillería</option>
                        <option value="Verdulería / Frutería">Verdulería / Frutería</option>
                        <option value="Panadería / Pastelería">Panadería / Pastelería</option>
                        <option value="Bazar / Paquetería">Bazar / Paquetería</option>
                        <option value="Otro comercio">Otro comercio</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-200 mb-1">
                      ¿Cuántas cajas o puntos de venta necesitas?
                    </label>
                    <select
                      value={contactRegisters}
                      onChange={(e) => setContactRegisters(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E4334] border border-emerald-700/80 text-white text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                    >
                      <option value="1 caja">1 caja (Punto de venta único)</option>
                      <option value="2 a 3 cajas">2 a 3 cajas</option>
                      <option value="Más de 3 cajas / Múltiples sucursales">Más de 3 cajas / Múltiples sucursales</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-200 mb-1">
                      Mensaje o Requerimiento Específico (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos si ya tienes boletas electrónicas o qué dudas tienes..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1E4334] border border-emerald-700/80 text-white placeholder-emerald-400/60 text-xs focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={contactLoading}
                    className="w-full py-3.5 px-6 rounded-xl bg-white text-[#1E4334] font-bold text-sm hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50"
                  >
                    {contactLoading ? (
                      <span>Procesando mensaje...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#1E4334]" />
                        <span>Enviar Solicitud de Contacto</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-emerald-300/80 text-center">
                    Tus datos son 100% privados y no enviamos spam publicitario.
                  </p>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* QUIET FOOTER */}
      <footer className="bg-[#163428] border-t border-emerald-950 text-emerald-100/70 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300">
                <Store className="w-4 h-4" />
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                mister<span className="text-emerald-400">.</span> INVENTARIO
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-emerald-200">
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              <a href="#demostracion" className="hover:text-white transition-colors">Demostración</a>
              <a href="#nosotros" className="hover:text-white transition-colors">Quiénes Somos</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-emerald-400/80 text-[11px]">
            <div>
              © {new Date().getFullYear()} Mister Inventario. Todos los derechos reservados. Desarrollado para el comercio chileno.
            </div>
            <div className="flex flex-wrap items-center gap-3 text-emerald-300">
              <span className="font-semibold text-white">Contacto Comercial:</span>
              <span>Debbie Sepúlveda</span>
              <span>·</span>
              <a href="https://wa.me/56965481126" target="_blank" rel="noopener noreferrer" className="hover:text-white underline font-mono">
                +56 9 6548 1126
              </a>
              <span>·</span>
              <a href="mailto:debbie.sepulveda2026@soymas.cl" className="hover:text-white underline font-mono">
                debbie.sepulveda2026@soymas.cl
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (Direct to Debbie Sepúlveda) */}
      <aside aria-label="Contacto rápido" className="fixed bottom-5 right-5 z-40">
        <a
          href="https://wa.me/56965481126?text=Hola%20Debbie,%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20el%20software%20Mister%20Inventario"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-900/50 transition-all flex items-center gap-2.5 border border-emerald-400/40 group hover:scale-105"
          aria-label="Hablar por WhatsApp con Debbie Sepúlveda +56 9 6548 1126"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold tracking-wide">
            Hablar por WhatsApp <span className="font-mono opacity-90 hidden sm:inline">(+56 9 6548 1126)</span>
          </span>
        </a>
      </aside>

      {/* MODAL: Módulo Detallado */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 border border-slate-200 shadow-2xl relative">
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#E8F0EC] text-[#1E4334] flex items-center justify-center">
                <selectedModule.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-400">MÓDULO {selectedModule.number}</span>
                <h3 className="text-xl font-bold text-[#1E4334]">{selectedModule.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedModule.fullDesc}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Capacidades destacadas:
              </div>
              <ul className="space-y-2">
                {selectedModule.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <BadgeCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <button
                onClick={() => {
                  setSelectedModule(null);
                  setDemoModalOpen(true);
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#1E4334] text-white text-xs font-semibold hover:bg-[#163428] transition-colors cursor-pointer"
              >
                Solicitar Demostración de este Módulo
              </button>
              <button
                onClick={() => setSelectedModule(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Solicitar Demo Gratis */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 space-y-5 border border-slate-200 shadow-2xl relative">
            <button
              onClick={() => {
                setDemoModalOpen(false);
                setDemoSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {demoSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <BadgeCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">¡Demo Solicitada con Éxito!</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Debbie Sepúlveda</strong> se pondrá en contacto contigo a tu WhatsApp <strong>{demoPhone}</strong> para activar tu demostración guiada del software.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/56965481126?text=${encodeURIComponent(
                      `Hola Debbie, acabo de solicitar una demo de Mister Inventario para mi negocio ${demoBusiness || ''}. Mi nombre es ${demoName || ''}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Conectar por WhatsApp Ahora (+56 9 6548 1126)</span>
                  </a>
                  <button
                    onClick={() => {
                      setDemoModalOpen(false);
                      setDemoSubmitted(false);
                    }}
                    className="w-full py-2 text-slate-500 hover:text-slate-800 text-xs font-semibold"
                  >
                    Cerrar ventana
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E4334]">
                    Prueba Guiada Sin Costo
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Solicitar Demo de Mister Inventario
                  </h3>
                  <p className="text-xs text-slate-500">
                    Atención directa con <strong>Debbie Sepúlveda</strong> (<span className="text-[#1E4334] font-medium">+56 9 6548 1126</span> · <span className="font-mono text-[11px]">debbie.sepulveda2026@soymas.cl</span>).
                  </p>
                </div>

                <form onSubmit={handleDemoSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Carolina Morales"
                      value={demoName}
                      onChange={(e) => setDemoName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#1E4334]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      WhatsApp de contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 9876 5432"
                      value={demoPhone}
                      onChange={(e) => setDemoPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:outline-none focus:border-[#1E4334]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Nombre del Comercio / Almacén
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Botillería y Minimarket San Pedro"
                      value={demoBusiness}
                      onChange={(e) => setDemoBusiness(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#1E4334]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#1E4334] text-white text-xs font-bold hover:bg-[#163428] transition-colors shadow-md cursor-pointer"
                    >
                      Agendar Demostración Inmediata
                    </button>
                  </div>
                  <div className="text-[10px] text-slate-400 text-center">
                    Cero tarjetas de crédito. Cero contratos forzados.
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

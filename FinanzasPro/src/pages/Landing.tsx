import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Package, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Shield,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle2,
  ChevronRight,
  Star,
  MessageCircle,
  Building2
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Reportes Financieros",
      description: "Genera reportes detallados de tus finanzas con gráficos interactivos y análisis en tiempo real."
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Control de Inventario",
      description: "Gestiona tu inventario eficientemente con alertas automáticas y seguimiento en tiempo real."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Gestión de Flujo de Caja",
      description: "Mantén un control preciso de tus ingresos y gastos con proyecciones inteligentes."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Gestión de Clientes",
      description: "Administra tu cartera de clientes y mejora las relaciones comerciales."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Análisis Predictivo",
      description: "Toma decisiones informadas con predicciones basadas en IA y análisis de tendencias."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Seguridad Avanzada",
      description: "Protege tu información financiera con encriptación de nivel bancario."
    }
  ];

  const testimonials = [
    {
      name: "Carlos Rodríguez",
      position: "Director Financiero",
      company: "TechSolutions Inc.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      content: "FinanzasPro ha transformado completamente la manera en que manejamos nuestras finanzas. La interfaz intuitiva y los reportes detallados nos han ayudado a tomar mejores decisiones."
    },
    {
      name: "Ana Martínez",
      position: "Gerente de Operaciones",
      company: "Retail Connect",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
      content: "La gestión de inventario y el control de gastos nunca había sido tan fácil. Recomiendo ampliamente FinanzasPro a cualquier empresa que busque optimizar sus procesos."
    },
    {
      name: "Miguel Sánchez",
      position: "CEO",
      company: "Global Supplies Ltd.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      content: "Desde que implementamos FinanzasPro, nuestra eficiencia ha aumentado significativamente. El soporte al cliente es excepcional y las actualizaciones constantes mantienen el sistema siempre al día."
    }
  ];

  const faqs = [
    {
      question: "¿Qué incluye el plan básico?",
      answer: "El plan básico incluye gestión de inventario, reportes básicos, control de gastos y soporte por correo electrónico. Es perfecto para pequeñas empresas que están comenzando."
    },
    {
      question: "¿Puedo migrar mis datos desde otro sistema?",
      answer: "Sí, ofrecemos herramientas de migración y asistencia personalizada para transferir tus datos desde otros sistemas contables populares."
    },
    {
      question: "¿Qué tan segura es mi información?",
      answer: "Utilizamos encriptación de nivel bancario y servidores seguros para proteger tu información. Realizamos copias de seguridad diarias y cumplimos con los estándares de seguridad más altos."
    },
    {
      question: "¿Ofrecen capacitación para el personal?",
      answer: "Sí, proporcionamos sesiones de capacitación en línea, documentación detallada y videos tutoriales para asegurar que tu equipo aproveche al máximo el sistema."
    }
  ];

  const partners = [
    { name: "TechCorp", logo: "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg" },
    { name: "InnovaSoft", logo: "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg" },
    { name: "GlobalTech", logo: "https://images.pexels.com/photos/2977549/pexels-photo-2977549.jpeg" },
    { name: "FutureSystems", logo: "https://images.pexels.com/photos/2977551/pexels-photo-2977551.jpeg" },
    { name: "DataPro", logo: "https://images.pexels.com/photos/2977553/pexels-photo-2977553.jpeg" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                FinanzasPro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Características
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                Testimonios
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contacto
              </a>
              <button 
                onClick={() => navigate('/app/dashboard')}
                className="px-6 py-2.5 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Gestión Financiera Inteligente
                </span>
                <br />
                para tu Negocio
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Simplifica tu contabilidad, optimiza tu inventario y toma decisiones informadas con nuestra solución integral de gestión empresarial potenciada por IA.
              </p>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => navigate('/app/dashboard')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-xl"
                >
                  Ver Demo
                </button>
                <a 
                  href="#features"
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Conoce más</span>
                  <ChevronRight size={20} className="ml-1" />
                </a>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">2,500+</div>
                  <div className="text-sm text-gray-600">Empresas Confían en Nosotros</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción del Cliente</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Soporte Técnico</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
                  alt="Dashboard Preview" 
                  className="rounded-xl shadow-2xl border border-gray-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent bottom-0 h-20"></div>
              </div>
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -right-8 top-1/4 bg-white p-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Ventas</div>
                    <div className="text-green-600">+28.5%</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Clientes</div>
                    <div className="text-blue-600">+150</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Características Diseñadas para tu Éxito
            </h2>
            <p className="text-xl text-gray-600">
              Herramientas poderosas que transformarán la manera en que gestionas tu negocio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600">
              Historias de éxito de empresas que han transformado su gestión financiera
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

     

      {/* FAQ Section */}
      <div id="faq" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Respuestas a las dudas más comunes sobre nuestro servicio
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white mb-4"
            >
              ¿Listo para Transformar tu Negocio?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100 mb-8"
            >
              Únete a miles de empresas que ya están optimizando su gestión financiera
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => navigate('/app/dashboard')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Comenzar Ahora
            </motion.button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte en cada paso del camino
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contacto@finanzaspro.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Oficina</h3>
              <p className="text-gray-600">Ciudad de México, México</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
                FinanzasPro
              </h3>
              <p className="text-gray-400">
                Solución integral para la gestión financiera y contable de tu negocio.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Producto</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Características</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentación</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutoriales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FinanzasPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
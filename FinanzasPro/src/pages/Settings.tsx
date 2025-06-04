import { useState } from 'react';
import { 
  Settings as SettingsIcon,
  User,
  Building,
  Bell,
  Lock,
  Database,
  Printer,
  Mail,
  X
} from 'lucide-react';
import toast from 'react-hot-toast';

type SettingsSection = 'profile' | 'company' | 'notifications' | 'security' | 'data' | 'printing' | 'email';

const Settings = () => {
  const [activeSection, setActiveSection] = useState<SettingsSection>('profile');
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);

  const handleSave = () => {
    toast.success('Configuración guardada exitosamente');
    setShowSaveConfirm(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Perfil de Usuario</h3>
              <p className="mt-1 text-sm text-gray-500">
                Actualiza tu información personal y preferencias
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Zona Horaria
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option>América/Ciudad_de_México</option>
                  <option>América/Bogota</option>
                  <option>América/Lima</option>
                  <option>América/Santiago</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Idioma
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option>Español</option>
                  <option>English</option>
                  <option>Português</option>
                </select>
              </div>
            </div>
          </div>
        );
      
      case 'company':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Información de la Empresa</h3>
              <p className="mt-1 text-sm text-gray-500">
                Configura los datos de tu empresa
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre de la Empresa
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  RFC
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Dirección
                </label>
                <textarea
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        );
      
      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Preferencias de Notificaciones</h3>
              <p className="mt-1 text-sm text-gray-500">
                Configura cómo y cuándo quieres recibir notificaciones
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-700">Alertas de Inventario Bajo</label>
                  <p className="text-gray-500">Recibe notificaciones cuando el stock esté por debajo del mínimo</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-700">Nuevas Ventas</label>
                  <p className="text-gray-500">Notificaciones cuando se registre una nueva venta</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-700">Reportes Semanales</label>
                  <p className="text-gray-500">Recibe un resumen semanal de la actividad del negocio</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Seguridad</h3>
              <p className="mt-1 text-sm text-gray-500">
                Configura las opciones de seguridad de tu cuenta
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contraseña Actual
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirmar Nueva Contraseña
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-700">Autenticación de dos factores</label>
                  <p className="text-gray-500">Añade una capa extra de seguridad a tu cuenta</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'data':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Gestión de Datos</h3>
              <p className="mt-1 text-sm text-gray-500">
                Configura las opciones de respaldo y exportación de datos
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900">Respaldo Automático</h4>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="backup-frequency"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label className="ml-3 text-sm text-gray-700">Diario</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="backup-frequency"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label className="ml-3 text-sm text-gray-700">Semanal</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="backup-frequency"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    />
                    <label className="ml-3 text-sm text-gray-700">Mensual</label>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900">Exportación de Datos</h4>
                <div className="mt-4 space-y-2">
                  <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Exportar Datos en CSV
                  </button>
                  <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Exportar Datos en Excel
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'printing':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Configuración de Impresión</h3>
              <p className="mt-1 text-sm text-gray-500">
                Configura las opciones de impresión de documentos
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Impresora Predeterminada
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option>Impresora Principal</option>
                  <option>Impresora Secundaria</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tamaño de Papel
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option>Carta</option>
                  <option>Oficio</option>
                  <option>A4</option>
                </select>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-700">Vista previa antes de imprimir</label>
                  <p className="text-gray-500">Mostrar vista previa antes de enviar a imprimir</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'email':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Configuración de Correo</h3>
              <p className="mt-1 text-sm text-gray-500">
                Configura las opciones de correo electrónico
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Servidor SMTP
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="smtp.ejemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Puerto
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="587"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Usuario
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-700">Usar SSL/TLS</label>
                  <p className="text-gray-500">Habilitar conexión segura</p>
                </div>
              </div>
              
              <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => toast.success('Prueba de conexión exitosa')}
              >
                Probar Conexión
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Configuración</h1>
        <p className="text-gray-500">Administra las preferencias del sistema</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
          <div className="p-4">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveSection('profile')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'profile' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <User size={20} />
                <span>Perfil</span>
              </button>
              <button
                onClick={() => setActiveSection('company')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'company' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Building size={20} />
                <span>Empresa</span>
              </button>
              <button
                onClick={() => setActiveSection('notifications')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'notifications' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Bell size={20} />
                <span>Notificaciones</span>
              </button>
              <button
                onClick={() => setActiveSection('security')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'security' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Lock size={20} />
                <span>Seguridad</span>
              </button>
              <button
                onClick={() => setActiveSection('data')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'data' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Database size={20} />
                <span>Datos</span>
              </button>
              <button
                onClick={() => setActiveSection('printing')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'printing' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Printer size={20} />
                <span>Impresión</span>
              </button>
              <button
                onClick={() => setActiveSection('email')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'email' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Mail size={20} />
                <span>Correo</span>
              </button>
            </nav>
          </div>
          
          <div className="col-span-2 p-6">
            {renderContent()}
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                onClick={() => setShowSaveConfirm(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Confirmation Modal */}
      {showSaveConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Confirmar Cambios</h3>
                <button onClick={() => setShowSaveConfirm(false)} className="text-gray-400 hover:text-gray-500">
                  <X size={20} />
                </button>
              </div>
              <p className="text-gray-500 mb-4">
                ¿Estás seguro de que deseas guardar los cambios realizados?
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowSaveConfirm(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
import { 
  Menu, 
  Bell, 
  Search, 
  User,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

interface SearchResult {
  title: string;
  path: string[];
  url: string;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const notifications = [
    {
      id: 1,
      title: 'Stock bajo en Laptop HP Elite',
      description: 'El producto ha alcanzado el nivel mínimo de stock',
      time: 'Hace 5 minutos',
      type: 'warning'
    },
    {
      id: 2,
      title: 'Nueva venta registrada',
      description: 'Venta #12458 por $1,250.00',
      time: 'Hace 15 minutos',
      type: 'success'
    },
    {
      id: 3,
      title: 'Actualización del sistema',
      description: 'Nueva versión disponible: v2.1.0',
      time: 'Hace 1 hora',
      type: 'info'
    }
  ];

  const searchableRoutes: SearchResult[] = [
    { title: 'Agregar Producto', path: ['Inventario', 'Agregar nuevo producto'], url: '/app/inventory' },
    { title: 'Lista de Productos', path: ['Inventario', 'Lista de productos'], url: '/app/inventory' },
    { title: 'Nueva Venta', path: ['Ventas', 'Nueva venta'], url: '/app/sales' },
    { title: 'Historial de Ventas', path: ['Ventas', 'Historial'], url: '/app/sales' },
    { title: 'Nuevo Cliente', path: ['Clientes', 'Agregar cliente'], url: '/app/customers' },
    { title: 'Lista de Clientes', path: ['Clientes', 'Lista'], url: '/app/customers' },
    { title: 'Nuevo Gasto', path: ['Gastos', 'Registrar gasto'], url: '/app/expenses' },
    { title: 'Lista de Gastos', path: ['Gastos', 'Historial'], url: '/app/expenses' },
    { title: 'Nueva Compra', path: ['Compras', 'Registrar compra'], url: '/app/purchases' },
    { title: 'Lista de Compras', path: ['Compras', 'Historial'], url: '/app/purchases' },
    { title: 'Balance General', path: ['Contabilidad', 'Balance'], url: '/app/accounting' },
    { title: 'Estado de Resultados', path: ['Contabilidad', 'Resultados'], url: '/app/accounting' },
    { title: 'Flujo de Efectivo', path: ['Contabilidad', 'Flujo'], url: '/app/accounting' },
    { title: 'Reportes Financieros', path: ['Reportes', 'Finanzas'], url: '/app/reports' },
    { title: 'Configuración de Usuario', path: ['Configuración', 'Perfil'], url: '/app/settings' }
  ];

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.length > 0) {
      const filtered = searchableRoutes.filter(route => 
        route.title.toLowerCase().includes(value.toLowerCase()) ||
        route.path.join(' ').toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="bg-white shadow z-10 h-16">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-1 mr-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Menu size={24} />
          </button>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-96 py-2 pl-10 pr-3 text-sm bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="Buscar en el sistema..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && searchTerm && (
              <div className="absolute mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50"
                    onClick={() => {
                      navigate(result.url);
                      setSearchTerm('');
                      setSearchResults([]);
                    }}
                  >
                    <div className="text-sm font-medium text-gray-900">
                      {result.title}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center">
                      {result.path.map((item, i) => (
                        <span key={i} className="flex items-center">
                          {item}
                          {i < result.path.length - 1 && <ChevronRight size={12} className="mx-1" />}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button 
              className="relative p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">Notificaciones</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex items-start">
                        <div className={`w-2 h-2 mt-2 rounded-full mr-3 ${
                          notification.type === 'warning' ? 'bg-amber-500' :
                          notification.type === 'success' ? 'bg-green-500' :
                          'bg-blue-500'
                        }`}></div>
                        <div>
                          <p className="font-medium text-sm">{notification.title}</p>
                          <p className="text-gray-600 text-sm mt-1">{notification.description}</p>
                          <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Ver todas las notificaciones
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button 
              className="flex items-center space-x-2 focus:outline-none"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                <User size={18} />
              </div>
              <span className="hidden md:block font-medium">Usuario</span>
            </button>
            
            {/* User Menu Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <LogOut size={16} className="mr-2" />
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  ShoppingBag,
  Receipt,
  Users,
  Truck,
  PieChart,
  BarChart3,
  Settings,
  ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, onToggleSidebar }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isMobile = window.innerWidth < 768;
      if (
        isSidebarOpen &&
        isMobile &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onToggleSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen, onToggleSidebar]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed md:relative bg-white z-20 h-full shadow-lg transition-all duration-300
        ${isSidebarOpen ? 'w-64' : 'w-16'}
        ${!isSidebarOpen ? 'overflow-hidden' : ''}
      `}
    >
      <div className="flex items-center justify-between h-16 px-4">
        {isSidebarOpen && (
          <h1 className="text-xl font-bold text-blue-700 whitespace-nowrap">FinanzasPro</h1>
        )}
        <button
          onClick={onToggleSidebar}
          className="ml-auto p-1 rounded-md hover:bg-gray-100"
          aria-label="Toggle Sidebar"
        >
          <ChevronLeft
            className={`text-gray-500 transition-transform duration-200 ${
              isSidebarOpen ? '' : 'rotate-180'
            }`}
          />
        </button>
      </div>

      <nav className="mt-6 overflow-y-auto h-[calc(100vh-4rem)]">
        <NavItem to="/app/dashboard" Icon={LayoutDashboard} label="Inicio" isSidebarOpen={isSidebarOpen} />
        <NavItem to="/app/inventory" Icon={Package} label="Inventario" isSidebarOpen={isSidebarOpen} />
        <NavItem to="/app/sales" Icon={ShoppingCart} label="Ventas" isSidebarOpen={isSidebarOpen} />
        <NavItem to="/app/purchases" Icon={ShoppingBag} label="Compras" isSidebarOpen={isSidebarOpen} />
        <NavItem to="/app/expenses" Icon={Receipt} label="Gastos" isSidebarOpen={isSidebarOpen} />
        <NavItem to="/app/customers" Icon={Users} label="Clientes" isSidebarOpen={isSidebarOpen} />
        <NavItem to="/app/suppliers" Icon={Truck} label="Proveedores" isSidebarOpen={isSidebarOpen} />
        <NavItem to="/app/accounting" Icon={PieChart} label="Contabilidad" isSidebarOpen={isSidebarOpen} />
        <NavItem to="/app/reports" Icon={BarChart3} label="Reportes" isSidebarOpen={isSidebarOpen} />
        <NavItem to="/app/settings" Icon={Settings} label="Configuración" isSidebarOpen={isSidebarOpen} />
      </nav>
    </aside>
  );
};

interface NavItemProps {
  to: string;
  Icon: React.ElementType;
  label: string;
  isSidebarOpen: boolean;
}

const NavItem = ({ to, Icon, label, isSidebarOpen }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-700
        ${isActive ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700' : ''}
      `}
    >
      <Icon size={20} />
      {isSidebarOpen && <span className="ml-4">{label}</span>}
    </NavLink>
  );
};

export default Sidebar;

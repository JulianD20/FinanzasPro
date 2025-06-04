import { useState, useEffect } from 'react';
import { 
  DollarSign, 
  ShoppingCart, 
  CreditCard, 
  Package, 
  Users, 
  TrendingUp 
} from 'lucide-react';
import MetricCard from '../components/dashboard/MetricCard';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import InventorySummary from '../components/dashboard/InventorySummary';
import SalesChart from '../components/dashboard/SalesChart';
import { getMockTransactions, getMockInventoryItems, getMockSalesData } from '../utils/mockData';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    setTransactions(getMockTransactions());
    setInventoryItems(getMockInventoryItems());
    setSalesData(getMockSalesData());
  }, []);

  const handleAIFeatureClick = (feature: string) => {
    toast((t) => (
      <div className="flex items-start">
        <div className="flex-1">
          <p className="font-medium">Función Premium Requerida</p>
          <p className="text-sm text-gray-600 mt-1">
            La función de {feature} estará disponible con el plan Premium después del lanzamiento.
          </p>
        </div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-4 p-1 text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
    ), {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#fff',
        color: '#363636',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        border: '1px solid #e2e8f0',
        minWidth: '300px'
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Resumen de tu negocio</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard 
          title="Ventas del Mes" 
          value="$24,125.00"
          icon={<DollarSign size={20} className="text-white" />}
          change={12}
          colorClass="bg-blue-600 text-white"
        />
        <MetricCard 
          title="Pedidos Nuevos" 
          value="142"
          icon={<ShoppingCart size={20} className="text-white" />}
          change={-5}
          colorClass="bg-teal-600 text-white"
        />
        <MetricCard 
          title="Gastos del Mes" 
          value="$12,345.00"
          icon={<CreditCard size={20} className="text-white" />}
          change={8}
          colorClass="bg-amber-500 text-white"
        />
        <MetricCard 
          title="Productos" 
          value="284"
          icon={<Package size={20} className="text-white" />}
          change={3}
          colorClass="bg-purple-600 text-white"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart data={salesData} />
        </div>
        <div>
          <RecentTransactions transactions={transactions} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InventorySummary items={inventoryItems} />
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Análisis IA</h2>
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              Predicciones
            </span>
          </div>
          
          <div className="space-y-4">
            <div 
              className="p-3 bg-blue-50 border border-blue-100 rounded-md cursor-pointer hover:bg-blue-100 transition-colors"
              onClick={() => handleAIFeatureClick('Predicción de Ventas')}
            >
              <div className="flex items-start">
                <TrendingUp size={18} className="text-blue-600 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium text-sm">Predicción de Ventas</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Basado en tus tendencias, se espera un incremento de 15% en ventas para el próximo mes.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className="p-3 bg-amber-50 border border-amber-100 rounded-md cursor-pointer hover:bg-amber-100 transition-colors"
              onClick={() => handleAIFeatureClick('Oportunidad de Clientes')}
            >
              <div className="flex items-start">
                <Users size={18} className="text-amber-600 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium text-sm">Oportunidad de Clientes</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Tus 5 principales clientes no han realizado compras en los últimos 30 días. Considera una campaña de reactivación.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className="p-3 bg-green-50 border border-green-100 rounded-md cursor-pointer hover:bg-green-100 transition-colors"
              onClick={() => handleAIFeatureClick('Optimización de Gastos')}
            >
              <div className="flex items-start">
                <DollarSign size={18} className="text-green-600 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium text-sm">Optimización de Gastos</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Podrías reducir tus gastos operativos en un 8% optimizando tus procesos de inventario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
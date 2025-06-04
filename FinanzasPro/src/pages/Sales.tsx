import { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  CreditCard, 
  Users, 
  TrendingUp 
} from 'lucide-react';
import StatsCard from '../components/common/StatsCard';
import { getMockSales } from '../utils/mockData';

const Sales = () => {
  const [sales, setSales] = useState([]);
  
  useEffect(() => {
    // Load mock data
    setSales(getMockSales());
  }, []);
  
  // Calculate statistics
  const totalSales = sales.length;
  const totalRevenue = sales.reduce((sum, sale) => sum + sale.total, 0);
  const averageTicket = totalSales > 0 ? totalRevenue / totalSales : 0;
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Ventas</h1>
        <p className="text-gray-500">Gestiona tus ventas y facturación</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Ventas Totales"
          value={totalSales}
          subtitle="Este mes"
          icon={<ShoppingCart size={20} />}
        />
        <StatsCard 
          title="Ingresos"
          value={`$${totalRevenue.toLocaleString()}`}
          icon={<CreditCard size={20} />}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatsCard 
          title="Ticket Promedio"
          value={`$${averageTicket.toFixed(2)}`}
          icon={<TrendingUp size={20} />}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard 
          title="Clientes Nuevos"
          value="18"
          subtitle="Últimos 30 días"
          icon={<Users size={20} />}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Ventas Recientes</h2>
            <button className="px-3 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Nueva Venta
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Factura
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sales.slice(0, 5).map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    #{sale.invoice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sale.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {sale.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      sale.status === 'Pagada' ? 'bg-green-100 text-green-800' : 
                      sale.status === 'Pendiente' ? 'bg-amber-100 text-amber-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {sale.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${sale.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <button className="text-sm text-blue-600 hover:text-blue-900">
            Ver todas las ventas →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
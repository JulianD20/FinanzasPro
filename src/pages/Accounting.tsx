import { DollarSign, TrendingUp, TrendingDown, PieChart } from 'lucide-react';
import StatsCard from '../components/common/StatsCard';

const Accounting = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Contabilidad</h1>
        <p className="text-gray-500">Administra tus finanzas e información contable</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Ingresos Totales"
          value="$124,568.00"
          subtitle="Este año"
          icon={<TrendingUp size={20} />}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatsCard 
          title="Gastos Totales"
          value="$84,215.00"
          subtitle="Este año"
          icon={<TrendingDown size={20} />}
          iconBgColor="bg-red-100"
          iconColor="text-red-600"
        />
        <StatsCard 
          title="Ganancia Neta"
          value="$40,353.00"
          subtitle="Este año"
          icon={<DollarSign size={20} />}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard 
          title="Impuestos"
          value="$12,105.90"
          subtitle="Estimado"
          icon={<PieChart size={20} />}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-4">Balance General</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Activos</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Efectivo y equivalentes</span>
                  <span className="font-medium">$32,450.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Cuentas por cobrar</span>
                  <span className="font-medium">$18,725.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Inventario</span>
                  <span className="font-medium">$45,320.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Activos fijos</span>
                  <span className="font-medium">$128,500.00</span>
                </div>
              </div>
              <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                <span>Total Activos</span>
                <span>$224,995.00</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Pasivos</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Cuentas por pagar</span>
                  <span className="font-medium">$12,350.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Préstamos</span>
                  <span className="font-medium">$85,000.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Impuestos por pagar</span>
                  <span className="font-medium">$8,450.00</span>
                </div>
              </div>
              <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                <span>Total Pasivos</span>
                <span>$105,800.00</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Patrimonio</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Capital</span>
                  <span className="font-medium">$50,000.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Utilidades retenidas</span>
                  <span className="font-medium">$69,195.00</span>
                </div>
              </div>
              <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                <span>Total Patrimonio</span>
                <span>$119,195.00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-4">Estado de Resultados</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Ingresos</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Ventas</span>
                  <span className="font-medium">$124,568.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Otros ingresos</span>
                  <span className="font-medium">$3,250.00</span>
                </div>
              </div>
              <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                <span>Total Ingresos</span>
                <span>$127,818.00</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Gastos</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Costo de ventas</span>
                  <span className="font-medium">$48,320.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Gastos operativos</span>
                  <span className="font-medium">$18,750.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Salarios</span>
                  <span className="font-medium">$32,800.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Gastos financieros</span>
                  <span className="font-medium">$4,850.00</span>
                </div>
              </div>
              <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                <span>Total Gastos</span>
                <span>$104,720.00</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between font-medium mt-4 pt-2 border-t">
                <span>Utilidad antes de impuestos</span>
                <span>$23,098.00</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Impuestos (30%)</span>
                <span>$6,929.40</span>
              </div>
              <div className="flex justify-between font-medium mt-2 pt-2 border-t text-green-600">
                <span>Utilidad Neta</span>
                <span>$16,168.60</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Flujo de Efectivo</h2>
          <div className="flex space-x-2">
            <button className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
              Este Mes
            </button>
            <button className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
              Este Año
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Actividades Operativas</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Ingresos por ventas</span>
                <span className="font-medium text-green-600">+$18,450.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Pagos a proveedores</span>
                <span className="font-medium text-red-600">-$8,320.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Pagos de gastos operativos</span>
                <span className="font-medium text-red-600">-$3,650.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Pagos de salarios</span>
                <span className="font-medium text-red-600">-$5,780.00</span>
              </div>
            </div>
            <div className="flex justify-between font-medium mt-2 pt-2 border-t">
              <span>Efectivo neto de actividades operativas</span>
              <span className="text-green-600">+$700.00</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Actividades de Inversión</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Compra de equipos</span>
                <span className="font-medium text-red-600">-$2,500.00</span>
              </div>
            </div>
            <div className="flex justify-between font-medium mt-2 pt-2 border-t">
              <span>Efectivo neto de actividades de inversión</span>
              <span className="text-red-600">-$2,500.00</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Actividades de Financiamiento</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Pago de préstamos</span>
                <span className="font-medium text-red-600">-$1,200.00</span>
              </div>
            </div>
            <div className="flex justify-between font-medium mt-2 pt-2 border-t">
              <span>Efectivo neto de actividades de financiamiento</span>
              <span className="text-red-600">-$1,200.00</span>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex justify-between font-medium">
              <span>Cambio neto en efectivo</span>
              <span className="text-red-600">-$3,000.00</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Efectivo al inicio del periodo</span>
              <span>$35,450.00</span>
            </div>
            <div className="flex justify-between font-medium mt-2 pt-2 border-t">
              <span>Efectivo al final del periodo</span>
              <span>$32,450.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
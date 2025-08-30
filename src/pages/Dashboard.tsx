import { useState, useEffect } from 'react';
import { 
  DollarSign, 
  ShoppingCart, 
  CreditCard, 
  Package, 
  Users, 
  TrendingUp,
  Brain
} from 'lucide-react';
import MetricCard from '../components/dashboard/MetricCard';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import InventorySummary from '../components/dashboard/InventorySummary';
import SalesChart from '../components/dashboard/SalesChart';
import AIPredictionsModal from '../components/dashboard/AIPredictionsModal';
import { getMockTransactions, getMockInventoryItems, getMockSalesData } from '../utils/mockData';
import { generateAllPredictions, AIPrediction } from '../utils/aiPredictions';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [aiPredictions, setAiPredictions] = useState<AIPrediction[]>([]);
  const [selectedPrediction, setSelectedPrediction] = useState<AIPrediction | null>(null);
  const [showPredictionModal, setShowPredictionModal] = useState(false);

  useEffect(() => {
    setTransactions(getMockTransactions());
    setInventoryItems(getMockInventoryItems());
    setSalesData(getMockSalesData());
    setAiPredictions(generateAllPredictions());
  }, []);

  const handlePredictionClick = (prediction: AIPrediction) => {
    setSelectedPrediction(prediction);
    setShowPredictionModal(true);
  };

  const getIconForPrediction = (type: string) => {
    switch (type) {
      case 'sales':
        return <TrendingUp size={18} className="text-blue-600 mt-0.5 mr-2" />;
      case 'customers':
        return <Users size={18} className="text-green-600 mt-0.5 mr-2" />;
      case 'expenses':
        return <DollarSign size={18} className="text-amber-600 mt-0.5 mr-2" />;
      case 'inventory':
        return <Package size={18} className="text-purple-600 mt-0.5 mr-2" />;
      default:
        return <Brain size={18} className="text-gray-600 mt-0.5 mr-2" />;
    }
  };

  const getBgColorForPrediction = (type: string) => {
    switch (type) {
      case 'sales':
        return 'bg-blue-50 border-blue-100 hover:bg-blue-100';
      case 'customers':
        return 'bg-green-50 border-green-100 hover:bg-green-100';
      case 'expenses':
        return 'bg-amber-50 border-amber-100 hover:bg-amber-100';
      case 'inventory':
        return 'bg-purple-50 border-purple-100 hover:bg-purple-100';
      default:
        return 'bg-gray-50 border-gray-100 hover:bg-gray-100';
    }
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
            <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full flex items-center">
              <Brain size={12} className="mr-1" />
              Predicciones Activas
            </span>
          </div>
          
          <div className="space-y-4">
            {aiPredictions.map((prediction) => (
              <div 
                key={prediction.id}
                className={`p-3 border rounded-md cursor-pointer transition-all duration-200 ${getBgColorForPrediction(prediction.type)}`}
                onClick={() => handlePredictionClick(prediction)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    {getIconForPrediction(prediction.type)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{prediction.title}</p>
                        <span className="text-xs px-2 py-1 bg-white rounded-full font-medium">
                          {prediction.confidence}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {prediction.description}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          prediction.impact === 'high' ? 'bg-red-100 text-red-700' :
                          prediction.impact === 'medium' ? 'bg-amber-100 text-amber-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {prediction.impact === 'high' ? 'Alto' : 
                           prediction.impact === 'medium' ? 'Medio' : 'Bajo'} Impacto
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Las predicciones se actualizan automáticamente cada 24 horas
            </p>
          </div>
        </div>
      </div>
      
      {/* AI Predictions Modal */}
      {selectedPrediction && (
        <AIPredictionsModal
          isOpen={showPredictionModal}
          onClose={() => setShowPredictionModal(false)}
          prediction={selectedPrediction}
        />
      )}
    </div>
  );
};

export default Dashboard;
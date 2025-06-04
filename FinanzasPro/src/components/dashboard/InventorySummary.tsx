import { 
  AlertTriangle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface InventoryItem {
  id: string;
  name: string;
  stock: number;
  minStock: number;
  unit: string;
}

interface InventorySummaryProps {
  items: InventoryItem[];
}

const InventorySummary = ({ items }: InventorySummaryProps) => {
  const navigate = useNavigate();
  const lowStockItems = items.filter(item => item.stock <= item.minStock);
  
  const handleRestock = (itemId: string) => {
    toast((t) => (
      <div className="flex items-start">
        <div className="flex-1">
          <p className="font-medium">Reposición Programada</p>
          <p className="text-sm text-gray-600 mt-1">
            Se ha programado la reposición automática del producto. Recibirás una notificación cuando el pedido esté listo.
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Alertas de Inventario</h2>
        <button 
          onClick={() => navigate('/app/inventory')}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Ver inventario completo
        </button>
      </div>
      
      {lowStockItems.length > 0 ? (
        <div className="space-y-2">
          {lowStockItems.map((item) => (
            <div 
              key={item.id}
              className="flex items-center justify-between p-2 bg-amber-50 border border-amber-100 rounded-md"
            >
              <div className="flex items-center">
                <div className="p-1.5 bg-amber-100 rounded-full text-amber-600 mr-3">
                  <AlertTriangle size={14} />
                </div>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    Stock bajo: <span className="font-medium text-amber-600">{item.stock} {item.unit}</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={() => handleRestock(item.id)}
                className="text-xs px-2 py-1 bg-white border border-gray-200 rounded hover:bg-gray-50"
              >
                Reponer
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-32 text-gray-500">
          No hay alertas de inventario
        </div>
      )}
    </div>
  );
};

export default InventorySummary;
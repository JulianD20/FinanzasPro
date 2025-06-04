import { useState } from 'react';
import { 
  ShoppingBag, 
  DollarSign, 
  Truck, 
  Package,
  Search,
  Plus,
  Edit,
  Trash2,
  X,
  Filter
} from 'lucide-react';
import StatsCard from '../components/common/StatsCard';
import toast from 'react-hot-toast';

interface Purchase {
  id: string;
  date: string;
  supplier: string;
  orderNumber: string;
  total: number;
  status: 'Pendiente' | 'Completada' | 'Cancelada';
  items: {
    product: string;
    quantity: number;
    price: number;
  }[];
}

const Purchases = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([
    {
      id: '1',
      date: '2025-03-15',
      supplier: 'TechSupplies Inc.',
      orderNumber: 'PO-2025-001',
      total: 2500.00,
      status: 'Completada',
      items: [
        { product: 'Laptop HP', quantity: 2, price: 1000.00 },
        { product: 'Monitor Dell', quantity: 3, price: 500.00 }
      ]
    },
    // Add more mock data as needed
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    minAmount: '',
    maxAmount: '',
    dateFrom: '',
    dateTo: ''
  });

  const [newPurchase, setNewPurchase] = useState({
    supplier: '',
    items: [{ product: '', quantity: 1, price: 0 }]
  });

  const handleAddPurchase = () => {
    // Validate form
    if (!newPurchase.supplier) {
      toast.error('Por favor seleccione un proveedor');
      return;
    }

    if (newPurchase.items.some(item => !item.product || item.quantity <= 0 || item.price <= 0)) {
      toast.error('Por favor complete todos los campos de los productos');
      return;
    }

    // Add purchase logic here
    toast.success('Compra registrada exitosamente');
    setShowAddForm(false);
  };

  const handleDeletePurchase = (id: string) => {
    if (confirm('¿Está seguro de eliminar esta compra?')) {
      setPurchases(purchases.filter(p => p.id !== id));
      toast.success('Compra eliminada exitosamente');
    }
  };

  const filteredPurchases = purchases.filter(purchase => {
    const matchesSearch = 
      purchase.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.orderNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !filters.status || purchase.status === filters.status;
    const matchesMinAmount = !filters.minAmount || purchase.total >= parseFloat(filters.minAmount);
    const matchesMaxAmount = !filters.maxAmount || purchase.total <= parseFloat(filters.maxAmount);
    
    return matchesSearch && matchesStatus && matchesMinAmount && matchesMaxAmount;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Compras</h1>
        <p className="text-gray-500">Gestiona tus órdenes de compra y proveedores</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Compras del Mes"
          value="$15,842.50"
          icon={<ShoppingBag size={20} />}
        />
        <StatsCard 
          title="Órdenes Pendientes"
          value="8"
          icon={<Package size={20} />}
          iconBgColor="bg-amber-100"
          iconColor="text-amber-600"
        />
        <StatsCard 
          title="Proveedores Activos"
          value="12"
          icon={<Truck size={20} />}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard 
          title="Pagos Pendientes"
          value="$5,248.75"
          icon={<DollarSign size={20} />}
          iconBgColor="bg-red-100"
          iconColor="text-red-600"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="search"
                className="block w-full py-2 pl-10 pr-3 text-sm bg-gray-100 border border-transparent rounded-md focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Buscar compras..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                <Filter size={16} className="mr-1" />
                <span>Filtrar</span>
              </button>
              <button 
                onClick={() => setShowAddForm(true)}
                className="flex items-center px-3 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <Plus size={16} className="mr-1" />
                <span>Nueva Compra</span>
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estado
                  </label>
                  <select
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                  >
                    <option value="">Todos</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completada">Completada</option>
                    <option value="Cancelada">Cancelada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monto Mínimo
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={filters.minAmount}
                    onChange={(e) => setFilters({...filters, minAmount: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monto Máximo
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={filters.maxAmount}
                    onChange={(e) => setFilters({...filters, maxAmount: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orden #
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Proveedor
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
              {filteredPurchases.map((purchase) => (
                <tr key={purchase.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    {purchase.orderNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {purchase.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {purchase.supplier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      purchase.status === 'Completada' ? 'bg-green-100 text-green-800' :
                      purchase.status === 'Pendiente' ? 'bg-amber-100 text-amber-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {purchase.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${purchase.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => handleDeletePurchase(purchase.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Purchase Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-medium">Nueva Compra</h3>
              <button onClick={() => setShowAddForm(false)} className="text-gray-400 hover:text-gray-500">
                <X size={20} />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Proveedor
                </label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newPurchase.supplier}
                  onChange={(e) => setNewPurchase({...newPurchase, supplier: e.target.value})}
                >
                  <option value="">Seleccionar proveedor</option>
                  <option value="TechSupplies Inc.">TechSupplies Inc.</option>
                  <option value="Office Solutions">Office Solutions</option>
                  {/* Add more suppliers */}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Productos
                </label>
                {newPurchase.items.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-2">
                    <select
                      className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={item.product}
                      onChange={(e) => {
                        const newItems = [...newPurchase.items];
                        newItems[index].product = e.target.value;
                        setNewPurchase({...newPurchase, items: newItems});
                      }}
                    >
                      <option value="">Seleccionar producto</option>
                      <option value="Laptop HP">Laptop HP</option>
                      <option value="Monitor Dell">Monitor Dell</option>
                      {/* Add more products */}
                    </select>
                    <input
                      type="number"
                      placeholder="Cantidad"
                      className="w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={item.quantity}
                      onChange={(e) => {
                        const newItems = [...newPurchase.items];
                        newItems[index].quantity = parseInt(e.target.value);
                        setNewPurchase({...newPurchase, items: newItems});
                      }}
                    />
                    <input
                      type="number"
                      placeholder="Precio"
                      className="w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={item.price}
                      onChange={(e) => {
                        const newItems = [...newPurchase.items];
                        newItems[index].price = parseFloat(e.target.value);
                        setNewPurchase({...newPurchase, items: newItems});
                      }}
                    />
                    <button
                      onClick={() => {
                        const newItems = newPurchase.items.filter((_, i) => i !== index);
                        setNewPurchase({...newPurchase, items: newItems});
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    setNewPurchase({
                      ...newPurchase,
                      items: [...newPurchase.items, { product: '', quantity: 1, price: 0 }]
                    });
                  }}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  + Agregar producto
                </button>
              </div>
            </div>
            <div className="flex justify-end space-x-3 p-4 border-t">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddPurchase}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchases;
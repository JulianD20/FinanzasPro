import { useState, useEffect } from 'react';
import { Package, Boxes, ArrowDownUp, AlertTriangle } from 'lucide-react';
import ProductList from '../components/inventory/ProductList';
import StatsCard from '../components/common/StatsCard';
import { getMockProducts } from '../utils/mockData';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  
  useEffect(() => {
    // Load mock data
    setProducts(getMockProducts());
  }, []);
  
  const handleAddProduct = () => {
    setShowAddForm(true);
  };
  
  const handleEditProduct = (product) => {
    console.log('Edit product:', product);
    // Would open edit form in real app
  };
  
  const handleDeleteProduct = (id) => {
    console.log('Delete product:', id);
    // Would show confirmation and then delete in real app
  };
  
  // Calculate statistics
  const totalProducts = products.length;
  const lowStockProducts = products.filter(p => p.stock <= 5).length;
  const totalValue = products.reduce((sum, product) => sum + (product.stock * product.cost), 0);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Inventario</h1>
        <p className="text-gray-500">Administra tus productos e inventario</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Productos Totales"
          value={totalProducts}
          icon={<Package size={20} />}
        />
        <StatsCard 
          title="Valor de Inventario"
          value={`$${totalValue.toLocaleString()}`}
          icon={<Boxes size={20} />}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatsCard 
          title="Movimientos Recientes"
          value="28"
          subtitle="Últimos 7 días"
          icon={<ArrowDownUp size={20} />}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard 
          title="Stock Bajo"
          value={lowStockProducts}
          subtitle="Requieren atención"
          icon={<AlertTriangle size={20} />}
          iconBgColor="bg-amber-100"
          iconColor="text-amber-600"
        />
      </div>
      
      <div>
        <ProductList 
          products={products}
          onAdd={handleAddProduct}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      </div>
    </div>
  );
};

export default Inventory;
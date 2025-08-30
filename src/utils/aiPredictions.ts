// AI Predictions utility functions
import { getMockSales, getMockProducts, getMockTransactions } from './mockData';

export interface AIPrediction {
  id: string;
  type: 'sales' | 'customers' | 'expenses' | 'inventory';
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  recommendation: string;
  data?: any;
}

// Sales prediction based on historical data
export const generateSalesPrediction = (): AIPrediction => {
  const salesData = [
    { month: 'Ene', sales: 12000 },
    { month: 'Feb', sales: 14500 },
    { month: 'Mar', sales: 18000 },
    { month: 'Abr', sales: 15500 },
    { month: 'May', sales: 16800 },
    { month: 'Jun', sales: 22000 }
  ];

  // Calculate trend
  const recentSales = salesData.slice(-3).map(d => d.sales);
  const avgGrowth = recentSales.reduce((acc, curr, idx) => {
    if (idx === 0) return acc;
    return acc + ((curr - recentSales[idx - 1]) / recentSales[idx - 1]);
  }, 0) / (recentSales.length - 1);

  const predictedGrowth = Math.round(avgGrowth * 100);
  const nextMonthSales = Math.round(salesData[salesData.length - 1].sales * (1 + avgGrowth));

  return {
    id: 'sales-prediction',
    type: 'sales',
    title: 'Predicción de Ventas',
    description: `Basado en las tendencias actuales, se espera un ${predictedGrowth > 0 ? 'incremento' : 'decremento'} de ${Math.abs(predictedGrowth)}% en ventas para el próximo mes (${nextMonthSales.toLocaleString()} estimado).`,
    confidence: 85,
    impact: predictedGrowth > 10 ? 'high' : predictedGrowth > 5 ? 'medium' : 'low',
    recommendation: predictedGrowth > 0 
      ? 'Considera aumentar el inventario para satisfacer la demanda creciente.'
      : 'Revisa las estrategias de marketing y promociones para impulsar las ventas.',
    data: { predictedGrowth, nextMonthSales, currentSales: salesData[salesData.length - 1].sales }
  };
};

// Customer analysis based on sales patterns
export const generateCustomerPrediction = (): AIPrediction => {
  const sales = getMockSales();
  const totalCustomers = 248;
  const newCustomersThisMonth = 18;
  const avgTicket = sales.reduce((sum, sale) => sum + sale.total, 0) / sales.length;
  
  // Simulate customer behavior analysis
  const inactiveCustomers = Math.floor(totalCustomers * 0.15); // 15% inactive
  const churnRisk = Math.floor(totalCustomers * 0.08); // 8% at risk
  
  return {
    id: 'customer-prediction',
    type: 'customers',
    title: 'Análisis de Clientes',
    description: `${inactiveCustomers} clientes no han realizado compras en los últimos 30 días. ${churnRisk} clientes están en riesgo de abandono basado en patrones de compra.`,
    confidence: 78,
    impact: 'medium',
    recommendation: 'Implementa una campaña de reactivación con descuentos del 10-15% para clientes inactivos.',
    data: { inactiveCustomers, churnRisk, avgTicket, totalCustomers }
  };
};

// Expense optimization analysis
export const generateExpensePrediction = (): AIPrediction => {
  const transactions = getMockTransactions();
  const expenses = transactions.filter(t => t.type === 'expense');
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  
  // Simulate expense analysis
  const potentialSavings = Math.round(totalExpenses * 0.12); // 12% potential savings
  const inefficientCategories = ['Servicios', 'Suministros'];
  
  return {
    id: 'expense-prediction',
    type: 'expenses',
    title: 'Optimización de Gastos',
    description: `Análisis detecta oportunidades de ahorro de $${potentialSavings.toLocaleString()} mensuales optimizando gastos en ${inefficientCategories.join(' y ')}.`,
    confidence: 72,
    impact: 'medium',
    recommendation: 'Revisa contratos de servicios y negocia mejores tarifas. Considera proveedores alternativos para suministros.',
    data: { potentialSavings, totalExpenses, inefficientCategories }
  };
};

// Inventory optimization
export const generateInventoryPrediction = (): AIPrediction => {
  const products = getMockProducts();
  const lowStockProducts = products.filter(p => p.stock <= 5);
  const overStockProducts = products.filter(p => p.stock > 50);
  
  // Calculate inventory value tied up
  const overStockValue = overStockProducts.reduce((sum, p) => sum + (p.stock * p.cost), 0);
  const potentialReduction = Math.round(overStockValue * 0.3);
  
  return {
    id: 'inventory-prediction',
    type: 'inventory',
    title: 'Optimización de Inventario',
    description: `${overStockProducts.length} productos tienen exceso de inventario. Liberar $${potentialReduction.toLocaleString()} en capital de trabajo reduciendo stock excesivo.`,
    confidence: 88,
    impact: 'high',
    recommendation: 'Implementa promociones para productos con exceso de stock y ajusta los puntos de reorden.',
    data: { overStockProducts: overStockProducts.length, lowStockProducts: lowStockProducts.length, potentialReduction }
  };
};

// Generate all predictions
export const generateAllPredictions = (): AIPrediction[] => {
  return [
    generateSalesPrediction(),
    generateCustomerPrediction(),
    generateExpensePrediction(),
    generateInventoryPrediction()
  ];
};

// Get prediction by type
export const getPredictionByType = (type: string): AIPrediction | null => {
  const predictions = generateAllPredictions();
  return predictions.find(p => p.type === type) || null;
};
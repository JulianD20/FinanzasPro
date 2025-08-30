// Mock data for demonstration purposes

// Dashboard data
export const getMockTransactions = () => [
  {
    id: '1',
    date: '25 Jun 2025',
    description: 'Venta #12458',
    amount: 1250.00,
    type: 'income'
  },
  {
    id: '2',
    date: '24 Jun 2025',
    description: 'Compra de inventario',
    amount: 850.75,
    type: 'expense'
  },
  {
    id: '3',
    date: '23 Jun 2025',
    description: 'Pago de servicios',
    amount: 215.50,
    type: 'expense'
  },
  {
    id: '4',
    date: '22 Jun 2025',
    description: 'Venta #12457',
    amount: 785.25,
    type: 'income'
  },
  {
    id: '5',
    date: '21 Jun 2025',
    description: 'Venta #12456',
    amount: 1575.00,
    type: 'income'
  }
];

export const getMockInventoryItems = () => [
  {
    id: '1',
    name: 'Laptop HP Elite',
    stock: 3,
    minStock: 5,
    unit: 'unidades'
  },
  {
    id: '2',
    name: 'Monitor Dell 27"',
    stock: 2,
    minStock: 5,
    unit: 'unidades'
  },
  {
    id: '3',
    name: 'Teclado Mecánico RGB',
    stock: 4,
    minStock: 10,
    unit: 'unidades'
  },
  {
    id: '4',
    name: 'Mouse Inalámbrico',
    stock: 8,
    minStock: 15,
    unit: 'unidades'
  }
];

export const getMockSalesData = () => [
  { month: 'Ene', sales: 12000 },
  { month: 'Feb', sales: 14500 },
  { month: 'Mar', sales: 18000 },
  { month: 'Abr', sales: 15500 },
  { month: 'May', sales: 16800 },
  { month: 'Jun', sales: 22000 }
];

// Inventory data
export const getMockProducts = () => [
  {
    id: '1',
    code: 'PROD-001',
    name: 'Laptop HP Elite',
    category: 'Electrónica',
    stock: 3,
    price: 1299.99,
    cost: 950.00
  },
  {
    id: '2',
    code: 'PROD-002',
    name: 'Monitor Dell 27"',
    category: 'Electrónica',
    stock: 2,
    price: 349.99,
    cost: 240.00
  },
  {
    id: '3',
    code: 'PROD-003',
    name: 'Teclado Mecánico RGB',
    category: 'Accesorios',
    stock: 4,
    price: 129.99,
    cost: 85.00
  },
  {
    id: '4',
    code: 'PROD-004',
    name: 'Mouse Inalámbrico',
    category: 'Accesorios',
    stock: 8,
    price: 49.99,
    cost: 28.00
  },
  {
    id: '5',
    code: 'PROD-005',
    name: 'Silla de Oficina Ergonómica',
    category: 'Mobiliario',
    stock: 12,
    price: 299.99,
    cost: 185.00
  },
  {
    id: '6',
    code: 'PROD-006',
    name: 'Escritorio Ajustable',
    category: 'Mobiliario',
    stock: 7,
    price: 499.99,
    cost: 320.00
  },
  {
    id: '7',
    code: 'PROD-007',
    name: 'Impresora Multifuncional',
    category: 'Electrónica',
    stock: 5,
    price: 399.99,
    cost: 250.00
  }
];

// Sales data
export const getMockSales = () => [
  {
    id: '1',
    invoice: '12458',
    date: '25 Jun 2025',
    customer: 'TechSolutions Inc.',
    status: 'Pagada',
    total: 1250.00
  },
  {
    id: '2',
    invoice: '12457',
    date: '22 Jun 2025',
    customer: 'Design Studio Pro',
    status: 'Pagada',
    total: 785.25
  },
  {
    id: '3',
    invoice: '12456',
    date: '21 Jun 2025',
    customer: 'Retail Connect',
    status: 'Pagada',
    total: 1575.00
  },
  {
    id: '4',
    invoice: '12455',
    date: '18 Jun 2025',
    customer: 'Global Supplies Ltd.',
    status: 'Pendiente',
    total: 925.50
  },
  {
    id: '5',
    invoice: '12454',
    date: '15 Jun 2025',
    customer: 'Office Solutions',
    status: 'Pagada',
    total: 2150.75
  },
  {
    id: '6',
    invoice: '12453',
    date: '12 Jun 2025',
    customer: 'Creative Labs',
    status: 'Vencida',
    total: 450.00
  }
];
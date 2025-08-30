import { useState } from 'react';
import { 
  BarChart3,
  PieChart,
  TrendingUp,
  Download,
  Search,
  Filter,
  FileText,
  Calendar,
  X
} from 'lucide-react';
import StatsCard from '../components/common/StatsCard';
import toast from 'react-hot-toast';

interface Report {
  id: string;
  name: string;
  type: 'Ventas' | 'Inventario' | 'Financiero' | 'Clientes';
  date: string;
  size: string;
  status: 'Generado' | 'En Proceso' | 'Error';
  downloads: number;
}

const Reports = () => {
  const [reports, setReports] = useState<Report[]>([
    {
      id: '1',
      name: 'Reporte de Ventas Mensual',
      type: 'Ventas',
      date: '2025-03-15',
      size: '2.5 MB',
      status: 'Generado',
      downloads: 12
    },
    {
      id: '2',
      name: 'Inventario Actual',
      type: 'Inventario',
      date: '2025-03-14',
      size: '1.8 MB',
      status: 'Generado',
      downloads: 8
    },
    {
      id: '3',
      name: 'Balance General',
      type: 'Financiero',
      date: '2025-03-13',
      size: '3.2 MB',
      status: 'Generado',
      downloads: 15
    },
    // Add more mock data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    dateFrom: '',
    dateTo: ''
  });

  const handleDownload = (report: Report) => {
    toast.success(`Descargando ${report.name}...`);
    // Download logic here
  };

  const handleGenerateReport = () => {
    toast.success('Generando nuevo reporte...');
    // Report generation logic here
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = 
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = !filters.type || report.type === filters.type;
    const matchesDateFrom = !filters.dateFrom || report.date >= filters.dateFrom;
    const matchesDateTo = !filters.dateTo || report.date <= filters.dateTo;
    
    return matchesSearch && matchesType && matchesDateFrom && matchesDateTo;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Reportes</h1>
        <p className="text-gray-500">Análisis y reportes del negocio</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Reportes Generados"
          value="24"
          subtitle="Este mes"
          icon={<BarChart3 size={20} />}
        />
        <StatsCard 
          title="Análisis Completados"
          value="8"
          icon={<PieChart size={20} />}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
        <StatsCard 
          title="Predicciones"
          value="12"
          icon={<TrendingUp size={20} />}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatsCard 
          title="Descargas"
          value="45"
          icon={<Download size={20} />}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
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
                placeholder="Buscar reportes..."
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
                onClick={handleGenerateReport}
                className="flex items-center px-3 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <FileText size={16} className="mr-1" />
                <span>Generar Reporte</span>
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo
                  </label>
                  <select
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={filters.type}
                    onChange={(e) => setFilters({...filters, type: e.target.value})}
                  >
                    <option value="">Todos</option>
                    <option value="Ventas">Ventas</option>
                    <option value="Inventario">Inventario</option>
                    <option value="Financiero">Financiero</option>
                    <option value="Clientes">Clientes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha Desde
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={filters.dateFrom}
                    onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha Hasta
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={filters.dateTo}
                    onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
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
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tamaño
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descargas
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText size={20} className="text-gray-400 mr-2" />
                      <div className="text-sm font-medium text-gray-900">{report.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      report.status === 'Generado' ? 'bg-green-100 text-green-800' :
                      report.status === 'En Proceso' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.downloads}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDownload(report)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
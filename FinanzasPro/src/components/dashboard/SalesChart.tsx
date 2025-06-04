interface SalesData {
  month: string;
  sales: number;
}

interface SalesChartProps {
  data: SalesData[];
}

const SalesChart = ({ data }: SalesChartProps) => {
  const maxSales = Math.max(...data.map(item => item.sales));
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Ventas Mensuales</h2>
        <div className="flex space-x-2">
          <button className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
            Este Año
          </button>
          <button className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            Año Anterior
          </button>
        </div>
      </div>
      
      <div className="flex items-end h-48 mt-4 space-x-4 px-4">
        {data.map((item, index) => {
          const heightPercentage = (item.sales / maxSales) * 100;
          
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                style={{ height: `${heightPercentage}%` }}
                className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-all duration-200 cursor-pointer group relative"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  ${item.sales.toLocaleString()}
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2 w-full text-center">
                {item.month}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesChart
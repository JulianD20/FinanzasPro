import { ReactNode } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  change?: number;
  changeLabel?: string;
  colorClass: string;
}

const MetricCard = ({ 
  title, 
  value, 
  icon, 
  change, 
  changeLabel,
  colorClass 
}: MetricCardProps) => {
  const isPositive = change && change > 0;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${colorClass}`}>
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-xl font-bold mt-1">{value}</h3>
        </div>
      </div>
      
      {(change !== undefined) && (
        <div className="mt-3 flex items-center text-sm">
          <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="ml-1 font-medium">{Math.abs(change)}%</span>
          </div>
          <span className="ml-2 text-gray-500">{changeLabel || 'desde el mes pasado'}</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
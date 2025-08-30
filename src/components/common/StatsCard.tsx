import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  iconBgColor?: string;
  iconColor?: string;
  onClick?: () => void;
}

const StatsCard = ({
  title,
  value,
  subtitle,
  icon,
  bgColor = 'bg-white',
  textColor = 'text-gray-800',
  iconBgColor = 'bg-blue-100',
  iconColor = 'text-blue-600',
  onClick
}: StatsCardProps) => {
  return (
    <div 
      className={`${bgColor} rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow duration-200 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className={`mt-2 text-2xl font-semibold ${textColor}`}>{value}</p>
          {subtitle && <p className="mt-1 text-xs text-gray-500">{subtitle}</p>}
        </div>
        
        {icon && (
          <div className={`${iconBgColor} p-2 rounded-lg ${iconColor}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
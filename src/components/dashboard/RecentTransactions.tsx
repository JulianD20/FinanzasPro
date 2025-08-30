import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Transacciones Recientes</h2>
        <button 
          onClick={() => navigate('/app/accounting')}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Ver todas las transacciones
        </button>
      </div>
      
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
          >
            <div className="flex items-center">
              <div className={`
                p-2 rounded-full mr-3
                ${transaction.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
              `}>
                {transaction.type === 'income' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              </div>
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className={`font-semibold ${
              transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.type === 'income' ? '+' : '-'}
              ${Math.abs(transaction.amount).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
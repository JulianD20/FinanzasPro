import { useState } from 'react';
import { X, TrendingUp, Users, DollarSign, Package, Brain, Target, Lightbulb } from 'lucide-react';
import { AIPrediction } from '../../utils/aiPredictions';

interface AIPredictionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  prediction: AIPrediction;
}

const AIPredictionsModal = ({ isOpen, onClose, prediction }: AIPredictionsModalProps) => {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (prediction.type) {
      case 'sales':
        return <TrendingUp size={24} className="text-blue-600" />;
      case 'customers':
        return <Users size={24} className="text-green-600" />;
      case 'expenses':
        return <DollarSign size={24} className="text-amber-600" />;
      case 'inventory':
        return <Package size={24} className="text-purple-600" />;
      default:
        return <Brain size={24} className="text-gray-600" />;
    }
  };

  const getImpactColor = () => {
    switch (prediction.impact) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-amber-600 bg-amber-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getConfidenceColor = () => {
    if (prediction.confidence >= 80) return 'text-green-600';
    if (prediction.confidence >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            {getIcon()}
            <div>
              <h2 className="text-xl font-bold text-gray-900">{prediction.title}</h2>
              <p className="text-sm text-gray-500">Análisis predictivo con IA</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Confidence and Impact */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${getConfidenceColor()}`}>
                  {prediction.confidence}%
                </div>
                <div className="text-xs text-gray-500">Confianza</div>
              </div>
              <div className="text-center">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor()}`}>
                  {prediction.impact === 'high' ? 'Alto' : 
                   prediction.impact === 'medium' ? 'Medio' : 'Bajo'} Impacto
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-blue-600">
              <Brain size={16} />
              <span className="text-sm font-medium">IA Predictiva</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Target size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Análisis</h3>
                <p className="text-gray-700 leading-relaxed">{prediction.description}</p>
              </div>
            </div>
          </div>

          {/* Data Insights */}
          {prediction.data && (
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingUp size={18} className="mr-2 text-blue-600" />
                Datos Clave
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(prediction.data).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {typeof value === 'number' ? value.toLocaleString() : value}
                    </div>
                    <div className="text-xs text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendation */}
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Lightbulb size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Recomendación</h3>
                <p className="text-gray-700 leading-relaxed">{prediction.recommendation}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                // Here you could implement action based on prediction type
                onClose();
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Aplicar Recomendación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPredictionsModal;
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';

interface NotificationProps {
  show: boolean;
  title: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
}

const Notification = ({ show, title, message, type = 'info', onClose }: NotificationProps) => {
  const bgColors = {
    success: 'bg-green-50 border-green-100',
    error: 'bg-red-50 border-red-100',
    warning: 'bg-amber-50 border-amber-100',
    info: 'bg-blue-50 border-blue-100'
  };

  const textColors = {
    success: 'text-green-800',
    error: 'text-red-800',
    warning: 'text-amber-800',
    info: 'text-blue-800'
  };

  const iconColors = {
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-amber-400',
    info: 'text-blue-400'
  };

  return (
    <Transition
      show={show}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`rounded-lg shadow-lg border p-4 ${bgColors[type]}`}>
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className={`text-sm font-medium ${textColors[type]}`}>
              {title}
            </h3>
            <p className={`mt-1 text-sm ${textColors[type]} opacity-90`}>
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className={`ml-4 ${iconColors[type]} hover:${textColors[type]} transition-colors`}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default Notification;
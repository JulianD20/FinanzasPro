import { useEffect, useState } from 'react';
import Joyride, { Step, CallBackProps, STATUS } from 'react-joyride';
import { useNavigate } from 'react-router-dom';

const steps: Step[] = [
  {
    target: 'body',
    content: '¡Bienvenido a FinanzasPro! Te guiaremos a través de las principales características del sistema.',
    placement: 'center',
    disableBeacon: true
  },
  {
    target: '.dashboard-stats',
    content: 'Aquí encontrarás un resumen de las métricas más importantes de tu negocio.',
    placement: 'bottom'
  },
  {
    target: '.sales-chart',
    content: 'Visualiza tus ventas mensuales y tendencias con gráficos interactivos.',
    placement: 'top'
  },
  {
    target: '.inventory-alerts',
    content: 'Mantente al tanto de tu inventario con alertas automáticas cuando el stock esté bajo.',
    placement: 'left'
  },
  {
    target: '.recent-transactions',
    content: 'Revisa tus transacciones más recientes y mantén un control de tus movimientos.',
    placement: 'right'
  },
  {
    target: '.search-bar',
    content: 'Utiliza la barra de búsqueda para encontrar rápidamente cualquier función o sección del sistema.',
    placement: 'bottom'
  },
  {
    target: '.notifications-bell',
    content: 'Recibe notificaciones importantes sobre tu negocio en tiempo real.',
    placement: 'bottom'
  },
  {
    target: '.sidebar-nav',
    content: 'Accede a todas las funciones del sistema desde el menú lateral.',
    placement: 'right'
  }
];

interface GuidedTourProps {
  isOpen: boolean;
  onClose: () => void;
}

const GuidedTour = ({ isOpen, onClose }: GuidedTourProps) => {
  const navigate = useNavigate();
  const [run, setRun] = useState(false);

  useEffect(() => {
    setRun(isOpen);
  }, [isOpen]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun(false);
      onClose();
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          primaryColor: '#2563eb',
          zIndex: 10000,
        },
        tooltipContainer: {
          textAlign: 'left',
        },
        buttonNext: {
          backgroundColor: '#2563eb',
        },
        buttonBack: {
          marginRight: 10,
        }
      }}
      locale={{
        back: 'Anterior',
        close: 'Cerrar',
        last: 'Finalizar',
        next: 'Siguiente',
        skip: 'Saltar'
      }}
    />
  );
};

export default GuidedTour;
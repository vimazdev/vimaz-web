import React, { useEffect, useState } from 'react';
import { useLoadingStore } from '@store/main.js';
import './load.scss';

const Loader = () => {
  const { load } = useLoadingStore();
  const [isVisible, setIsVisible] = useState(true); // Estado local para manejar la visibilidad del componente

  useEffect(() => {
    if (load) {
      // Espera 3 segundos antes de iniciar la transición de desvanecimiento
      const timeout = setTimeout(() => {
        const loader = document.querySelector('.card-load');
        loader && loader.addEventListener('transitionend', () => setIsVisible(false));
        loader && loader.classList.add('loading-out'); // Agrega la clase para iniciar la transición
      }, 3000);

      return () => clearTimeout(timeout); // Limpia el timeout en caso de desmontaje
    }
  }, [load]);

  if (!isVisible) return null; // Remueve el componente después de la transición

  return (
    <div className="card-load">
      <span className="load"></span>
      <span className="loader"></span>
    </div>
  );
};

export default Loader;

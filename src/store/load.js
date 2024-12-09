import { create } from 'zustand';

// Asegúrate de que "loading" en localStorage tenga un valor inicial "false" si no está definido
if (localStorage.getItem('loading') != true) {
  localStorage.setItem('loading', true);
}

// Creación del store de Zustand
export const useLoadingStore = create((set) => ({
  load: JSON.parse(localStorage.getItem('loading')), // Lee el estado inicial de localStorage
  
  // Método para actualizar el estado y localStorage
  setLoad: (newValue) => {
    set({ load: newValue }); // Actualiza el estado en el store
    localStorage.setItem('loading', JSON.stringify(newValue)); // Sincroniza con localStorage
  },
}));

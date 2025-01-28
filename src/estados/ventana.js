// store.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useVentana = create(
    persist(
        (set) => ({
            ventana: 0, // Valor inicial (equivalente a let isPlaying = false)

            // Acción para cambiar el estado
            togglevetana: (num) => set((state) => ({ isPlaying: num })),

            // Acción para resetear (opcional)
            reset: () => set({ isPlaying: 0 }),
        }),
        {
            name: "ventana", // Clave única para localStorage
            getStorage: () => localStorage, // Almacenamiento persistente
        }
    )
);

export default useVentana;
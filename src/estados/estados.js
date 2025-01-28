// Agrega un nuevo estado para controlar la música inicial
import {create} from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    ventana: 1,
    initialPlay: true, // Nuevo estado
    setVentana: (ventana) => set({ ventana }),
    togglePlayPause: () => set((state) => ({ isPlaying: !state.isPlaying })),
    setInitialPlay: (value) => set({ initialPlay: value }) // Nuevo setter
}));

export default usePlayerStore;
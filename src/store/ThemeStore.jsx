/* fichero creado para los temas claro o oscuro importante instalar la libreria 'npm i zustand' */

import { create } from 'zustand'
import { Dark, Light } from '../styles/theme'
export const useThemeStore = create((set, get) => ({
    theme: "light",
    themeStyle: Light,
    setTheme: () => {
        const { theme } = get();
        set({ theme: theme === "light" ? "dark" : "light" })
        set({ themeStyle: theme === "light" ? Dark : Light })
    }
}))
// import { createContext, useContext, useReducer } from "react"

// const DarkThemeContext = createContext(true)

// function darkThemeReducer(darkTheme, action){
//     switch (action)
// }

// export function DarkThemeProvider({ children }) {
//   const initialDarkTheme = window.matchMedia(
//     "(prefers-color-scheme: dark)",
//   ).matches
//   const [darkTheme, dispatch] = useReducer(darkThemeReducer, initialDarkTheme)

//   return (
//     <DarkThemeContext.Provider value={darkTheme}>
//       {...children}
//     </DarkThemeContext.Provider>
//   )
// }

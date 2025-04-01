import NavBar from './components/NavBar.jsx'
import Main from './components/Main.jsx'
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

const App = () => {
    const [theme, setTheme] = useState("light")
    const style =
        theme === "light" ?
            { backgroundColor: "white", color: "black" } :
            { backgroundColor: "black", color: "white" }

    return (
        <ThemeContext.Provider value={{ theme, style, setTheme }}>
            <NavBar />
            <Main />
        </ThemeContext.Provider>
    )
}

export default App

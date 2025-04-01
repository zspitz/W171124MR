import { useContext } from "react"
import { ThemeContext } from "../App.jsx"

const ThemeSelector = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <select value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    )
}

export default ThemeSelector
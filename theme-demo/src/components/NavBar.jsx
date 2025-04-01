import { useContext } from "react"
import ThemeSelector from "./ThemeSelector"
import { ThemeContext } from "../App.jsx"

const NavBar = () => {
    const { style } = useContext(ThemeContext)
    return (
        <nav style={style}>
            <ThemeSelector />
        </nav>
    )
}

export default NavBar
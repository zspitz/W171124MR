import { useContext } from "react"
import { ThemeContext } from "../App.jsx"

const TextContainer = () => {
    const { style } = useContext(ThemeContext)
    return (
        <p style={style}>Hello world</p>
    )
}

export default TextContainer
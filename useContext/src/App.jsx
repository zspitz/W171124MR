import { createContext, useState } from "react"
import Component1 from "./components/Component1"

export const LangContext = createContext()

const App = () => {
    const [lang, setLang] = useState('en')

    return (
        <>
            <LangContext.Provider value={{ lang, setLang }}>
                <select onChange={e => setLang(e.target.value)}>
                    <option value="en">English</option>
                    <option value="he">Hebrew</option>
                </select>
                <p>{lang === "en" ? "Hello world" : "שלום עולם"}</p>
                <Component1 />
            </LangContext.Provider>
        </>
    )
}

export default App

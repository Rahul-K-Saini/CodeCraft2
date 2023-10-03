import { Outlet } from "react-router"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { ContextProvider } from "./context/theme"
import { useState,useEffect } from "react"

function App() {
    const [theme, setTheme] = useState('light')

    const darkMode = () => {
        setTheme('dark');
    }

    const lightMode = () => {
        setTheme('light');
    }

    useEffect(() => {
        let html = document.querySelector('html');
        html.classList.remove("light", "dark")
        html.classList.add(theme)
    }, [theme])

    return (
        <>
            <ContextProvider value={{ theme, darkMode, lightMode }}>
                <Header />
                <Outlet />
                <Footer />
            </ContextProvider>
        </>
    )
}

export default App
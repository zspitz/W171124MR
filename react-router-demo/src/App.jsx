import { Outlet, Link, NavLink } from "react-router"

const App = () => {
    const styleBuilder = ({ isActive }) => {
        return {
            fontFamily: isActive ? "Arial Black" : "Comic Sans MS",
        }
    }

    return (
        <>
            <nav style={{ display: "flex", gap: "1rem" }}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/customers">Customers</Link>
                <NavLink style={styleBuilder} to="/">Home</NavLink>
                <NavLink style={styleBuilder} to="/products">Products</NavLink>
                <NavLink style={styleBuilder} to="/customers">Customers</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default App
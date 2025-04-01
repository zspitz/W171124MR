import { createBrowserRouter, createRoutesFromElements, Route } from "react-router"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import ProductView from "./pages/ProductView";
import App from "./App";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="products">
                    <Route index element={<Products />} />
                    <Route path=":id" element={<ProductView />} />
                </Route>
                <Route path="customers" element={<Customers />} />
            </Route>
        </>
    )
)
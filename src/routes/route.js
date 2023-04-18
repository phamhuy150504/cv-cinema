import Layout from "../layouts/Layout";
import Banner from "../pages/Home/Banner/Banner";
import Home from "../pages/Home/Home";

export const routes = [
    {
        url: '/',
        component: <Layout Component={Home} />
    }
]
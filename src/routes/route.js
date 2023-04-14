import Layout from "../layouts/Layout";
import Banner from "../pages/Home/Banner";

export const routes = [
    {
        url: '/',
        component: <Layout Component={Banner} />
    }
]
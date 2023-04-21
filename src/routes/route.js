import Layout from "../layouts/Layout";
import Banner from "../pages/Home/Banner/Banner";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register.js";

export const routes = [
    {
        url: '/',
        component: <Layout Component={Home} />
    },
    {
        url: '/login',
        component: <Login /> 
    },
    {
        url: '/register',
        component: <Register /> 
    }
]
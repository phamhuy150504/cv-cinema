import Layout from "../layouts/Layout";
import Booking from "../pages/Booking/Booking";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
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
    },
    {
        url: '/detail/:id',
        component: <Layout Component={Detail} /> 
    },
    {
        url: '/booking/:id',
        component: <Layout Component={Booking} /> 
    },
    {
        url: '*',
        component: <Layout Component={NotFound} /> 
    }
]
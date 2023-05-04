import AdminLayout from "../layouts/AdminLayout";
import Layout from "../layouts/Layout";
import Booking from "../pages/Booking/Booking";
import Detail from "../pages/Detail/Detail";
import HistoryBooking from "../pages/HistoryBooking/HistoryBooking";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/register/Register.js";
import AdminMovie from "../pages/AdminMovie/AdminMovie";
import AddNewMovie from "../pages/AdminMovie/AddNewMovie/AddNewMovie";

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
        url: '/history',
        component: <HistoryBooking /> 
    },
    {
        url: '*',
        component: <Layout Component={NotFound} /> 
    },
    {
        url: '/admin',
        component: <AdminLayout Component={AdminMovie} /> 
    },
    {
        url: '/admin/add-movie',
        component: <AdminLayout Component={AddNewMovie} /> 
    },
]
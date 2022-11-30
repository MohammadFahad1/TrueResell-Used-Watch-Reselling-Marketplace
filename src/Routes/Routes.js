import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../Layout/DashboardMain";
import Main from "../Layout/Main";
import AddAProduct from "../Pages/AddAProduct/AddAProduct";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Products from "../Pages/Products/Products";
import Registration from "../Pages/Registration/Registration";
import MyOrders from "../Pages/Shared/Dashboard/MyOrders/MyOrders";
import Payment from "../Pages/Shared/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Registration></Registration>
            },
            {
                path: '/category/:id', element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '*', element: <NotFound></NotFound>
            },
            {
                path: '/dashboard', element: <PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>, children: [
                    {
                        path: '/dashboard/my-orders', element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
                    },
                    {
                        path: '/dashboard/payment/:id', element: <BuyerRoute><Payment></Payment></BuyerRoute>
                    },
                    {
                        path: '/dashboard/my-Products', element: <SellerRoute><h1>My Products</h1></SellerRoute>
                    },
                    {
                        path: '/dashboard/my-buyers', element: <SellerRoute><h1>My Buyers</h1></SellerRoute>
                    },
                    {
                        path: '/dashboard/add-a-product', element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>
                    },
                    {
                        path: '/dashboard/all-buyers', element: <AdminRoute><h1>All Buyers</h1></AdminRoute>
                    },
                    {
                        path: '/dashboard/all-sellers', element: <AdminRoute><h1>All Sellers</h1></AdminRoute>
                    },
                    {
                        path: '/dashboard/reported-items', element: <AdminRoute><h1>Reported Items</h1></AdminRoute>
                    }
                ]
            }
        ]
    }
])

export default router;
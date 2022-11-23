import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Registration from "../Pages/Registration/Registration";

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
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '*', element: <NotFound></NotFound>
            }
        ]
    }
])

export default router;
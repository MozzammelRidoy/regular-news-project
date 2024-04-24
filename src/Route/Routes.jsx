import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRouter from "./PrivateRouter";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element : <Home></Home>,
                loader : () => fetch('/data/news.json')
            }, 
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            }, 
            {
                path: '/news/:_id',
                element: <PrivateRouter><News></News></PrivateRouter>
            }
        ]

    }
])

export default routes; 
import "./App.css";
import Home from "./Pages/home";
import {useRoutes} from "react-router-dom";
import UserLogin from "./Pages/Login/user-login";
import UserRegister from "./Pages/Register/user-register";
import Error from "./Pages/Error";
import ViewWeather from "./Pages/Update/view-weather";
import AddWeather from "./Pages/Update/add-weather";

const App = () => {
    return useRoutes([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/login",
            element: <UserLogin/>,
        },
        {
            path: "/register",
            element: <UserRegister/>,
        },
        {
            path: "/add-weather",
            element: <AddWeather/>,
        },
        {
            path: "/view-weather",
            element: <ViewWeather/>,
        },
        {
            path: "/*",
            element: <Error/>,
        },
    ]);
};

export default App;

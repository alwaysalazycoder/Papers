import AdminLogin from './views/auth/AdminLogin';
import SignUp from "./views/auth/SignUp";
import Login from "./views/auth/Login";
import AdminSignUp from './views/auth/AdminSignUp';


export const route = [
    {
        layout: "auth",
        name: "Login",
        path: "/login",
        access: "public",
        fullPath: "/auth/login",
        icon: "",
        component: <Login />
    },

    {
        layout: "auth",
        name: "SignUp",
        path: "/sign-up",
        fullPath: "/auth/sign-up",
        icon: "",
        component: <SignUp />
    },
    {
        layout: "auth",
        name: "Admin Login",
        path: "/login-admin",
        fullPath: "/auth/login-admin",
        icon: "",
        component: <AdminLogin />
    },
    {
        layout: "auth",
        name: "Admin SignIn",
        path: "/sign-in-admin",
        fullPath: "/auth/sign-in-admin",
        icon: "",
        component: <AdminSignUp />
    },
]
import React, {Suspense, lazy} from "react";
import {Navigate, useRoutes, useLocation} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";

import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
    const {pathname} = useLocation();

    return (
        <Suspense fallback={<LoadingScreen/>}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: "auth",
            children: [
                {
                    path: "login",
                    element: (
                        <GuestGuard>
                            <Login/>
                        </GuestGuard>
                    ),
                },
            ],
        },

        // Dashboard Routes
        // {
        //   path: "dashboard",
        //   element: (
        //     <AuthGuard>
        //       <DashboardLayout />
        //     </AuthGuard>
        //   ),
        //   children: [
        //     { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        //     { path: "app", element: <GeneralApp /> },
        //     { path: "ecommerce", element: <GeneralEcommerce /> },
        //     { path: "analytics", element: <GeneralAnalytics /> },
        //     { path: "banking", element: <GeneralBanking /> },
        //     { path: "booking", element: <GeneralBooking /> },
        //   ],
        // },
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {element: <BlogMain/>, index: true},
                {path: "main", element: <BlogMain/>},
                {path: "articles", element: <BlogArticleList/>},
                {path: "article/:id", element: <BlogArticleDetail/>},
            ],
        },
    ]);
}

const Login = Loadable(lazy(() => import("../views/auth/Login")));
const BlogMain = Loadable(lazy(() => import("../views/blog/Main")));
const BlogArticleList = Loadable(
    lazy(() => import("../views/blog/ArticleList"))
);
const BlogArticleDetail = Loadable(
    lazy(() => import("../views/blog/ArticleDetail"))
);

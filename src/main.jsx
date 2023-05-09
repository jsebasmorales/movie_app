import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./views/Inicio";
import MovieDetail from "./views/MovieDetail";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicio />,
    },
    {
        path: "/movieDetail",
        element: <MovieDetail />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

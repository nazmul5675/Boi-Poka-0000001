import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Components/BookDetails/BookDetails";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('/booksData.json'),
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: "/bookDetails/:id",
                loader: () => fetch('/booksData.json'),
                Component: BookDetails
            }
        ]
    },
])

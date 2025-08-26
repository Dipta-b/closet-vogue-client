import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/pages/Home";
import SignIn from "../components/pages/SignIn";
import Register from "../components/pages/Register";
import SignInWithPhoneNumber from "../components/pages/signInWithPhoneNumber";
import AddNewProduct from "../components/pages/AddNewProduct";
import AllCloset from "../components/pages/AllCloset";
import ClosetDetailsPage from "../components/pages/ClosetDetailsPage";
import AdminPanel from "../components/pages/AdminPanel";
import UpdateRoute from "../components/pages/UpdateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signInByPhoneNumber",
        element: <SignInWithPhoneNumber></SignInWithPhoneNumber>,
      },
      {
        path: "addNewProduct",
        element: <AddNewProduct></AddNewProduct>,
      },
      {
        path: "allCloset",
        element: <AllCloset></AllCloset>,
        loader: () => fetch("http://localhost:5000/closets"),
      },
      {
        path: "allCloset/closets/:id",
        element: <ClosetDetailsPage></ClosetDetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/closets/${params.id}`),
      },
      {
        path: "adminPanel",
        element: <AdminPanel></AdminPanel>,
        loader: () => fetch("http://localhost:5000/closets"),
      },
      {
        path: "update/:id",
        element: <UpdateRoute></UpdateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/closets/${params.id}`),
      },
    ],
  },
]);

export default router;

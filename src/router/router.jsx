import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/pages/Home";
import SignIn from "../components/pages/SignIn";
import Register from "../components/pages/Register";
import SignInWithPhoneNumber from "../components/pages/signInWithPhoneNumber";

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
    ],
  },
]);

export default router;

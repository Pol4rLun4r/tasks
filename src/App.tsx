//config router
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

//public routes
import Login from "./routes/public/Login";
import Register from "./routes/public/Register";

// private routes
import Root from "./routes/private/Root";
import Tasks from "./routes/private/Tasks/Tasks";
import NewTask from "./routes/private/Tasks/NewTask";
import EditTasks from "./routes/private/Tasks/EditTasks";

// react query
import { QueryClientProvider } from "react-query";
import queryClient from "./services/queryClient";

import PrivateRoute from "./routes/others/PrivateRoute";
import PersistLogin from "./components/login-and-register/login/persistLogin/PersistLogin";


export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* public routes */}
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />

        {/* private routes*/}
        <Route element={<PersistLogin />} >
          <Route element={<PrivateRoute />} >
            <Route
              path="/"
              element={<Root />}
            >
              <Route
                index={true}
                element={<Tasks />}
              />
              <Route
                path="tasks"
                element={<Tasks />}
              />
              <Route
                path="newtask"
                element={<NewTask />}
              />
              <Route
                path="edittasks"
                element={<EditTasks />}
              />
            </Route>
          </Route>
        </Route>
      </>
    )
  )

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  )
}

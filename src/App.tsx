import "./App.css";
import HomePage from "src/pages/HomePage";
import ProjectsPage from "src/pages/ProjectsPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
            errorElement={<h1>error page</h1>}
          />

          <Route
            path="/projects"
            element={<ProjectsPage />}
            errorElement={<h1>error page</h1>}
          />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} />; */}
    </>
  );
};

export default Pages;

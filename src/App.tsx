import Header from "src/components/Header";
import "./App.css";
import { useState } from "react";
import HomePage from "src/pages/HomePage";
import ProjectsPage from "src/pages/ProjectsPage";
import Footer from "src/components/Footer";

function App() {
  const [route, setRoute] = useState("/");
  return (
    <div className="App">
      <Header setAppRoute={setRoute} />
      {route === "/" && <HomePage />}
      {route === "/projects" && <ProjectsPage />}
      <Footer />
    </div>
  );
}

export default App;

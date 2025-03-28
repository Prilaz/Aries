import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./First";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Layout/header";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <>
      <MyRoutes />
    </>
  );
}

export default App;

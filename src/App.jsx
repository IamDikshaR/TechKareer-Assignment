import { useState } from "react";
import Header from "./components/Header";
import Job from "./components/Job";
import Drawer from "./components/Drawer";
import About from "./components/About";
import Company from "./components/Company";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Job />
      <div className="flex justify-between ">
        <div className="w-full">
          {/* <Drawer /> */}
          <Dashboard />
          <About />
          <Company />
        </div>
        <div>
          <Drawer />
        </div>
      </div>
    </>
  );
}

export default App;

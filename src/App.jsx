import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SolidWorksWebsite from "./SolidWorksWebsite";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SolidWorksWebsite />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Layout" element={<Layout />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Layout/> */}
    </div>
  );
}

export default App;

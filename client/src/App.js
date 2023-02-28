import React from "react";
import { Route, Routes } from "react-router-dom";
// import Login from "./Login";
// import Register from "./Register";
import Layout from "./StudentDashboard/Layout"
import TraineeLogin from "./TraineeLogin";
import About from "./StudentDashboard/About";
import GoodBye from "./StudentDashboard/GoodBye";


function App() {
  // const [showLogin, setShowLogin] = useState(true);

  // const handleShowLogin = () => {
  //   setShowLogin((prevShowLogin) => !prevShowLogin);
  // };

  return (
    // <main className="App">
    //   <img src="/img/images.jpg" alt="cyf logo" className="img" />
    //   {showLogin ? <Login /> : <Register />}
    //   <button onClick={handleShowLogin}>
    //     {showLogin ? "Show Register" : "Show Login"}
    //   </button>
    // </main>
    <Routes>
      <Route path="/bye" element={<GoodBye />} />

      <Route path="/about" element={<About />} />

      <Route path="/" element={<TraineeLogin />} />
      <Route path="/Layout" element={<Layout />} />
    </Routes>
  );
}

export default App;

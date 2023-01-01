import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Student from "./Pages/Student";
import BusRoute from "./Pages/BusRoute";
import Driver from "./Pages/Driver";
import Vehicle from "./Pages/Vehicle";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="student/" index element={<Student />} />
        <Route path="route/" index element={<BusRoute />} />
        <Route path="driver/" index element={<Driver />} />
        <Route path="vehicle/" index element={<Vehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

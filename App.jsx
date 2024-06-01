import IndukMahasiswa from "./Induk-mahasiswa";
import Home from "./assets/Pages/Home";
import { Route, Routes } from "react-router-dom";
import State from "./assets/Pages/State";
import EventHandling from "./assets/Pages/Handling";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/IndukMahasiswa" element={<IndukMahasiswa />} />
      <Route path="/State" element={<State />} />
      <Route path="/Handling" element={<EventHandling/>} />
    </Routes>
   );
}

export default App;
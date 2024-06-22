import IndukMahasiswa from "./Induk-mahasiswa";
import Home from "./assets/Pages/Home";
import { Route, Routes } from "react-router-dom";
import State from "./assets/Pages/State";
import EventHandling from "./assets/Pages/Handling";
import UseEffect from "./assets/Pages/UseEffect";
import Animasi from "./assets/Pages/Timer";
import FetchApi from "./assets/Pages/Fetch";
import ReactContext from "./assets/Pages/ReactContext";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/IndukMahasiswa" element={<IndukMahasiswa />} />
      <Route path="/State" element={<State />} />
      <Route path="/Handling" element={<EventHandling/>} />
      <Route path="/UseEffect" element={<UseEffect/>} />
      <Route path="/Timer" element={<Animasi/>} />
      <Route path="/Fetch" element={<FetchApi/>} />
      <Route path="/ReactContext" element={<ReactContext/>} />
    </Routes>
   );
}

export default App;
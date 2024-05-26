import IndukMahasiswa from "./Induk-mahasiswa";
import Home from "./assets/Pages/Home";
import { Route, Routes } from "react-router-dom";
import State from "./assets/Pages/State";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/IndukMahasiswa" element={<IndukMahasiswa />} />
      <Route path="/State" element={<State />} />
    </Routes>
   );
}

export default App;
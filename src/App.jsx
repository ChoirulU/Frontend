import IndukMahasiswa from "./Induk-mahasiswa";
import Home from "./assets/Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/IndukMahasiswa" element={<IndukMahasiswa />} />
    </Routes>
   );
}

export default App;
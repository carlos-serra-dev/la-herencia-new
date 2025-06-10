import { BrowserRouter, Routes, Route } from "react-router";
import LandingLayout from "./layouts/landing-layout";
import Home from "./pages/home";
import ComprarEntradas from "./pages/comprar-entradas";

function App() {
  return (
    <BrowserRouter>
      <LandingLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comprar-entradas" element={<ComprarEntradas />} />
        </Routes>
      </LandingLayout>
    </BrowserRouter>
  );
}

export default App;

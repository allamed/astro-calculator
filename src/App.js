import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import Calculator from "./pages/calculator"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
      <BrowserRouter>
        <Routes>




          <Route index element={<Landing />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
  );
}

export default App;

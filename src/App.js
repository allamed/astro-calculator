import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import Error from "./pages/Error";
import Calculator from "./pages/calculator"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Result from "./components/result";

function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route index element={<Result />} />
          <Route path="calculator" element={<Calculator />} />
            <Route path="result" element={<Result />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
  );
}

export default App;

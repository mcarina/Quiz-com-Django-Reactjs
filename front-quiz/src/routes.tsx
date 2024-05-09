import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/quiz.tsx";
import Dash from "./pages/dashboard/index";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/dashboard" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
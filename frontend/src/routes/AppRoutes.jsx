import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<h1>Not Found</h1>} />
      <Route path="/about" element={<h1>Not Found</h1>} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

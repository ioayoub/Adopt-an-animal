import { Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound";
import AnimalDetails from "../pages/animals/AnimalDetails";
import AnimalList from "../pages/animals/AnimalList";
import Category from "../pages/categories/Category";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/animals" element={<AnimalList />} />
      <Route path="/animals/:id" element={<AnimalDetails />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

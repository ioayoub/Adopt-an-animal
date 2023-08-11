import { Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import NotFound from "../pages/NotFound";
import AnimalDetails from "../pages/animals/AnimalDetails";
import AnimalList from "../pages/animals/AnimalList";
import Category from "../pages/categories/Category";
import Dashboard from "../pages/admin/Dashboard";
import AnimalsCrud from "../pages/admin/AnimalsCrud";
import UsersCrud from "../pages/admin/UsersCrud";
import CategoriesCrud from "../pages/admin/CategoriesCrud";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/animals" element={<AnimalList />} />
      <Route path="/animals/:id" element={<AnimalDetails />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/admin" element={<Dashboard />}>
        <Route path="users" element={<UsersCrud />} />
        <Route path="animals" element={<AnimalsCrud />} />
        <Route path="categories" element={<CategoriesCrud />} />
        <Route path="favorites" element={<h1>Favorites</h1>} />
        <Route path="adoptions" element={<h1>Adoptions</h1>} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

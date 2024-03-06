import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="/NewDish" element={<NewDish />} />
      <Route path="/EditDish/:id" element={<EditDish />} />
    </Routes>
  );
}

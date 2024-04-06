import { Route, Routes } from "react-router-dom";
import { Employee } from "./Employee";

export const ManagementRoutes = () => {
  return (
    <Routes>
      <Route path="/employee" element={<Employee />} />
    </Routes>
  );
};
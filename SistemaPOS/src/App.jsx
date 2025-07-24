import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Information from "../src/Context/StoreContext.jsx";
import ProtectedRoute from "../src/RouteValidator.jsx";

const Inventario = lazy(() => import("./Container/MainComponents/Inventario.jsx"));
const LogIn = lazy(() => import("./Container/MainComponents/LogIn.jsx"));
 const EmpleadosPage = lazy(() => import("./Container/MainComponents/EmpleadosPage.jsx"));
const GestionTiempo = lazy(() => import("./Container/MainComponents/GestionTiempo.jsx"));
const SalesPage = lazy(() => import("./Container/MainComponents/SalesPage.jsx"));

function App() {
  return (
    <Information>
      <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter  basename="/Sistema-Heladeria">
          <Routes>
            {/* RUTA PÚBLICA */}
            <Route path="/" element={<LogIn />} />

            {/* RUTAS PROTEGIDAS */}
            <Route element={<ProtectedRoute />}>
               <Route path="/Empleados" element={<EmpleadosPage />} />
              <Route path="/Inventario" element={<Inventario />} />
              <Route path="/Gestión-Tiempo" element={<GestionTiempo />} />
              <Route path="/shopping" element={<SalesPage />} />
            </Route>

            {/* Ruta 404 opcional */}
            <Route path="*" element={<p>404 - Página no encontrada</p>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Information>
  );
}

export default App;

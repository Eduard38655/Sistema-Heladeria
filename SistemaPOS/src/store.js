import { configureStore } from '@reduxjs/toolkit'
import Dabase_Login from '../Redux/DatabaseSlice.js'
import EmpleadoSlice from "../Redux/EmpleadoSlice.js"
import InventarioSlice from "../Redux/InventarioSlice.js"

export default configureStore({
  reducer: {
empleadosinfo: Dabase_Login,
Empleados_DataBase: EmpleadoSlice,
Inventario: InventarioSlice
  }
})

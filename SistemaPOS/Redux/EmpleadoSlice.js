import { createSlice } from "@reduxjs/toolkit";
import Empleados from "../Backend/Empleados.js";

export const EmpleadoSlice = createSlice({
  name: "Empleados_DataBase",
  initialState: {
    Empleados_Details: Empleados ? Empleados : []
  },
  reducers: {
    Empleado_Main_Info: (state, action) => {
      state.Empleados_Details = action.payload;
    },
    Delete_Empleado: (state, action) => {
      const empleadoID = action.payload;
      state.Empleados_Details = state.Empleados_Details.filter(
        (empleado) => empleado.EmpleadoID !== empleadoID
      );
    },
    Update_Details: (state, action) => {
      // (Tu lógica de horarios si la necesitas)
    },
    DeleteEmp: (state, action) => {
      const empleadoID = action.payload;
      state.Empleados_Details = state.Empleados_Details.filter(
        (empleado) => empleado.EmpleadoID !== empleadoID
      );
    },
    UpdateMain: (state, action) => {
      const nuevo = action.payload;
      // ¿Ya existe?
      const idx = state.Empleados_Details.findIndex(
        (e) => e.EmpleadoID === nuevo.EmpleadoID
      );
      if (idx >= 0) {
        // Actualizar
        state.Empleados_Details[idx] = nuevo;
      } else {
        // Crear
        state.Empleados_Details.push(nuevo);
      }
    }
  }
});

export const {
  Empleado_Main_Info,
  Delete_Empleado,
  Update_Details,
  DeleteEmp,
  UpdateMain
} = EmpleadoSlice.actions;

export default EmpleadoSlice.reducer;

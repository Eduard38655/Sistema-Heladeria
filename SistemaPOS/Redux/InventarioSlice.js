import { createSlice } from "@reduxjs/toolkit";
import Data_Inventario from "../Backend/Inventario.js";

export const InventarioSlice = createSlice({
  name: "Inventario",
  initialState: {
    DataInventario: Data_Inventario,
  },
  reducers: {
    // Reemplaza toda la lista de inventario
    InventarioHandle: (state, action) => {
      state.DataInventario = action.payload;
    },
    // Elimina un ítem por su id
    DeleteItem: (state, action) => {
      const itemId = action.payload;
      state.DataInventario = state.DataInventario.filter(
        (item) => item.id !== itemId
      );
    },
    // Agrega un nuevo ítem con id único
    AddItem: (state, action) => {
      const newItem = action.payload;
      state.DataInventario.push({
        id: newItem.id,
        nombre: newItem.nombre,
        precio: newItem.precio,
        descripcion: newItem.descripcion,
        stock: newItem.stock,
        unidad: newItem.unidad,
        img: newItem.img,
        count: newItem.count ?? 0,
      });
    },
    // Actualiza un ítem existente
    updateItem: (state, action) => {
      const updated = action.payload;
      state.DataInventario = state.DataInventario.map((item) =>
        item.id === updated.id ? { ...item, ...updated } : item
      );
    },
  },
});

export const {
  InventarioHandle,
  DeleteItem,
  AddItem,
  updateItem,
} = InventarioSlice.actions;
export default InventarioSlice.reducer;

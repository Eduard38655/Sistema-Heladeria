import { createSlice } from '@reduxjs/toolkit';

export const DatabaseLogin = createSlice({
  name: 'empleadosinfo',
  initialState: {
    UserData: null
  },
  reducers: {
    EmpleadoInfo: (state, action) => {
      // Asigna directamente el usuario autenticado
      state.UserData = action.payload;
      console.log('UserData actualizado', state.UserData);
    }
  }
});

export const { EmpleadoInfo } = DatabaseLogin.actions;
export default DatabaseLogin.reducer;
  
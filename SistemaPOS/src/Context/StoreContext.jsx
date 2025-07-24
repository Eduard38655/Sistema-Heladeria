import { createContext, useState } from "react";

// 1. Crear el contexto
export const Information = createContext();

// 2. Crear el provider
function InformationProvider({ children  }) {
  const [isValid, SetisValid] = useState(false);
  const [EditSchedule, SetEditSchedule] = useState("");
const [ProductID,SetProductoID]= useState("");
  /*Show Inventory Dialog */
 const [isValidInv, SetisValidInv] = useState(false);
const [EditInventario, SetEditInventorio] = useState("");
 const [EmpleadoIDContext, SetEmpleadoIDContexto] = useState("");
 const [LogOut,SetLogout]= useState(false);

  return (
   <Information.Provider value={{ isValid, SetisValid,EditSchedule, SetEditSchedule,
    EditInventario, SetEditInventorio,
    isValidInv, SetisValidInv,
    ProductID,SetProductoID,
    EmpleadoIDContext, SetEmpleadoIDContexto,
    LogOut,SetLogout
   }}>
  {children }
</Information.Provider>
  );
}

export default InformationProvider;

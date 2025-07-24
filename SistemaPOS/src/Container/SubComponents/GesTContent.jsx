import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Empleados from "../../../Backend/Empleados.js";
import {
  Delete_Empleado,
  Empleado_Main_Info,
} from "../../../Redux/EmpleadoSlice.js";
import { Information } from "../../Context/StoreContext.jsx";
import Styles from "../../Styles/TimeContent.module.css";
 

function GesTContent() {
  const dispatch = useDispatch();

  const employee = useSelector((state) => state.empleadosinfo.UserData);
  const empleados = useSelector(
    (state) => state.Empleados_DataBase.Empleados_Details
  );

  const [search, setSearch] = useState("");
  const [Role, setRole] = useState("");
  const { isValid, SetisValid, EditSchedule, SetEditSchedule } =
    useContext(Information);

  // Carga inicial del slice (sólo la primera vez)
  // Puedes quitar este useEffect si tu slice ya se inicializa solo
  useState(() => {
    dispatch(Empleado_Main_Info(Empleados));
  }, [dispatch]);

  // Determina el rol actual (asumiendo que `employee` es [[{Role}]] )
  useState(() => {
    
   
     
       setRole(employee.Role);
       
    
    
     
  }, [employee]);

  // Lista filtrada en caliente
  const filtrados = empleados.filter((emp) => {
    if (!search) return true;
    const term = search.trim().toUpperCase();
    return (
      emp.Name.toUpperCase().startsWith(term) ||
      emp.Apellido.toUpperCase().startsWith(term)
    );
  });

  useEffect(()=>{
console.log(employee,empleados);

    
  },[employee,empleados])

  function DeleteSchedule(id) {
    dispatch(Delete_Empleado(id));

  }

 

  return (
    <div className={Styles.Container_Time}>
      <div className={Styles.SearchDiv}>
        <input
          type="text"
          value={search}
          placeholder="Buscar empleado..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <div>
          <h2>Horarios de Empleados</h2>
         

          {Role && Role=="owner" || Role=="Admin"  ? (<> 
<button onClick={(e)=>{SetisValid(true),SetEditSchedule("")} } > <i className="fa-solid fa-plus"></i> Agregar Horario</button>
</>) : <></>}
        </div>
      </div>

      <div className={Styles.Table_Container}>
        <table>
          <thead>
            <tr>
              <th>Empleado</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sábado</th>
              <th>Domingo</th>
               {Role && Role=="owner" || Role=="Admin"  ? 
            (<th>Acciones</th>) : <></>}
            
           

         
            </tr>
          </thead>
          <tbody>
            {filtrados.length > 0 ? (
              filtrados.map((emp) => (
                <tr key={emp.EmpleadoID}>
                  <td>{`${emp.Name} ${emp.Apellido}`}</td>

                  {emp.horario.map((h) => (
                    <td key={h.horarioID}>
                      {h.start } – {h.end }
                    </td>
                  ))}

                 

 
                  {Role && Role=="owner" || Role=="Admin"  ? 
                              (
                              
                              <td><div  className={Styles.DivAcctiones}>
                      <button onClick={(e)=>{ 
SetEditSchedule(`${emp.Name} ${emp.Apellido} - ${emp.Role}`,emp.EmpleadoID);SetisValid(true);
}}  ><i className="fa-solid fa-pen-to-square"></i></button>
                      <button onClick={(e)=>{ DeleteSchedule(emp.EmpleadoID)}} ><i className="fa-solid fa-trash"></i></button>
                          
                      </div></td>
                             ) : <></>}
                </tr>
              ))
            ) : (
              <tr>
                 <td colSpan={10} style={{ textAlign: "center", padding: 0 }}>
                No hay resultados
              </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GesTContent;

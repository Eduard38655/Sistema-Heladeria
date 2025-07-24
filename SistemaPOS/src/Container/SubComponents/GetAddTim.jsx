// src/components/YourPath/AddItems.jsx
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Update_Details } from "../../../Redux/EmpleadoSlice.js";
import { Information } from "../../Context/StoreContext.jsx";
import Styles from "../../Styles/Gestime.module.css";

export default function AddItems() {
 
  const dispatch = useDispatch();
  const empleados = useSelector(
    (state) => state.Empleados_DataBase.Empleados_Details
  );
  const { isValid, SetisValid } = useContext(Information);

  const [NombreEmpleado, setNombreEmpleado] = useState("");
  const [Horario, setHorario] = useState("");
  const [Start, setStart] = useState("");
  const [End, setEnd] = useState("");

  const handleClose = () => {
    SetisValid(false);
  };

  const handleGuardar = () => {
    if (!NombreEmpleado || !Horario || !Start || !End) {
      alert("Todos los campos son obligatorios");
      return;
    }

    dispatch(
      Update_Details({
        NombreEmpleado,
        Horario,
        Start,
        End
      })
    );

    // Cerrar el modal y resetear si quieres
    SetisValid(false);
  };

  if (!isValid) return null;

  return (
    <div className={Styles.DivAdd}>
      <div className={Styles.DivTime_Container}>
        <h2>Agregar / Editar Horario</h2>

        <div className={Styles.DivTime_Selects}>
          <label>Empleado</label>
          <select
            value={NombreEmpleado}
            onChange={(e) => setNombreEmpleado(e.target.value)}
          >
            <option value="">Seleccionar Empleado</option>
            {empleados.map((emp) => (
              <option key={emp.EmpleadoID} value={emp.EmpleadoID}>
                {emp.Name} {emp.Apellido} - {emp.Role}
              </option>
            ))}
          </select>

          <label>Día de la Semana</label>
          <select
            value={Horario}
            onChange={(e) => setHorario(e.target.value)}
          >
            <option value="">Seleccionar Día</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
        </div>

        <div className={Styles.DivTime_Inputs}>
          <div>
            <label>Hora de Inicio</label>
            <input
              type="time"
              value={Start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div>
            <label>Hora de Fin</label>
            <input
              type="time"
              value={End}
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
        </div>

        <div className={Styles.DivOpt}>
          <button onClick={handleClose}>Cerrar</button>
          <button onClick={handleGuardar}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateMain } from "../../../Redux/EmpleadoSlice.js";
import { Information } from "../../Context/StoreContext.jsx";
import Styles from "../../Styles/Empleados.module.css";

function EditEmpleado() {
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [role, setRole] = useState("Empleado");

  const { isValid, SetisValid, EmpleadoIDContext } = useContext(Information);

  const empleadosInfo = useSelector(
    (state) => state.Empleados_DataBase.Empleados_Details
  );

  useEffect(() => {
    const emp = empleadosInfo.find(
      (item) => item.EmpleadoID === EmpleadoIDContext
    );
    if (emp) {
      setNombre(emp.Name);
      setApellido(emp.Apellido);
      setUsername(emp.Username);
      setPassword(emp.Password);
      setImgUrl(emp.Img);
      setRole(emp.Role);
    } else {
      // Limpiar para nuevo
      setNombre("");
      setApellido("");
      setUsername("");
      setPassword("");
      setImgUrl("");
      setRole("Empleado");
    }
  }, [EmpleadoIDContext, empleadosInfo]);

  function HandleSave() {
    const nuevoEmpleado = {
      EmpleadoID: EmpleadoIDContext || Date.now(), // genera ID si es nuevo
      Name: nombre,
      Apellido: apellido,
      Username: username,
      Password: password,
      Img: imgUrl,
      Role: role,
      Phone: "000-000-0000",
      Estado: "Activo",
      horario: [
      { horarioID: 1, dia: "Lunes", start: "OFF", end: "OFF" },
      { horarioID: 2, dia: "Martes", start: "OFF", end: "OFF" },
      { horarioID: 4, dia: "Jueves", start: "OFF", end: "OFF" },
      { horarioID: 5, dia: "Viernes", start: "OFF", end: "OFF" },
      { horarioID: 6, dia: "Sábado", start: "OFF", end: "OFF" },
      { horarioID: 7, dia: "Domingo", start: "OFF", end: "OFF" }, // día libre o cerrado
    ]
      // agrega aquí más campos si tu backend los necesita
    };

    dispatch(UpdateMain(nuevoEmpleado));
    SetisValid(false);
  }

  return (
    <>
      {isValid && (
        <div className={Styles.EditContainer}>
          <div className={Styles.DivCard}>
            <h2>Agregar / Editar empleado</h2>

            <div className={Styles.DivInfo}>
              <div className={Styles.DivFull_Name}>
                <div>
                  <label>Nombre</label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div>
                  <label>Apellido</label>
                  <input
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>
              </div>

              <label style={{ marginBottom: "-12px" }}>UserName</label>
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label style={{ marginBottom: "-12px" }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label style={{ marginBottom: "-12px" }}>URL de la Imagen</label>
              <input
                type="text"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />

              <label style={{ marginBottom: "-12px" }}>Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Empleado">Empleado</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className={Styles.DivOpt}>
              <button onClick={() => SetisValid(false)}>Cancelar</button>
              <button onClick={HandleSave}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditEmpleado;

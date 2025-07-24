import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteEmp } from "../../../Redux/EmpleadoSlice.js";
import { Information } from "../../Context/StoreContext.jsx";
import Styles from "../../Styles/EmpleadosContent.module.css";
function EmpContent(params) {
  
  const empleadosInfo = useSelector(
    (state) => state.Empleados_DataBase.Empleados_Details
  );
  const employee = useSelector((state) => state.empleadosinfo.UserData);
  
   
  
  const { isValid, SetisValid } = useContext(Information);
const[EmpleadosInfo,SetEmpleados]=useState(empleadosInfo )
const [ResetData,SetResetData]=useState(empleadosInfo)
const[SearchEmp,SetSearchEmp]=useState("")
const dispatch=useDispatch()
const [Role, setRole] = useState("");
   const { EmpleadoIDContext, SetEmpleadoIDContexto} = useContext(Information);

   useEffect(()=>{
SetEmpleados(empleadosInfo )
SetResetData(empleadosInfo)


  },[empleadosInfo,employee])
 
useEffect(()=>{
 
   setRole(employee.Role);
   
  
  },[employee,])
  
  
const Contenido_empleados = useSelector(
    (state) => state.Empleados_DataBase.Empleados_Details
  );
console.log(Contenido_empleados);
useEffect(()=>{
if (SearchEmp=="") { SetEmpleados(ResetData)
     return;
}
let SearchInfo=ResetData.filter((empleado)=>(
 empleado.Name.toUpperCase(SearchEmp).trim().startsWith(SearchEmp.toUpperCase().trim())
 ))

SetEmpleados(SearchInfo)

},[SearchEmp])



 function Delete(empleadoid) {

 let Empleado_Data= empleadosInfo.filter((empleado)=>(
  empleado.EmpleadoID!==empleadoid
))
SetEmpleados(Empleado_Data)
dispatch(DeleteEmp(empleadoid))

 }

  
    return(<div className={Styles.EmpContainer}>

       <div className={Styles.SearchDiv}>
        

         <input type="text" placeholder="Buscar empleado..." onChange={(e)=>{SetSearchEmp(e.target.value)}}/>



        <div>
          <h2>Lista de Empleados</h2>
       
        {Role && Role=="owner" || Role=="Admin"  ? (<> 
     <button onClick={(e)=>{SetisValid(true),SetEmpleadoIDContexto("")}}  > <i className="fa-solid fa-user-plus"></i> Agregar Empleado</button>
</>) :(<></>)}
        </div>

    </div>



      <div className={Styles.Ent_Table_Container}>
        
    <table>
<thead>
    <tr>
    <th>Avatar</th>
    <th>Nombre</th>
    <th>Usuario</th>
    <th>Rol</th>
     {Role && Role=="owner" || Role=="Admin"  ? 
            (<th>Acciones</th>) : <></>}
</tr>
</thead>
 <tbody>   


  {EmpleadosInfo && EmpleadosInfo.length>0 ? (<>
  
    {EmpleadosInfo.map((empleados,index)=>(
<tr key={index}>  
<td><img src={empleados.Img} alt="" /></td> 
<td>{empleados.Name} {empleados.Apellido}  </td>
<td>{empleados.Username}</td>
<td>{empleados.Role}</td>
{Role && Role=="owner" || Role=="Admin"  ? 
            (
            
            <td><div  className={Styles.DivAcctiones}>
    <button onClick={(e)=>{SetisValid(true),SetEmpleadoIDContexto(empleados.EmpleadoID)}}  ><i className="fa-solid fa-pen-to-square"></i></button>
    <button onClick={(e)=>{Delete(empleados.EmpleadoID)}} ><i className="fa-solid fa-trash"></i></button>
        
    </div></td>
           ) : <></>}
</tr>    

        
   
     ))
    
    }
  
  
  </>) : ( <tr>
              <td colSpan={10} style={{ textAlign: "center", padding: 0 }}>
                No hay resultados
              </td>
            </tr>)}
 </tbody>
   
   
 


    </table>

    
    
      </div>
    </div>)
}

export default EmpContent
import Styles from "../../Styles/Empleados.module.css";
import EditEmpleado from "../SubComponents/EditEmpleado.jsx";
import EmpContent from "../SubComponents/EmpContent.jsx";
import Header from "../SubComponents/Header.jsx";
import Nav from "../SubComponents/Nav.jsx";
function EmpleadosPage(params) {
  
 
    return(
    <article className={Styles.Article_Empleados}>
        <Nav/>
    <EditEmpleado/>
    <div className={Styles.SubContainer}>
    <Header/>
        <EmpContent/>
    </div>
   
    </article>)



}

export default EmpleadosPage
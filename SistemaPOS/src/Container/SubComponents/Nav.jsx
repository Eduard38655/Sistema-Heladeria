import { Link } from "react-router-dom"
import Styles from "../../Styles/Nav.module.css"

function Nav(params) {
    return(<nav className={Styles.Navigation}>

 <div className={Styles.DivNav}>
<img src="https://img.freepik.com/psd-premium/helado-fondo-png_1047544-336.jpg" alt="" />    <h2>Heladería</h2>
</div>

<div className={Styles.DivUl}>
<ul>
    
 <Link to={"/shopping"}  className={Styles.RutaLink}><li><i className="fa-solid fa-cart-shopping"></i> Ventas</li> </Link>
  <Link to={"/Empleados"}className={Styles.RutaLink} ><li><i className="fa-solid fa-users-line"></i> Empleados </li></Link> 
 <Link to={"/Inventario"}className={Styles.RutaLink} ><li><i className="fa-solid fa-truck-moving"></i>Inventario</li> </Link> 
  <Link to={"/Gestión-Tiempo"} className={Styles.RutaLink}><li><i className="fa-solid fa-clock"></i> Gestión de Tiempo </li></Link> 


    
</ul>

</div>


    </nav>)
}

export default Nav
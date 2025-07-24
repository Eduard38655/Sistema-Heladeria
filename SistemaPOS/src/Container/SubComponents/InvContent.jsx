import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DeleteItem } from "../../../Redux/InventarioSlice.js"
import { Information } from "../../Context/StoreContext.jsx"
import Styles from "../../Styles/InventarioContent.module.css"
 


function InvContent(params) {
const dispatch=useDispatch()
const inventario = useSelector((state) => state.Inventario.DataInventario); 
const employee = useSelector((state) => state.empleadosinfo.UserData);
const { ProductID,SetProductoID}=useContext(Information)
 

const [Inventario,SetInventario]=useState(inventario)
const [ResetData,SetResetData]=useState(inventario)
const[SearchInv,SetSearchInv]=useState("")
const [Role, setRole] = useState("");
const {isValidInv, SetisValidInv}=useContext(Information)
//,SetEditInventorio("")
 
useEffect(()=>{
SetInventario(inventario)
SetResetData(inventario)
},[inventario])
 
useEffect(()=>{
 
   setRole(employee.Role);
   
  
  },[employee,])

 

 
 
useEffect(()=>{

 
if (SearchInv=="") {
    SetInventario(inventario)
    return;
}
 
const Filter=inventario.filter((producto)=>(
    producto.nombre.toLowerCase(SearchInv).trim().startsWith(SearchInv.toLowerCase().trim())

  ))

  SetInventario(Filter)
},[SearchInv])
 


function Delete_Item(itemId) {
 
   dispatch(DeleteItem(itemId));

  let updatedInventario = inventario.filter((item) => (item.id !== itemId));

SetInventario(updatedInventario);
 
}



    return(<aside className={Styles.InvContainer}>
        
    <div className={Styles.SearchDiv}>
        <input type="text"  placeholder="Buscar Producto..." onChange={(e)=>{SetSearchInv(e.target.value)}} />

        <div>

        <h2>Estado del Inventarios</h2>
{Role && Role=="owner" || Role=="Admin"  ? (<> 
<button onClick={(e)=>{SetisValidInv(true),SetProductoID("")} }  ><i className="fa-solid fa-plus"></i>Agregar Producto</button>
</>) : <></>}

        </div>


    </div>


<div className={Styles.Emp_Table_Container}>


    <table>
        <thead>
<tr>
   
        <th>Imagen</th>
        <th>Articulo</th>
        <th>Cantidad</th>
        <th>Unidad</th>
        <th>Precio</th>
        {Role && Role=="owner" || Role=="Admin"  ? 
            (<th>Acciones</th>) : <></>}
    
</tr>
            
        </thead>
 
 <tbody>
 
   {Inventario && Inventario.length > 0 ? (
<>
 {Inventario.map((inventario,index)=>(
<tr key={index} >

    <td><img src={inventario.img} alt="" /></td>
    <td>{inventario.nombre}</td>
    <td>{inventario.stock }</td>
    <td>{inventario.unidad}</td>
    <td>{inventario.precio}</td>
    {Role && Role=="owner" || Role=="Admin"  ? 
            (
            
            <td><div  className={Styles.DivAcctiones}>
    <button onClick={(e)=>{SetisValidInv(true),SetProductoID(inventario.id)}} ><i className="fa-solid fa-pen-to-square"></i></button>
    <button onClick={(e)=>{Delete_Item(inventario.id)}}  ><i className="fa-solid fa-trash"></i></button>
        
    </div></td>
            ) : <></>}
     
</tr>

    ))}
     

</>

   ) : (<><tr><td colSpan={9}>No hay productos en el inventario</td></tr></>)}
 



 </tbody>

 

    </table>




</div>
    
    
    </aside>)
}

export default InvContent
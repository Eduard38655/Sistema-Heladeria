import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Information } from "../../Context/StoreContext.jsx";
import Styles from "../../Styles/SalesContent.module.css";

function ManageSales(params) {
  const inventario = useSelector((state) => state.Inventario.DataInventario); 
  const {ProductID,SetProductoID}=useContext(Information)
  const[Productos,SetProductos]=useState([])
  const[Total,SetTotal]=useState(0)

  useEffect(()=>{

 Productos.map((producto) => {
    if (producto.id === ProductID) {
      return { ...producto, count: (producto.count || 0) + 1 };
    }
    return producto;
  });
  SetProductos((prev)=>[...prev,...inventario.filter(
    (item)=>item.id===ProductID).map((item)=>({...item,count:1}))]);
   
 
  
SetProductoID("")
 

  },[ProductID])
      
         
          

function Increase(ItemID) {
   
 
 let newProductos = Productos.map((producto) => {
    if (producto.id === ItemID) {
      return { ...producto, count: (producto.count || 0) + 1 };
    }
    return producto;
  });
  SetProductos(newProductos);
  
}

 

function Decrease(ItemID) {

  let newProductos = Productos.map((producto) => {
    if (producto.id === ItemID) {
      return { ...producto, count: (producto.count || 0) - 1 };
    }
    return producto;
  });
  SetProductos(newProductos);

}


function Remove(itemID) {

  let newProductos = Productos.filter((producto) => producto.id !== itemID);
  SetProductos(newProductos);
}


useEffect(() => {
let valorTotal = Productos.reduce((total, producto) => {
    return total + (producto.precio * (producto.count || 0));
  }, 0);  
  console.log(`Valor Total: $${valorTotal}`);
  
SetTotal(valorTotal);

}, [Productos]);

    return(<div className={Styles.DivContainer_Items}>


  <h2>Carrito de Compras</h2>
  <div  className={Styles.Inf_Container}>

<div className={Styles.SubContainer_Items}>
  {Productos && Productos.length > 0 ? (<>
  
  
{Productos.map((producto,index)=>(
 
    
    <div key={index} >
  <img src={producto.img} alt="" />
  <h5>{producto.nombre}</h5>

  <button disabled={producto.count===99} onClick={(e)=>{Increase(producto.id)}}>+</button>
  <p>{producto.count}</p>
  
  <button  disabled={producto.count===0}  onClick={(e)=>{Decrease(producto.id)}}>-</button>
  
  <h5>$ {producto.precio * producto.count}</h5>
  <button onClick={(e)=>{Remove(producto.id)}}><i class="fa-solid fa-trash"></i></button>
  </div>

))}

  </>)  : (<p className={Styles.emptyShop}>El carrito está vacío.</p>) }
</div>

 


  </div >
        
    <div className={Styles.Div_Price}>
    <p>Total:  <span>$ {Total}</span></p>
  <button>Registrar Venta</button>


</div>

     </div>


   )
}

export default ManageSales
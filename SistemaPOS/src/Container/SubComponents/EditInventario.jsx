import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../../Redux/InventarioSlice.js";
import { Information } from "../../Context/StoreContext.jsx";
import Styles from "../../Styles/Inventario.module.css";

export default function EditInventario() {
  const { isValidInv, SetisValidInv, ProductID, SetProductoID } = useContext(Information);

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [unidad, setUnidad] = useState("unidad");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);

  const inventario = useSelector((state) => state.Inventario.DataInventario);
  const dispatch = useDispatch();

  useEffect(() => {
    const item = inventario.find((inv) => inv.id === ProductID);
    if (item) {
      setNombre(item.nombre);
      setCantidad(item.stock);
      setUnidad(item.unidad);
      setImagen(item.img);
      setDescripcion(item.descripcion);
      setPrecio(item.precio);
    }
  }, [ProductID, inventario]);

  function handleSave() {
    // Validate fields
    if (!nombre || !descripcion || !imagen || cantidad < 0 || precio < 0) {
      alert("Todos los campos deben completarse correctamente.");
      return;
    }

    // Dispatch update action
    dispatch(
      updateItem({
        id: ProductID,
        nombre,
        precio,
        descripcion,
        stock: cantidad,
        unidad,
        img: imagen,
      })
    );

    alert("Producto actualizado exitosamente");
    // Close edit form
    SetisValidInv(false);
    // Reset selected product
    SetProductoID(null);
  }

  if (!isValidInv) return null;

  return (
    <div className={Styles.EditContainer}>
      <div className={Styles.DivSubcontainer}>
        <h2>Editar Artículo</h2>
        <div className={Styles.Edit_Main_Info}>
          <label>Nombre del Artículo</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <div className={Styles.DivInput_Edit_Inv}>
            <div>
              <label>Cantidad</label>
              <input
                type="number"
                value={cantidad}
                min="0"
                onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
              />
            </div>

            <div>
              <label>Precio</label>
              <input
                type="number"
                value={precio}
                min="0"
                step="0.01"
                onChange={(e) => setPrecio(parseFloat(e.target.value))}
              />
            </div>

            <div>
              <label>Unidad</label>
              <select
                value={unidad}
                onChange={(e) => setUnidad(e.target.value)}
              >
                <option value="unidad">Unidad</option>
                <option value="litros">Litros</option>
              </select>
            </div>
          </div>

          <label>Descripción</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <label>URL de la Imagen</label>
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <div className={Styles.DivOpt}>
          <button onClick={() => SetisValidInv(false)}>Cancelar</button>
          <button onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

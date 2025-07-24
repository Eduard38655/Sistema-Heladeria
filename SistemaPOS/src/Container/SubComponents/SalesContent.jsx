import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { Information } from "../../Context/StoreContext.jsx";
import Styles from "../../Styles/SalesContent.module.css";

function SalesContent() {
  const inventario = useSelector((state) => state.Inventario.DataInventario);
  const [SalesItems, setSalesItems] = useState(inventario);
  const { ProductID, SetProductoID } = useContext(Information);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const pageCount = Math.ceil(SalesItems.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = SalesItems.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className={Styles.Content_Container_Sales}>
      <h2>Punto de Venta</h2>

      <div className={Styles.Items_Contaner_Sales}>
        {SalesItems && SalesItems.length > 0 ? (
          <>
            <div className={Styles.Items_Card_Sales}>
              {currentItems.map((item) => (
                <div key={item.id} className={Styles.Div_Container}>
                  <img src={item.img} alt={item.nombre} />
                  <div className={Styles.DivText}>
                    <h5>{item.nombre}</h5>
                    <p>{item.descripcion}</p>
                    <h5>$ {item.precio}</h5>
                  </div>
                  <button onClick={() => SetProductoID(item.id)}>
                    <i className="fa-solid fa-plus"></i> Agregar
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>No hay artículos disponibles</>
        )}

      </div>
      <div className={Styles.pagination} >
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLabel={"..."}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
      />
      </div>
    </div>
  );
}

export default SalesContent;

import Styles from "../../Styles/Inventario.module.css"
import EditInventario from "../SubComponents/EditInventario.jsx"
import Header from "../SubComponents/Header.jsx"
import InvContent from "../SubComponents/InvContent.jsx"
import Nav from "../SubComponents/Nav.jsx"


function Inventario(params) {
    return(
    <article className={Styles.Article_Inventario}>
        <Nav/>
<EditInventario/>
    <div className={Styles.SubContainer}>
    
    <Header/>
    <InvContent/>
    </div>
    
    </article>
    )
}

export default Inventario
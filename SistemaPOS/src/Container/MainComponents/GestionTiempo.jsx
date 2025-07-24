import Styles from "../../Styles/Gestime.module.css"
import GesTContent from "../SubComponents/GesTContent.jsx"
import AddEmpleado from "../SubComponents/GetAddTim.jsx"
import Header from "../SubComponents/Header.jsx"
import Nav from "../SubComponents/Nav.jsx"

function GestionTiempo(params) {
    return(
    <article className={Styles.article_Time}>
        <Nav/>
      <AddEmpleado/>
    <div className={Styles.SubContainer}>
    
    <Header/>
  <GesTContent />
    </div>
    
    </article>
    )
}

export default  GestionTiempo
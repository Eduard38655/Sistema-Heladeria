import Styles from "../../Styles/SalesPage.module.css";
import Header from "../SubComponents/Header.jsx";
import ManageSales from "../SubComponents/ManageSales.jsx";
import Nav from "../SubComponents/Nav.jsx";
import SalesContent from "../SubComponents/SalesContent.jsx";

function SalesPage(params) {
    return(<article className={Styles.Sales_Container}>
  
       <Nav/>


<div className={Styles.SubContainer}>
    <Header/>
    
    <div className={Styles.Container_Serach_content}>
        <SalesContent />
        <ManageSales/>
    </div>
</div>

    
    </article>)
}

export default SalesPage
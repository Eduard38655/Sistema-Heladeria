import { useContext } from "react";
import { useSelector } from "react-redux";
import { Information } from "../../Context/StoreContext";
import Styles from "../../Styles/Header.module.css";

function Header() {
  // UserData ahora es un objeto o null
  const profile = useSelector((state) => state.empleadosinfo.UserData);
  const { SetLogout } = useContext(Information);

  function LogOutDelete() {
    SetLogout(false);
    localStorage.removeItem("UserData");
  }

  return (
    <div className={Styles.DivHeader}>
      <h2>Gestion de empleados</h2>

      {profile ? (
        <div className={Styles.DivLogut}>
          <img
            src={profile.Img}
            alt={`${profile.Name} ${profile.Apellido}`}
          />
          <h4>
            {profile.Name} {profile.Apellido} – {profile.Role} General
          </h4>
          <button onClick={LogOutDelete}>
            <i className="fa-solid fa-arrow-right-from-bracket" /> Salir
          </button>
        </div>
      ) : (
        <p>No hay usuario logueado</p>
      )}
    </div>
  );
}

export default Header;

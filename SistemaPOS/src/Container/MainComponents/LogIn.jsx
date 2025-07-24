import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Empleados from '../../../Backend/Empleados.js';
import { EmpleadoInfo } from '../../../Redux/DatabaseSlice.js';
import { Information } from '../../Context/StoreContext.jsx';
import Styles from '../../Styles/Login.module.css';

function LogIng() {
  alert("Usuario: ez@gmail.com, Clave: 123")
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const { SetLogout } = useContext(Information);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUser, setErrorUser] = useState('');
  const [errorPass, setErrorPass] = useState('');

  function ValidateUser() {
    
    // Validaciones de campos vacíos
    if (!username && !password) {
      setErrorUser('Este campo no puede estar vacio');
      setErrorPass('Este campo no puede estar vacio');
      return;
    }
    if (!username) {
      setErrorUser('Este campo no puede estar vacio');
      setErrorPass('');
      return;
    }
    if (!password) {
      setErrorUser('');
      setErrorPass('Este campo no puede estar vacio');
      return;
    }

    // Filtrado de usuario
    const matched = Empleados.find(
      (u) => u.Username === username && u.Password === password
    );

    if (matched) {
      setErrorUser('');
      setErrorPass('');

      // Guardar en contexto/estado global
      dispatch(EmpleadoInfo(matched));
      localStorage.setItem('UserData', JSON.stringify(matched));
      SetLogout(true);

      // Redirigir
      navigate('/shopping');
    } else {
      setErrorUser('No se pudo validar tu usuario');
      setErrorPass('No se pudo validar tu usuario');
    }
  }

  return (
    <div className={Styles.LoginContainer}>
      <div className={Styles.Sub_Login_Container}>
        <h2>Ingresar</h2>

      <div>
          <input
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
        />
        {errorUser && <p>{errorUser}</p>}

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        {errorPass && <p>{errorPass}</p>}
      </div>

        <button onClick={ValidateUser}>Submit</button>
      </div>
    </div>
  );
}

export default LogIng;

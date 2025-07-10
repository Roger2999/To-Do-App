import { useContext } from "react";
import { UsuariosContext } from "../../context/UsuariosContext/UsuariosContext";
import ModalForm from "../../components/ModalForm";
import "./Home.css";
import { ToastContex } from "../../context/UsuariosContext/ToastContext";
import Toast from "../../components/Toast";
export const Home = () => {
  const { listaUsuarios, eliminarUsuario } = useContext(UsuariosContext);
  const { showToast, toastRef, setShowToast, setToastMsg, toastMsg } =
    useContext(ToastContex);

  const handleEliminar = (id) => {
    eliminarUsuario(id);
    setToastMsg("Tarea eliminada con éxito ✔");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      {listaUsuarios.length ? (
        <table
          className="table table-bordered"
          style={{
            maxWidth: "80%",
            minWidth: "80%",
            margin: " 50px auto",
          }}
        >
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listaUsuarios.map((usuario) => (
              <tr key={usuario.id} style={{ textAlign: "center" }}>
                <th
                  style={{
                    width: "200px",
                    textAlign: "start",
                  }}
                  scope="row"
                >
                  {usuario.nombre}
                </th>
                <td style={{ width: "200px", textAlign: "start" }}>
                  {usuario.email}
                </td>
                <td style={{ width: "200px" }}>
                  <ModalForm usuario={usuario} />
                </td>
                <td style={{ width: "200px" }}>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleEliminar(usuario.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="p-container">
          <p>No hay usuarios</p>
        </div>
      )}
      <Toast show={showToast} toastRef={toastRef} toastMsg={toastMsg}></Toast>
    </>
  );
};
export default Home;

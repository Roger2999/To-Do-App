import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsuariosContext } from "../../context/UsuariosContext/UsuariosContext";

export const ModalForm = ({ usuario }) => {
  const navigate = useNavigate();
  const { editarUsuario } = useContext(UsuariosContext);
  const usuarioEditar = useMemo(
    () => usuario || { nombre: "", email: "", id: null },
    [usuario]
  );

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setNombre(usuarioEditar.nombre || "");
    setEmail(usuarioEditar.email || "");
  }, [usuarioEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email) return;
    editarUsuario({ ...usuarioEditar, nombre, email });
    navigate("/");
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#${usuario.id}`}
        style={{}}
      >
        ✏
      </button>

      <div
        className="modal fade"
        id={usuario.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Editar usuario
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputName"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <label htmlFor="floatingInputName">Nombre</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-primary" type="submit">
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalForm;

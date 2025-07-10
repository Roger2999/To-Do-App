import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../../context/UsuariosContext/UsuariosContext";
import "./Login.css";
import Toast from "../../components/Toast";
import { ToastContex } from "../../context/UsuariosContext/ToastContext";
export const Login = () => {
  const { agregarUsuario } = useContext(UsuariosContext);
  const { setShowToast, showToast, toastRef, setToastMsg, toastMsg } =
    useContext(ToastContex);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    agregarUsuario({ nombre: data.nombre, email: data.email, id: Date.now() });
    setToastMsg("Tarea agregada con éxito ✔");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // Oculta el Toast después de 2 segundos
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container"
        id="form"
      >
        <fieldset>
          <legend style={{ fontFamily: "fantasy" }}>Datos:</legend>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputName"
              placeholder="name@example.com"
              {...register("nombre", { required: "El nombre es obligatorio" })}
            />
            {errors.nombre && <span>{errors.nombre.message}</span>}
            <label htmlFor="floatingInputName">Nombre</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="Email"
              {...register("email", {
                required: "El email es obligatorio",
                maxLength: {
                  value: 50,
                  message: "La dirección no puede superar los 50 caracteres",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <label htmlFor="floatingPasswordEmail">Email</label>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            style={{ margin: " 20px 10px auto" }}
            id="liveToastBtn"
          >
            Agregar usuario
          </button>
          <Toast
            show={showToast}
            toastRef={toastRef}
            toastMsg={toastMsg}
          ></Toast>
        </fieldset>
      </form>
    </>
  );
};
export default Login;

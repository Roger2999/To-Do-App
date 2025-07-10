import { useReducer } from "react";
import { UsuariosContext } from "./UsuariosContext";

export const UsuariosProvider = ({ children }) => {
  const initialState = [];

  const usuariosReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "AGREGAR USUARIO":
        return [...state, action.payload];
      case "ELIMINAR USUARIO":
        return state.filter((usuario) => usuario.id !== action.payload);
      case "EDITAR USUARIO":
        return state.map((usuario) =>
          usuario.id === action.payload.id
            ? { ...usuario, ...action.payload }
            : usuario
        );
      default:
        return state;
    }
  };

  const [listaUsuarios, dispatch] = useReducer(usuariosReducer, initialState);

  const agregarUsuario = (usuario) => {
    const action = {
      type: "AGREGAR USUARIO",
      payload: usuario,
    };
    dispatch(action);
  };
  const eliminarUsuario = (id) => {
    const action = {
      type: "ELIMINAR USUARIO",
      payload: id,
    };
    dispatch(action);
  };
  const editarUsuario = (usuarioEditado) => {
    const action = {
      type: "EDITAR USUARIO",
      payload: usuarioEditado,
    };
    dispatch(action);
  };
  return (
    <UsuariosContext.Provider
      value={{ listaUsuarios, agregarUsuario, eliminarUsuario, editarUsuario }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

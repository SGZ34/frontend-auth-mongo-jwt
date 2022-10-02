import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { onChecking, onLoging, onLogout } from "../redux/slices/authSlice";
import { api } from "../api";

export const useAuth = () => {
  const { user, status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      dispatch(onLoging(data.name));
    } catch (error) {
      const errorMessage = error.response.data?.errorMessage;

      dispatch(onLogout(errorMessage));
    }
  };

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      dispatch(onLoging(name));
    } catch (error) {
      const errorMessage = error.response.data?.errorMessage;

      dispatch(onLogout(errorMessage));
    }
  };
  const checkToken = async () => {
    dispatch(onChecking());

    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await api.get("/auth/renew");

      localStorage.setItem("token", token);

      dispatch(onLoging(data.name));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    user,
    status,
    errorMessage,

    startRegister,
    startLogin,
    checkToken,
    startLogout,
  };
};

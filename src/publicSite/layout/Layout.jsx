import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../hooks";
import { clearErrorMessage } from "../../redux/slices";
import { Navbar } from "../components";
export const Layout = ({ children }) => {
  const { errorMessage } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast(errorMessage);
      dispatch(clearErrorMessage());
    }
  }, [errorMessage]);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container pt-4">{children}</div>
    </>
  );
};

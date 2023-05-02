import { GlobalStyle } from "./styles/GlobalStyles";
import { MainRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <MainRoutes />
    </>
  );
}

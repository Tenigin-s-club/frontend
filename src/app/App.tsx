import "./styles/index.scss";
import Router from "./providers/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;

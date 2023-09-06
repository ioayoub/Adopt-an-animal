import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-slate-50 min-h-screen">
        <Navbar />
        <AppRoutes />
        <ToastContainer />
        for test
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

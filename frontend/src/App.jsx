import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-slate-50 pb-12">
        <Navbar />
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

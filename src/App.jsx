import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col" style={{ border: "2px solid green", padding: "10px" }}>
      <main id="main-content" className="flex-1">
        <Navbar />
        <div style={{ border: "2px solid blue", padding: "10px" }}>
          <h4>Outlet</h4>
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

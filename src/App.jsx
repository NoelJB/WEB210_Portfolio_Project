import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col" style={{ border: "2px solid green", padding: "10px" }}>
      <main id="main-content" className="flex-1">
        <h3>App</h3>
        <div style={{ border: "2px solid blue", padding: "10px" }}>
          <h4>Outlet</h4>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

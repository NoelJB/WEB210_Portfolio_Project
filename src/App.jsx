import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <main id="main-content" className="flex-1">
        <p>Child content goes inside</p>
        <p>[</p>
        <Outlet />
        <p>]</p>
      </main>
    </div>
  );
}

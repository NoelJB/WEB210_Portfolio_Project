import Container from "../ui/Container.jsx";
import SimpleMenu from "../ui/SimpleMenu.jsx";

export default function Footer() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Me" },
    //{ to: "/portfolio", label: "Portfolio" },
    // { to: "/resume", label: "Resume" },
    { to: "/catalog", label: "Catalog" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/70 backdrop-blur py-8 text-white/80">
      <Container>
        {/* Main footer content - similar to navbar layout but vertical on mobile */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
          {/* Left: Brand */}
          <div className="flex-1 text-center md:text-left">
            <a href="/" className="text-white font-semibold text-lg">
              Joe Anonymous
            </a>
          </div>

          {/* Center: Navigation */}
          <SimpleMenu
            links={links}
            ariaLabel={"Footer navigation"}
            navClassName={"flex-none"}
            ulCLassName={"flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm"}
            linkClassName={({ isActive }) => `transition hover:text-white ${isActive ? "text-white" : ""}`}
          />
        </div>
        {/* Copyright line - centered */}
        <div className="mt-6 pt-6 text-center">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Joe Anonymous. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

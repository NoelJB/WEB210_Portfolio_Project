import { NavLink } from "react-router-dom";

export default function Catalog() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
  ];

  return (
    <>
      <div>Catalog Goes HERE!</div>
      <nav>
        <ul>
          {links.map((link) => (
            <li>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

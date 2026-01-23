import { NavLink } from "react-router-dom";

export default function SimpleMenu({ links, navClassName, ulCLassName, ariaLabel, role, linkClassName, onClick }) {
  return (
    <nav className={navClassName}>
      <ul className={ulCLassName} aria-label={ariaLabel} role={role}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className={linkClassName} onClick={onClick}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

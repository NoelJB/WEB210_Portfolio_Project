import SimpleMenu from "../components/ui/SimpleMenu";

export default function Catalog() {
  const menu_items = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
  ];

  return (
    <>
      <div>Catalog Goes HERE!</div>
      <nav>
        <ul>
          <SimpleMenu links={menu_items} />
        </ul>
      </nav>
    </>
  );
}

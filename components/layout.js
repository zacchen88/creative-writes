import Nav from "../app/Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}

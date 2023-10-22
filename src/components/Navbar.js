import "@/app/globals.css";
import { oswald } from "@/app/fonts";

export default function Navbar() {
  return (
    <section className={oswald.className}>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">User</li>
          <li className="navbar-item">Contact</li>
          <li className="navbar-item">About</li>
        </ul>
      </nav>
    </section>
  );
}

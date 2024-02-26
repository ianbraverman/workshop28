import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <article className="Root">
      <Navbar className="Navbar" />
      <main className="Thecolor">
        <Outlet />
      </main>
    </article>
  );
}

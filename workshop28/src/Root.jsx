import { Outlet } from "react-router";
import Navbar from "./NavBar";

export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

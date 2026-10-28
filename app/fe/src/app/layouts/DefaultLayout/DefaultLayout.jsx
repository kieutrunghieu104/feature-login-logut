import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default DefaultLayout;
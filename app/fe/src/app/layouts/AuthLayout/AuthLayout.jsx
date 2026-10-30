import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AuthLayout.module.scss";

const cx = classNames.bind(styles);

function AuthLayout() {
  return (
    <div className={cx("wrapper")}>
      <h1>AuthLayout</h1>
      <Outlet />
    </div>
  );
}

export default AuthLayout;

import { useRef } from "react";
import classes from "./Sidebar.module.css";
import Link from 'next/link'
const Sidebar = ({
  siderdrawerOpenHandler,
  siderdrawerCloseHandler,
  ...rest
}) => {

    const sideRef = useRef();
  return (
    <aside ref={rest.SidedrawerRef} className={classes.Sidebar_main}>
      <div
        className={classes.Sidebar_main_close_button}
        onClick={() => {
          siderdrawerCloseHandler();
        }}
      >
        X
      </div>
      <div>
        <ul>
          <li>
            {" "}
            <Link href="/Product/Product-list">Products</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/Category/Category-list">Category</Link>{" "}
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

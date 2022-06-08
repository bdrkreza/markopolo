import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./layout.scss";

export default function AppLayout() {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <div className="layout">
          <div className="layout_content">
            <Header />
            <div className="layout__content-main container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Dashboard from "../../pages/dashboard/Dashboard";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./layout.scss";

type Props = {};

export default function DefaultLayout({}: Props) {
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
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

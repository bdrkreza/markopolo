import brandLogo from "../../assets/image/Markopolo-logo.png";
import "./sidebar.scss";
import SidebarItem from "./SidebarItem";
import { sidebarRoute } from "./_nav";
type Props = {};

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <div>
          <img src={brandLogo} alt="" />
          {/* <h1 className="brand_name">
            marko <span>polo</span>
          </h1> */}
        </div>
      </div>
      <hr />
      {sidebarRoute.map((item, index) => (
        <SidebarItem title={item.display_name} icon={item.icon} />
      ))}
    </div>
  );
}

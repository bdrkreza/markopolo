import { FiEdit } from "react-icons/fi";
import { MdAddBox } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/image/avatar.svg";
import "./dashboard.scss";
type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div className="wrapper">
      {["1", "2", "3", "4", "5"].map((item) => (
        <div className="card_wrapper">
          <img src={logo} alt="cookie" />
          <div className="content">
            <header>rkreza</header>
            <p>
              email: <span className="email">diureza@gmail.com</span>
            </p>
            <p>
              phone: <span className="phone">01789</span>
            </p>
            <p>
              address: <span className="address">usa</span>
            </p>
            <div className="buttons">
              <Link to="/add" className="add">
                <MdAddBox />
              </Link>

              <Link to="/edit" className="edit">
                <FiEdit />
              </Link>

              <button className="delete">
                <RiDeleteBack2Line />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

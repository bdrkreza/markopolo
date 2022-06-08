import { Link } from "react-router-dom";
import "./editUser.scss";
type Props = {};

export default function EditUser({}: Props) {
  return (
    <div className="add_content">
      <form>
        <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>email</label>
        </div>
        <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>phone</label>
        </div>

        <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>address</label>
        </div>
        <div>
          <Link className="btn_cancel" to="/">
            cancel
          </Link>
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

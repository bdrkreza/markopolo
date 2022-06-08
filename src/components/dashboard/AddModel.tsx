/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { RiCloseFill } from "react-icons/ri";

type Props = {};

export default function AddModel({}: Props) {
  return (
    <div>
      <div className="modal" id="modal1">
        <a className="modal__close" href="#"></a>
        <div className="modal__content">
          <a href="#">
            <RiCloseFill />
          </a>
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
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

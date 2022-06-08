import React from "react";
import { RiCloseFill } from "react-icons/ri";

type Props = {};

export default function EditModel({}: Props) {
  return (
    <div>
      <div className="modal" id="modal2">
        <a className="modal__close" href="#"></a>
        <div className="modal__content">
          <a href="#">
            <RiCloseFill />
          </a>
          <form>
            <div className="group">
              <input defaultValue="rkreza" type="text" required />
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

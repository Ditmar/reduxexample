import React from "react";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { MainDashBoard } from "./MainDashBoard";

import "./styles.css";
export const DashBoardComponent = ({ children, ...rest }) => {
  const { auth } = useSelector((state) => state);
  const { user } = auth;
  return user == null ? (
    <Redirect to="/login" />
  ) : (
    <>
      <input type="checkbox" id="check" />
      <label for="check">
        <div className="fas fa-bars">
          <MdCancel className="iconcolor" />
        </div>
      </label>
      <div className="sidebar">
        <header>My App</header>
        <ul>
          <li>
            <a href="#">
              <i className="fas fa-qrcode"></i>Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-link"></i>Shortcuts
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-stream"></i>Overview
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-calendar-week"></i>Events
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-question-circle"></i>About
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-sliders-h"></i>Services
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-envelope"></i>Contact
            </a>
          </li>
        </ul>
      </div>
      <section></section>
      <Switch>
        <Route path="/dashboard" component={MainDashBoard} />
      </Switch>
    </>
  );
};

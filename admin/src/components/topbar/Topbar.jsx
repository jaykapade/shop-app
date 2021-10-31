import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  const user = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser;

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">GUCCI</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">0</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src={
              user.img ||
              "https://www.vhv.rs/dpng/d/421-4213265_transparent-no-avatar-png-avatar-user-login-icon.png"
            }
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

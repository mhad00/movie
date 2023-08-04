import React from "react";
import { BiLogOut, BiUser, BiHistory } from "react-icons/bi";
import "./UserProfile.css";
import { Link } from "react-router-dom";
const UserProfile = () => {
  return (
    <div className="fullwh">
      <Link to="/">
        <div className="out">
          <BiLogOut size={40} />
        </div>
      </Link>
      <div className="container-Profile">
        <div className="nav-pr">
          <div className="avt-name">
            <img className="avatar-pr" src="avatar.webp" />
            <p>User Profile</p>
          </div>
          <div className="optional">
            <div className="history">
              <BiHistory className="icon-hs" size={20} />
              <h1>History</h1>
            </div>

            <div className="user-optinal">
              <BiUser size={20} className="user-icon-pr" />
              <h1> Profile</h1>
            </div>

            <div className="logout">
              <BiLogOut className="logout-icon" size={20} />
              <h1>Logout</h1>
            </div>
          </div>
        </div>
        <div className="info-pr">
          <div className="heard-if">
            <h1>Profile</h1>
            <span>Edit information</span>
          </div>
          <div className="elm-pr">
            <div className="elm1">
              <div className="profile-picture">
                <span>Profile picture</span>
                <img className="picture-pr" src="avatar.webp" />
              </div>
              <div className="name-pr">Name User :</div>
              <div className="birthday-pr">Date of birth :</div>
              <div className="gender-pr">Gender :</div>
              <div className="emailcontact-pr">Email :</div>
            </div>
            <div className="elm2">
              <div className="acc-info">
                <p>Account Info</p>
                <div className="numberphone">Phone Number</div>
                <div className="acc-email">Email</div>
                <div className="reset-pw">Reset Password</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

// REACT HOOKS
import { useState } from "react";

// REACT ROUTER HOOKS
import { Link } from "react-router-dom";

// FROM ASSETS
import userIcon from "../assets/images/user_icon.png";

// ICONS
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

const User = () => {
  // USER PROFILE OPEN STATE
  const [profileOpen, setProfileOpen] = useState(false);

  const user = true;

  return (
    <>
      <div className="profile">
        {/* USER LOGED IN OR LOGOUT */}
        {user ? (
          <>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="img"
            >
              <img src={userIcon} alt="User" />
            </button>

            {profileOpen && (
              <div
                onClick={() => setProfileOpen(!profileOpen)}
                className="openProfile boxItems"
              >
                <div className="image">
                  <Link to={"/account"}>
                    <div className="img">
                      <img src={userIcon} alt="User" />
                    </div>
                  </Link>
                  <div className="text">
                    <h4>Eden Smith</h4>
                    <label htmlFor="">Los Angeles, Ca</label>
                  </div>
                </div>
                <Link to={"/register"}>
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className="box">
                  <BsBagCheck className="icon" />
                  <h4>My Order</h4>
                </button>
                <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4>Wish list</h4>
                </button>
                <button className="box">
                  <GrHelp className="icon" />
                  <h4>Help</h4>
                </button>
                <button className="box">
                  <BiLogOut className="icon" />
                  <h4>Log out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  );
};

export default User;

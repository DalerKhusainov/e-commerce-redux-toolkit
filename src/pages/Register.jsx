// FROM ASSETS
import backImg from "../assets/images/my-account.jpg";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={backImg} alt="Background" />
            <div className="text">
              <h3>Register</h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form>
            <span>Email address</span>
            <input type="text" required />
            <span>Username *</span>
            <input type="text" required />
            <span>Password *</span>
            <input type="text" required />
            <span>Confirm password</span>
            <input type="text" required />
            <button className="button">Register</button>

            <Link to={"/login"}>Sign In</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

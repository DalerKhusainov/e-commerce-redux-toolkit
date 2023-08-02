// REACT ROUTER HOOKS
import { Link } from "react-router-dom";

// FROM ASSETS
import backImg from "../assets/images/my-account.jpg";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={backImg} alt="Background" />
            <div className="text">
              <h3>Sign In</h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form>
            <span>Username or Email address</span>
            <input type="text" required />
            <span>Password *</span>
            <input type="text" required />
            <button className="button">Sign In</button>

            <Link to={"/register"}>Sign Up</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;

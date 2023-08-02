// ICONS
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="boxItems">
      <div className="container flex">
        <p>
          Cartsy Medicine &copy; - All rights reserved - Design & Developed by
          RedQ ,Inc
        </p>
        <div className="social">
          <BsFacebook className="icon" />
          <AiFillTwitterCircle className="icon" />
          <AiFillLinkedin className="icon" />
          <RiInstagramFill className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./index.css";
import "./cards";
import { FaEdit } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

class CardOfStudents extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={this.props.ImgBK} className="backgroundImg"></img>

        <FaEdit size="1.4rem" className="iconE" color="#fafafa"></FaEdit>

        <img src={this.props.profileImg} className="profile-img"></img>
        <h2>{this.props.Name}</h2>
        <h3>{this.props.JopTitel}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
          ratione labore sit beatae fuga non impedit fugiat sed debitis.
        </p>
        <div className="social">
          <a href={this.props.fbLink}>
            {" "}
            <FaFacebook
              size="1.6rem"
              color="#c9c7c6"
              className="faIcon"
            ></FaFacebook>
          </a>
          <a href={this.props.ghLink}>
            {" "}
            <FaGithub
              size="1.6rem"
              color="#c9c7c6"
              className="faIcon"
            ></FaGithub>
          </a>
          <a href={this.props.igLink}>
            {" "}
            <FaInstagram
              size="1.6rem"
              color="#c9c7c6"
              className="faIcon"
            ></FaInstagram>
          </a>
        </div>
      </div>
    );
  }
}

export default CardOfStudents;

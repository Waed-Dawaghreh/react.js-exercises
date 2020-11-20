import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Imgbk from "./bk-img.jpeg";
import Pimg1 from "./waed.jpg";
import Pimg2 from "./dana.jpg";
import Pimg3 from "./razan.jpeg";
import Pimg4 from "./jenan.jpg";
import Pimg5 from "./taima.jpg";
import Pimg6 from "./lubna3.jpeg";
import CardOfaStudent from "./component";
class Card extends React.Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <CardOfaStudent
          ImgBK={Imgbk}
          Name="Waed Dawaghreh"
          JopTitel="Full-Stack Developer"
          profileImg={Pimg1}
          fbLink="https://www.facebook.com/profile.php?id=100004017838089"
          igLink="https://www.instagram.com/waed_dawaghreh/?fbclid=IwAR0aQGNlaWGw_KdPZbp3K__LGsrB0cR8FBBdAgEe0_mrDsOY5ifNNyERm6k"
          ghLink="https://github.com/Waed-Dawaghreh/OCA"
        ></CardOfaStudent>
        <CardOfaStudent
          ImgBK={Imgbk}
          Name="Dana Toughoj"
          JopTitel="Full-Stack Developer"
          profileImg={Pimg2}
          fbLink="https://www.facebook.com/toughoj"
          igLink="#"
          ghLink="https://github.com/Waed-Dawaghreh"
        ></CardOfaStudent>
        <CardOfaStudent
          ImgBK={Imgbk}
          Name="Razan Zuaiter"
          JopTitel="Engineer And A Developer"
          profileImg={Pimg3}
          fbLink="https://www.facebook.com/Razan.zaiter.13"
          igLink="#"
          ghLink="https://github.com/Razan-Zuaiter"
        ></CardOfaStudent>
        <CardOfaStudent
          ImgBK={Imgbk}
          Name="Jenan Musallam"
          JopTitel="Developer"
          profileImg={Pimg4}
          fbLink="https://www.facebook.com/jenan.musallam"
          igLink="#"
          ghLink=" https://github.com/Jenanmusallam"
        ></CardOfaStudent>
        <CardOfaStudent
          ImgBK={Imgbk}
          Name="Taima Alfokaha"
          JopTitel="FrontEnd Developer"
          profileImg={Pimg5}
          fbLink="taima:https://www.facebook.com/taima.alfokaha"
          igLink="#"
          ghLink="https://github.com/alfokaha-taima"
        ></CardOfaStudent>
        <CardOfaStudent
          ImgBK={Imgbk}
          Name="Lubna Almaaweed"
          JopTitel="Backend Developer"
          profileImg={Pimg6}
          fbLink="https://www.facebook.com/lubna.amjad.5621"
          igLink="#"
          ghLink="https://github.com/lubna-almaaweed"
        ></CardOfaStudent>
      </div>
    );
  }
}

export default Card;

ReactDOM.render(<Card />, document.getElementById("root"));

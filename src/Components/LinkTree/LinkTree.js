import React from "react";
import "./LinkTree.css";
import profile from "../../assets/images/profile.png";
import slack from "../../assets/images/slack.svg.png";
import github from "../../assets/images/github.png";
import ip from "../../assets/images/ip.png";
import icoony from "../../assets/images/icoony.png";
import dots from "../../assets/images/dots.png";
const LinkTree = () => {
  const ref = () => {
    window.location.href = "https://twitter.com/DJNchrys2";
  };
  const refs = () => {
    window.location.href = "https://training.zuri.team/";
  };
  const refss = () => {
    window.location.href = "https://books.zuri.team/";
  };
  const rafs = () => {
    window.location.href = "https://books.zuri.team/";
  };
  const raf = () => {
    window.location.href = "https://background.zuri.team/";
  };
  const rof = () => {
    window.location.href = "https://books.zuri.team/design-rules";
  };
  return (
    <div className="main-div-linkTree ">
      <div className="mg-lnk">
        <div className="min-div-linktree">
          <div className="float-icon">
            <img src={icoony} alt="jhdh" />
          </div>
          <div className="float-icon2">
            <img src={dots} alt="jhdh" />
          </div>
          <img src={profile} alt="jh" className="profile-pic" />
          <div class="username">Annette Black</div>
          <div className="mg-linkz">
            <div className="linkz-div" onClick={ref}>
              Twitter Link
            </div>
            <div className="linkz-div" onClick={refs}>
              Zuri Team
            </div>
            <div className="linkz-div" onClick={refss}>
              Zuri Books
            </div>
            <div className="linkz-div" onClick={rafs}>
              Python Books
            </div>
            <div className="linkz-div" onClick={raf}>
              Background Check for Coders
            </div>
            <div className="linkz-div" onClick={rof}>
              Design Books
            </div>
          </div>

          <div
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <div>
              <img src={slack} alt="gvv" className="slack-img" />
            </div>
            <div>
              {" "}
              <img src={github} alt="gvv" className="slack-img" />
            </div>
          </div>
          <div className="footer-linktree">
            <div className="hr-div"></div>
            <div className="display-int">
              <div style={{ color: "black" }}>
                <h6>
                  Zuri<strong>.</strong>Intership
                </h6>
              </div>
              <div>
                <h6 className="hng">HNG Intership 9 frontend Task</h6>
              </div>
              <div>
                <img src={ip} alt="vff" className="ip-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkTree;

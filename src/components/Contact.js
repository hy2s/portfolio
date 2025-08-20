import { IoLogoGithub } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div id="contact" style={{backgroundImage: "url(/images/contact-background.png"}}>
      <div className="section-wrap">
        <hr />
        <div className="section-title">
          <h3>저와 함께 <span>이야기</span>를 만들어갈 준비되셨나요?</h3>
          <h1>CONTACT</h1>
        </div>
        <div className="contact-btn-wrap">
          <a href="https://github.com/hy2s">
            <IoLogoGithub />
            <h2>GitHub</h2>
          </a>
          <a href="">
            <IoMail />
            <h2>rlagptmd1021@gmail.com</h2>
          </a>
        </div>
      </div>
      <div className="contact-ment">
        <h3><span>역지사지 마인드</span>로 <span>사용자 경험을 최우선</span>으로 생각하는 디자이너가 되고 싶습니다.</h3>
        <h2>봐주셔서 감사합니다.</h2>
      </div>
      <p className="footer">
        Copyright 2025. KimHyeseung all rights reserved.<br/>
        React 기반으로 제작된 사이트입니다.
      </p>
    </div>
  );
};

export default Contact;
import "./Campaing.css";
import Image from "../images/logos/evoluinfo-icon-2.png"

export default function Campaing() {
  return (
    <div className="hero-campaign">
      <div className="hero-campaign-div-logo">
        <img alt="pastedImage" src={Image} />
      </div>
      <div className="hero-campaign-div-text">
        <h1 className="hero-campaign-text-top">
          Chegou a hora de virar o jogo.
        </h1>
        <h1 className="hero-campaign-text-bottom">
          Sua ideia, nós tiramos do papel
        </h1>
      </div>
      <div className="hero-campaign-div-buttom"><a href="https://wa.me/+5547999201143" target="_blank" rel="noopener noreferrer">contratar agora</a></div>
    </div>
  );
}

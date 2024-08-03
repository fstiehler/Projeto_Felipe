import './Footer.css';
import { Alert } from "antd";
import { useState } from "react";
import Logo from "../images/logos/evoluinfo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const handleSubscribeClick = async () => {
    try {
      setAlert(
        <Alert
          message="Aguarde até que o processo se conclua"
          type="info"
          showIcon
          closable
          onClose={closeAlert}
          style={{ position: "fixed", top: 16, right: 16 }}
        />
      );

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setTimeout(() => {
        if (response.ok) {
          setAlert(
            <Alert
              message="Cadastro realizado com sucesso!"
              description="Agora você receberá nossas novidades por e-mail."
              type="success"
              showIcon
              closable
              onClose={closeAlert}
              style={{ position: "fixed", top: 16, right: 16 }}
            />
          );
        } else {
          setAlert(
            <Alert
              message="Erro ao cadastrar o e-mail."
              description="Ocorreu um erro ao se inscrever. Por favor, tente novamente mais tarde."
              type="error"
              showIcon
              closable
              onClose={closeAlert}
              style={{ position: "fixed", top: 16, right: 16 }}
            />
          );
        }
      }, 3000);
    } catch (error) {
      setAlert(
        <Alert
          message="Erro ao cadastrar o e-mail."
          description="Ocorreu um erro ao se inscrever. Por favor, tente novamente mais tarde."
          type="error"
          showIcon
          closable
          onClose={closeAlert}
          style={{ position: "fixed", top: 16, right: 16 }}
        />
      );
    }
  };

  return (
    <footer className="home-footer">
      {alert}
      <div className="home-top">
        <div className="home-left4">
          <span className="home-text115">Inscreva-se em nossa Newsletter</span>
          <div className="home-subscription">
            <input
              type="email"
              placeholder="Enter your email"
              className="home-textinput input"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="home-subscribe">
              <span className="home-text116" onClick={handleSubscribeClick}>Enviar</span>
            </div>
          </div>
          <span className="home-text117">
            Ao assinar nossa newsletter você concorda com nossos Termos e Condições
          </span>
          <div className="home-contact">
            <span className="home-text118">Contato</span>
            <a
              href="mailto:contato@evoluinfo.com.br?subject=Duvidas"
              className="home-link"
            >
              contato@evoluinfo.com.br
            </a>
          </div>
        </div>
        <div className="home-right3">
          <div className="home-category5">
            <span className="home-text119">Soluções</span>
            <div className="home-links2">
              <span className="home-text120">WebSites</span>
              <span className="home-text121">Fabríca de Software</span>
              <span className="home-text122">Plataformas p/ Confeitarias</span>
              <span className="home-text123">SEO Avançado</span>
            </div>
          </div>
          <div className="home-category6">
            <span className="home-text125">Empresa</span>
            <div className="home-links3">
              <span className="home-text126">Sobre</span>
              <span className="home-text127">Equipes</span>
              <span className="home-text129">Integrações</span>
              <span className="home-text130">Carreira</span>
            </div>
          </div>
          <div className="home-category7">
            <span className="home-text132">Novidades</span>
            <div className="home-links4">
              <span className="home-text133">Candy Store - Ecossistema</span>
              <span className="home-text134">SantaAnna - by Candy Store</span>
              <span className="home-text135">Amor&Doce - by Candy Store</span>
              <span className="home-text136">Eko Global Forwarding</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-bottom">
        <img
          alt="pastedImage"
          src={Logo}
          className="home-branding"
        />
        <span className="home-text138">Copyright © Fillipi Villani - {currentYear}</span>
      </div>
    </footer>
  );
}

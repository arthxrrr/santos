// src/components/Footer/Footer.js
import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: auto; /* Isso empurra o footer para baixo */
`;

const FooterContainer = styled.footer`
  background: var(--santos-primary);
  color: white;
  padding: 2rem;
  text-align: center;
  margin-top: auto;
`;

const ClubInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    height: 50px;
  }

  div {
    h3 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0.75rem 0;

  a {
    color: var(--santos-secondary);
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: var(--santos-accent);
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.7rem;
  margin-top: 0.5rem;
  opacity: 0.8;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <ClubInfo>
          <img 
            src={process.env.PUBLIC_URL + '/images/santos3.png'} 
            alt="Santos FC" 
          />
          <div>
            <h3>SANTOS FUTEBOL CLUBE</h3>
            <p>Fundado em 14 de abril de 1912</p>
          </div>
        </ClubInfo>

        <SocialLinks>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </SocialLinks>

        <Copyright>
          © {new Date().getFullYear()} Santos FC Store. Todos os direitos reservados.
        </Copyright>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
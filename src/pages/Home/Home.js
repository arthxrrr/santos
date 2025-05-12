import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Animação de entrada
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Container principal
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background: #f9f9f9;
`;

// Container da imagem única
const HeroBanner = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

// Imagem principal
const MainImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$src});
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`;


// Botão principal (estilo Nike)
const ShopButton = styled(Link)`
  display: inline-block;
  margin-top: 3rem;
  padding: 1.2rem 3.5rem;
  background: var(--santos-primary);
  color: black;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.4s;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  
  &:hover {
    background: var(--santos-accent);
    color: var(--santos-primary);
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.2);
  }
`;

function Home() {
  return (
    <HeroContainer>
      <HeroBanner>
        <MainImage 
          $src={process.env.PUBLIC_URL + '/images/teste.jpg'} 
        />
      </HeroBanner>

      <ShopButton to="/produtos">
        VER COLEÇÃO COMPLETA
      </ShopButton>
    </HeroContainer>
  );
}

export default Home;
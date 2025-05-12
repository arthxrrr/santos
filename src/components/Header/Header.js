import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(90deg, var(--santos-primary) 50%, var(--santos-red) 50%);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 3px solid var(--santos-accent);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  color: var(--santos-secondary);
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 50px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: var(--santos-secondary);
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    background: var(--santos-accent);
    color: var(--santos-primary);
  }
`;

const CartLink = styled(Link)`
  background: var(--santos-accent);
  color: var(--santos-primary);
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

function Header() {
  const { cartItems } = useCart();
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <img 
            src={process.env.PUBLIC_URL + '/images/santos3.png'} 
            alt="Santos FC Logo" 
          />
          SANTOS FC STORE
        </Logo>
        
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/produtos">Produtos</NavLink>
          
          <CartLink to="/cart">
            🛒 ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </CartLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
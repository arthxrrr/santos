import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const CartTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const ItemInfo = styled.p`
  margin: 0.3rem 0;
  color: #666;

  span {
    font-weight: 600;
    color: #333;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const RemoveButton = styled.button`
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: auto;

  &:hover {
    background: #ff7875;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;

  span {
    color: #1890ff;
  }
`;

const CheckoutButton = styled(Link)`
  background: #1890ff;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #40a9ff;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`;

// Mantenha todos os estilos anteriores e adicione:
const CartPageContainer = styled.div`
  min-height: calc(100vh - 300px); /* Ajuste conforme a altura do header e footer */
  display: flex;
  flex-direction: column;
`;

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  if (cartItems.length === 0) {
    return (
      <EmptyCart>
        <h2>Seu carrinho está vazio</h2>
        <p>Adicione produtos para continuar</p>
      </EmptyCart>
    );
  }

  return (
    <CartContainer>
      <CartTitle>Seu Carrinho</CartTitle>
      
      {cartItems.map(item => (
        <CartItem key={`${item.id}-${item.size}`}>
          <ItemImage 
            src={process.env.PUBLIC_URL + item.image} 
            alt={item.name} 
          />
          <ItemDetails>
            <ItemName>{item.name}</ItemName>
            <ItemInfo>
              <span>Tamanho:</span> {item.size}
            </ItemInfo>
            <ItemInfo>
              <span>Preço:</span> R$ {item.price.toFixed(2)}
            </ItemInfo>
            
            <QuantityControls>
              <QuantityButton 
                onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
              >
                -
              </QuantityButton>
              <QuantityInput
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(
                  item.id,
                  item.size,
                  parseInt(e.target.value) || 1
                )}
                min="1"
              />
              <QuantityButton 
                onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
              >
                +
              </QuantityButton>
            </QuantityControls>
          </ItemDetails>
          
          <RemoveButton 
            onClick={() => removeFromCart(item.id, item.size)}
          >
            Remover
          </RemoveButton>
        </CartItem>
      ))}

      <CartSummary>
        <TotalText>
          Total: <span>R$ {total.toFixed(2)}</span>
        </TotalText>
        <CheckoutButton to="/checkout">
          Finalizar Compra
        </CheckoutButton>
      </CartSummary>
    </CartContainer>
  );
}

export default CartPage;
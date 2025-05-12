import styled from 'styled-components';
import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #40a9ff;
    transform: translateY(-2px);
  }
`;

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M'); // Tamanho padrão

  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <ProductImage 
          src={process.env.PUBLIC_URL + product.image} 
          alt={product.name} 
        />
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
        </ProductInfo>
      </Link>
      
      <div style={{ padding: '0 1.5rem 1.5rem' }}>
        <select 
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        >
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>
        
        <AddButton onClick={() => addToCart(product, selectedSize)}>
          Adicionar ao Carrinho
        </AddButton>
      </div>
    </Card>
  );
}

export default ProductCard;
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styled from 'styled-components';

const DetailContainer = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
`;

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  // Simulando busca do produto (substitua por API real depois)
  const product = {
    id,
    name: `Camiseta ${id}`,
    price: 79.90,
    description: 'Camiseta de algodão 100% premium com estampa exclusiva',
    image: `/images/santoscamisa${id}.png`,
    sizes: ['P', 'M', 'G', 'GG']
  };

  return (
    <DetailContainer>
      <ProductImage 
        src={process.env.PUBLIC_URL + product.image} 
        alt={product.name}
      />
      <div>
        <h1>{product.name}</h1>
        <p>R$ {product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        
        <div>
          <h3>Tamanhos:</h3>
          {product.sizes.map(size => (
            <button key={size}>{size}</button>
          ))}
        </div>
        
        <button onClick={() => addToCart(product)}>
          Adicionar ao Carrinho
        </button>
      </div>
    </DetailContainer>
  );
}

export default ProductDetail;
import { useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';

const ProductsPage = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProductsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: var(--santos-primary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

function Produtos() {
  const [filteredProducts] = useState(products);

  return (
    <ProductsPage>
      <ProductsHeader>
        <h1>COLEÇÃO SANTOS FC 2023</h1>
        <p>Vista-se com o orgulho alvinegro. Camisas oficiais, edições especiais e produtos exclusivos.</p>
      </ProductsHeader>

      <ProductsGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ProductsPage>
  );
}

export default Produtos;
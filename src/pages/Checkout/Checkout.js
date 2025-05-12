import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;

  div {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
  }
`;

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'credit'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular processamento do pedido
    alert('Compra realizada com sucesso!');
    clearCart();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Finalizar Compra</h1>
      
      <div>
        <label>Nome completo:</label>
        <input 
          type="text" 
          required 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>
      
      <div>
        <label>E-mail:</label>
        <input 
          type="email" 
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      
      <div>
        <label>Endereço:</label>
        <input 
          type="text" 
          required
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
        />
      </div>
      
      <div>
        <label>Forma de pagamento:</label>
        <select
          value={formData.payment}
          onChange={(e) => setFormData({...formData, payment: e.target.value})}
        >
          <option value="credit">Cartão de Crédito</option>
          <option value="debit">Cartão de Débito</option>
          <option value="pix">PIX</option>
        </select>
      </div>
      
      <button type="submit">Confirmar Pedido</button>
    </FormContainer>
  );
}

export default Checkout;
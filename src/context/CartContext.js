import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, selectedSize) => {
    setCartItems(prevItems => {
      // Verifica se já existe o mesmo produto com o mesmo tamanho
      const existingItem = prevItems.find(
        item => item.id === product.id && item.size === selectedSize
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, size: selectedSize, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId, itemSize) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === itemId && item.size === itemSize))
    );
  };

  const updateQuantity = (itemId, itemSize, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.size === itemSize
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
import { StyleCartItemContainer, StyleItemDetails, StyleItemElement } from './cart-item.styles';

const CartItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <StyleCartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <StyleItemDetails>
        <StyleItemElement>{name}</StyleItemElement>
        <StyleItemElement>{quantity} x ${price}</StyleItemElement>
      </StyleItemDetails>      
    </StyleCartItemContainer>
  );
};

export default CartItem;
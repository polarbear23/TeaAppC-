import React from 'react';
import { Product } from '../../../App';

interface StateProps {
  product: {
    price: number;
  };
}

const CartItem = (props: StateProps) => {
  const { product } = props;
  return (
    <div>
      <span>{product.price}</span>
    </div>
  );
};

export default CartItem;

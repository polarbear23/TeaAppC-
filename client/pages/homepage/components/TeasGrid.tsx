import TeasSearch from './TeasSearch';
import TeasGridItem from './TeasGridItem';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config';
import { Product } from '../../../App';

export interface Tea {
  id: number;
  imgUrl: string;
  isOutOfStock: boolean;
  name: string;
  description: string;
  type: string;
  amountInStock: number;
  origin: string;
  brewTime: number;
  temperature: number;
  product: {
    id: number;
    price: number;
    teaId: number;
  };
}

interface StateProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
}

const TeasGrid = (props: StateProps) => {
  const [teas, setTeas] = useState<Tea[]>([]);
  const [filteredTeas, setFilteredTeas] = useState<Tea[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const { setCartQuantity, cartQuantity, setCart, cart } = props;

  useEffect(() => {
    const fetchTea = async () => {
      const res = await fetch(API_URL.TEA);
      const result = await res.json();
      console.log('tea', result.data);
      setTeas(result.data);
    };
    fetchTea();
  }, []);

  useEffect(() => {
    const filterTeas = teas.filter((tea: Tea) => {
      if (tea.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return tea;
      }
      return null;
    });
    setFilteredTeas(filterTeas);
  }, [searchInput, teas]);

  return (
    <div className="teas-grid">
      <TeasSearch setSearchInput={setSearchInput} />
      <div className="grid">
        {filteredTeas.length
          ? filteredTeas.map((tea: Tea, index: number) => (
              <TeasGridItem key={index} tea={tea} setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} setCart={setCart} cart={cart} />
            ))
          : teas.map((tea: Tea, index: number) => (
              <TeasGridItem key={index} tea={tea} setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} setCart={setCart} cart={cart} />
            ))}
      </div>
    </div>
  );
};

export default TeasGrid;

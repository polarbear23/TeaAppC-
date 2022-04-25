import '../../styles/store.css';
import StoreSearch from './components/StoreSearch';
import StoreTileContainer from './components/StoreTileContainer';
import { Product } from '../../App';

interface StateProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
}

const Store = (props: StateProps) => {
  const { setCartQuantity, cartQuantity, setCart, cart } = props;
  return (
    <main className="store">
      <div className="store-leftbar">filters</div>
      <div className="store-main">
        <StoreSearch />
        <StoreTileContainer />
      </div>
    </main>
  );
};

export default Store;

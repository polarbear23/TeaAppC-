import TeasGrid from './TeasGrid';
import { Product } from '../../../App';
import '../../../styles/homepageTeas.css';

interface StateProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
}

const Teas = (props: StateProps) => {
  const { setCartQuantity, cartQuantity, setCart, cart } = props;

  return (
    <section className="teas">
      <h3 className="section-title">Teas</h3>
      <TeasGrid setCartQuantity={setCartQuantity} setCart={setCart} cartQuantity={cartQuantity} cart={cart} />
    </section>
  );
};

export default Teas;

import { Tea } from '../../homepage/components/TeasGrid';

interface StateProps {
  tea: Tea;
}

const StoreTile = (props: StateProps) => {
  const { tea } = props;
  return (
    <div className="store-item-tile">
      <div className="store-item-img-section" style={{ backgroundImage: `url(${tea.imgUrl})` }}>
        <h3 className="store-tile-name">{tea.name}</h3>
      </div>
      <div className="store-item-info">
        <span>{}</span>
        <span>Type: {tea.type}</span>
        <span>Origin: {tea.origin}</span>
        <span>Price: {tea.product.price / 100}</span>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default StoreTile;

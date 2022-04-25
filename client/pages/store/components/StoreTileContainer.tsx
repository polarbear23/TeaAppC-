import StoreTile from './StoreTile';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config';
import { Tea } from '../../homepage/components/TeasGrid';

const StoreTileContainer = () => {
  const [teas, setTeas] = useState([]);
  useEffect(() => {
    const fetchTea = async () => {
      const res = await fetch(API_URL.TEA);
      const result = await res.json();
      console.log('tea', result.data);
      setTeas(result.data);
    };
    fetchTea();
  }, []);
  return (
    <div className="store-tile-container">
      {teas.map((tea: Tea) => (
        <StoreTile tea={tea}></StoreTile>
      ))}
    </div>
  );
};

export default StoreTileContainer;

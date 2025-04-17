import {useState} from 'react';
import DataPhone from '../../Data/productPhone';
import CardProducts from '../../Components/Cards/CardProducts';

export default function Products() {
  const [items, setItems] = useState(DataPhone);
  return (
    <div className='container'>
      <h1>Products</h1>
      <div className='productList'>
        <CardProducts />
         {items.map(item => <CardProducts key={item.id} {...item} />)}
      </div>
    </div>
  )
}

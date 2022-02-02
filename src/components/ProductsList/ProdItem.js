import ProdImg from './ProdImg';
import ProdInfo from './ProdInfo';
import ProdBtns from './ProdBtns';
import Card from '@mui/material/Card';

function ProdItem(props) {
  return (
    <Card>
      <ProdImg img={props.img} />
      <ProdInfo title={props.title} price={props.price} stock={props.stock} />
      <ProdBtns />
    </Card>
  );
}

export default ProdItem;

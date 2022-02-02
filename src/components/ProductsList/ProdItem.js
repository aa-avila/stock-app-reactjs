import ProdImg from './ProdImg';
import ProdInfo from './ProdInfo';
import ProdBtns from './ProdBtns';
import Stack from '@mui/material/Stack';

function ProdItem(props) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <ProdImg img={props.img} />
      <ProdInfo title={props.title} price={props.price} stock={props.stock} />
      <ProdBtns />
    </Stack>
  );
}

export default ProdItem;

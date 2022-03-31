import ProdImg from './ProdImg';
import ProdInfo from './ProdInfo';
import ProdBtns from './ProdBtns';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

function ProdItem(props) {
  return (
    <Card
      elevation={3}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 1,
        paddingLeft: 1,
        paddingRight: 1
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        <ProdImg img={props.thumb} />
        <ProdInfo title={props.title} price={props.price} stock={props.stock} />
      </CardActionArea>
      <ProdBtns />
    </Card>
  );
}

export default ProdItem;

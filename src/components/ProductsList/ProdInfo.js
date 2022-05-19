import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import classes from './ProdList.module.css';

function ProdInfo(props) {
  return (
    <CardContent sx={{ width: '100%' }}>
      <Typography variant="subtitle1" component="div">
        {props.title}
      </Typography>
      <Typography
        variant="subtitle2"
        component="div"
        sx={{
          display: 'flex',
          width: '80%',
          minWidth: '10rem',
          maxWidth: '15rem'
        }}
      >
        <Box sx={{ minWidth: '50%', marginRight: 1 }}>
          <span>Precio: </span>
          <span className={classes.listItemNumber}>${props.price}</span>
        </Box>
        <Box>
          <span>Stock: </span>
          <span className={classes.listItemNumber}>{props.stock}</span>
        </Box>
      </Typography>
    </CardContent>
  );
}

export default ProdInfo;

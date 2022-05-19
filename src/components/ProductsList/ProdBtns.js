import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProdBtns(props) {
  return (
    <CardActions
      sx={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '1rem' }}
    >
      <IconButton
        size="small"
        sx={{
          backgroundColor: '#6200ef',
          '&:hover': { backgroundColor: '#7c4dff' },
          color: '#ffffff'
        }}
      >
        <AddIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        size="small"
        sx={{
          backgroundColor: '#6200ef',
          '&:hover': { backgroundColor: '#7c4dff' },
          color: '#ffffff'
        }}
      >
        <RemoveIcon fontSize="inherit" />
      </IconButton>
    </CardActions>
  );
}

export default ProdBtns;

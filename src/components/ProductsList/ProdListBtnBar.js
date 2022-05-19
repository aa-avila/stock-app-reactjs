import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

function ProdListBtnBar(props) {
  return (
    <IconButton
      aria-label="Agregar producto"
      size="large"
      sx={{
        backgroundColor: '#6200ef',
        '&:hover': { backgroundColor: '#7c4dff' },
        color: '#ffffff'
      }}
    >
      <AddIcon fontSize="inherit" />
    </IconButton>
  );
}

export default ProdListBtnBar;

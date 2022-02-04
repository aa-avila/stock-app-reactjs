import ProdListMain from '../components/ProductsList/ProdListMain';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

function ProductsList() {
  return (
    <>
      <section className="search-bar">
        <TextField
          fullWidth
          id="standard-bare"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            )
          }}
          // sx={{ boxShadow: 3 }}
        />
      </section>
      <section className="products-list">
        <ProdListMain />
      </section>
      <section className="button-bar">
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
      </section>
    </>
  );
}

export default ProductsList;

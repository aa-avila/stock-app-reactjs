import ProdListMain from '../components/ProductsList/ProdListMain';
import ProdListBtnBar from '../components/ProductsList/ProdListBtnBar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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
        <ProdListBtnBar />
      </section>
    </>
  );
}

export default ProductsList;

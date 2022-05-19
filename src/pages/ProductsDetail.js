import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

function ProductsDetail() {
  const productData = {
    id: 'a1',
    thumb: 'https://i.imgur.com/qcxQcJ6s.jpg',
    img: 'https://i.imgur.com/qcxQcJ6m.jpg',
    title: 'Perro de lana',
    description:
      'Peluche de perro salchicha con gorro de navidad. Tejido a mano.',
    price: 230,
    stock: 17
  };
  return (
    <>
      <section className="product-detail-cont">
        <Typography variant="h4" component="div">
          {productData.title}
        </Typography>
        <img src={productData.img} alt="imagen del producto" />
        <Typography variant="body1" component="div">
          {productData.description}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: 'flex'
          }}
        >
          <Box sx={{ width: '50%' }}>
            <span>Precio: </span>
            <span>${productData.price}</span>
          </Box>
          <Box>
            <span>Stock: </span>
            <span>{productData.stock}</span>
          </Box>
        </Typography>
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

export default ProductsDetail;

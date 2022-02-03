import Avatar from '@mui/material/Avatar';
function ProdImg(props) {
  return (
    <Avatar
      src={props.img}
      alt="imagen del producto"
      variant="rounded"
      sx={{ width: 50, height: 50 }}
    />
  );
}

export default ProdImg;

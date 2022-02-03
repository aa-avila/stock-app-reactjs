import classes from './Header.module.css';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.innerContainer}>
        <img src="/logo-100.png" alt="logo" className={classes.logo}></img>
        <div className={classes.pageTitle}>
          <Typography variant="h5">Nombre pagina</Typography>
        </div>
      </div>
    </header>
  );
}

export default Header;

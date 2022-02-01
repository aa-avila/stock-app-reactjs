import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.innerContainer}>
        <img src="/logo-100.png" alt="logo" className={classes.logo}></img>
        <div className={classes.pageTitle}>nombre pagina</div>
      </div>
    </header>
  );
}

export default Header;

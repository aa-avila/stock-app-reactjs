import SearchBar from '../components/SearchBar/SearchBar';
function ProductsList() {
  return (
    <>
      <section className="search-bar">
        <SearchBar />
      </section>
      <section className="products-list">List</section>
      <section className="button-bar">Button</section>
    </>
  );
}

export default ProductsList;

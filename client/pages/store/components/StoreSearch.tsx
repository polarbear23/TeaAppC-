const StoreSearch = () => {
  return (
    <form className="store-search-form" action="">
      <input className="store-search-input" type="text" placeholder="Search..." name="search" />
      <button className="store-search-btn">
        <img className="store-search-icon" src="/images/searchIcon.svg" alt="Search Icon" />
      </button>
    </form>
  );
};

export default StoreSearch;

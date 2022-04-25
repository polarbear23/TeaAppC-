interface StateProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const TeasSearch = (props: StateProps) => {
  const { setSearchInput } = props;

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setSearchInput(value);
  };

  return (
    <form className="teas-search-form" action="">
      <input className="teas-search-input" type="text" placeholder="Search..." name="search" onChange={handleChange} />
      <button className="teas-search-btn">
        <img className="teas-search-icon" src="/images/searchIcon.svg" alt="Search Icon" />
      </button>
    </form>
  );
};

export default TeasSearch;

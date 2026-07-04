import { useDispatch } from 'react-redux';
import { setSearch } from '../../features/filterSlice';

function SearchBar() {
  const dispatch = useDispatch();
  return (
    <>
      <input
        className="form-control form-control-lg"
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </>
  );
}

export default SearchBar;

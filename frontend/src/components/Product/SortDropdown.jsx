import { useDispatch, useSelector } from 'react-redux';
import { Form, InputGroup } from 'react-bootstrap';
import { setSort } from '../../features/FilterSlice';

function SortDropdown() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filters.sort);

  return (
    <div className="d-flex justify-content-end mb-4">
      <InputGroup style={{ maxWidth: '260px' }}>
        <InputGroup.Text className="bg-white border-end-0">
          <i className="bi bi-sort-down"></i>
        </InputGroup.Text>

        <Form.Select
          value={sort}
          onChange={(e) => dispatch(setSort(e.target.value))}
          className="border-start-0 shadow-none"
        >
          <option value="Newest">Newest</option>
          <option value="Popular">Popular</option>
          <option value="Price Low-High">Price: Low to High</option>
          <option value="Price High-Low">Price: High to Low</option>
        </Form.Select>
      </InputGroup>
    </div>
  );
}

export default SortDropdown;

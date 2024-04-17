import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

import s from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/selectors';

function SearchBox() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);

    return (
        <label className={s.label}>
            Find contacts by name
            <input type="text" className={s.input} value={filterValue} onChange={e => dispatch(changeFilter(e.target.value))} />
        </label>
    );
}

export default SearchBox;

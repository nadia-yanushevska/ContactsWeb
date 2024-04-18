import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

import s from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';

function SearchBox() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);

    useEffect(() => {
        return () => dispatch(changeFilter(''));
    }, []);

    return (
        <label className={s.label}>
            Find contacts by name
            <div className={s.div}>
                <input type="text" className={s.input} value={filterValue} onChange={e => dispatch(changeFilter(e.target.value))} />
                {filterValue && (
                    <button type="button" className={s.btn} onClick={() => dispatch(changeFilter(''))}>
                        <IoMdClose color="darkslategrey" size={28} />
                    </button>
                )}
            </div>
        </label>
    );
}

export default SearchBox;
